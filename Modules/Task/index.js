const TAG = '[Task]';
const Logger = require('../Common/services/Logger');
const express = require('express');
const router = express.Router();
const mw = require('../Common/middleware/Authentication');
const task = require('./model/Task');
const transaction = require('./model/Transaction');

router.post('/', mw.isAuthenticated, async(req, res) => {
  const ACTION = '[postNewTask]';
  Logger.log('debug', `${TAG}${ACTION} - request body`, req.body);

  try {
    const trans = await transaction.generateTransactionId()
      .catch((err) => res.send(err));

    const pNo = JSON.parse(req.body.info).number;
    
    await transaction.saveTransactionDetails({
        "transactionNo": trans.result.transactionNumber,
        "policyno": pNo,
        "assignee": "sample",
        "createdBy": req.user.Firstname
      })
      .catch((err) => res.send(err));
  
    task.new(req.session.user.Username, req.body.info, trans.result.transactionNumber).then((data) => {
      res.send(data);
    }).catch((err) => {
      res.error(err);
    });
  } catch (err) {
    res.error(err);
  }
});

router.get('/', mw.isAuthenticated, (req, res) => {
  const ACTION = '[getAllTasks]';
  Logger.log('debug', `${TAG}${ACTION} - request parameters`, req.params);
  task.getAll(req.session.user.id).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.error(err);
  });
});

router.get('/:taskId', mw.isAuthenticated, (req, res) => {
  const ACTION = '[getTaskDetails]';
  Logger.log('debug', `${TAG}${ACTION} - request parameters`, req.params);
  task.getDetails(req.params.taskId, req.session.user.id).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.error(err);
  });
});

router.post('/:taskId', mw.isAuthenticated, (req, res) => {
  const ACTION = '[postSubmitTask]';
  Logger.log('debug', `${TAG}${ACTION} - request parameters`, req.params);
  Logger.log('debug', `${TAG}${ACTION} - request body`, req.body);
  task.submit(req.body, req.params.taskId, req.session.user.id).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.error(err);
  });
});

router.post('/:taskId/claim', mw.isAuthenticated, (req, res) => {
  const ACTION = '[postClaimTask]';
  Logger.log('debug', `${TAG}${ACTION} - request parameters`, req.params);
  Logger.log('debug', `${TAG}${ACTION} - request body`, req.body);
  task.claim({ action: 'claim' }, req.params.taskId, req.session.user.id).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.error(err);
  });
});

module.exports = router;
