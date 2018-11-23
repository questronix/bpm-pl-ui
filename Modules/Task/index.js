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

    const info = req.body.policy;
    const owner = info.clients.find(client => client.role == "OW");
    const insured = info.clients.find(client => client.role == "LF");
    
    await transaction.saveTransaction({
        transactionNo: trans.result.transactionNumber,
        policyno: info.number,
        assignee: req.user.Username,
        createdBy: req.user.Username,
        owner: owner.clntNum,
        ownerName: `${owner.clientLastName}, ${owner.clientFirstName} ${owner.clientMiddleName}`,
        insured: insured.clntNum,
        insuredName: `${insured.clientLastName}, ${insured.clientFirstName} ${insured.clientMiddleName}`,
        transactionType: 1
      })
      .catch((err) => res.send(err));
  
    task.new(req.session.user.User_ID, req.session.user.Username, trans.result.transactionNumber, info.number).then((data) => {
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

  task.getAll(req.session.user.id)
    .then(tasks=>{

      const transactions = tasks.map(e=>{
        return {
          transactionNo: e.variables.transactionNumber
        }
      });

      transaction.getTransactionDetails({
        transactions: transactions
      }).then((data) => {
        let result = data.result.map(e=>{
          let task = tasks.filter(tRes=>{
            if(tRes.variables.transactionNumber == e.transactionNo){
              return tRes.variables.username;
            }
          });
          let user = '-';
          let startTime = '-';
          let status = '-';
          let id;
          if(task.length > 0){
            user = task[0].variables.username;
            startTime = task[0].startTime;
            status = task[0].variables.status;
            id = task[0].id;
          }
          return {
            ...e,
            username: user,
            startTime: startTime,
            status: status,
            id,
          };
        });
        data.result = result;
        res.send(data);
      }).catch((err) => {
        res.error(err);
      });
    })
    .catch((err) => { res.error(err); });
    
  // res.send(transactions);
  // task.getAll(req.session.user.id).then((data) => {
  //   res.send(data);
  // }).catch((err) => {
  //   res.error(err);
  // });
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
