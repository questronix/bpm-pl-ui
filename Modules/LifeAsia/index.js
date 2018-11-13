const TAG = '[Task]';
const express = require('express');
const router = express.Router();
const Logger = require('../Common/services/Logger');
const la = require('./model/Policy');
const client = require('./model/Client');
const doc = require('./model/Document');
const trans = require('./model/Transaction');
const mw = require('../Common/middleware/Authentication');

router.get('/:clientNum/client', mw.isAuthenticated, (req, res) => {
  const ACTION = '[getClient]';
  Logger.log('debug', `${TAG}${ACTION} - request parameters`, req.params);

  client.getClientDetails(req.params.clientNum)
    .then(data => {
      res.send({
        data
      });
    })
    .catch(error => {
      res.error(error);
    });
});

router.put('/client/update', (req, res) => {
  const ACTION = '[getClient]';
  Logger.log('debug', `${TAG}${ACTION} - request body`, req.body);

  client.updateClientDetails(req.body)
  .then(data => {
    res.send({
      data
    });
  })
  .catch(error => {
    res.error(error);
  });
});

router.get('/:policyNum/policy', mw.isAuthenticated, (req, res) => {
  const ACTION = '[getPolicy]';
  Logger.log('debug', `${TAG}${ACTION} - request parameters`, req.params);

  la.getPolicy(req.params.policyNum)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(err.status).send(err);
    });
});

router.get('/documents/:transactionId/:subTransactionId', mw.isAuthenticated, (req, res) => {
  const ACTION = '[getDocument]';
  const { transactionId, subTransactionId } = req.params;
  Logger.log('debug', `${TAG}${ACTION} - request parameters`, req.params);

  doc.getDocList(transactionId, subTransactionId)
    .then(data => {
      res.send({
        data
      });
    })
    .catch(err => {
      res.status(err.status).send(err);
    });
});

router.post('/documents', mw.isAuthenticated, (req, res) => {
  const ACTION = '[getDocument]';
  Logger.log('debug', `${TAG}${ACTION} - request body`, req.body);

  doc.create(req.body)
    .then(data => {
      res.send({
        data
      });
    })
    .catch(err => {
      res.status(err.status).send(err);
    });
});


router.post('/transaction', mw.isAuthenticated, (req, res) => {
  const ACTION = '[postTransaction]';
  Logger.log('debug', `${TAG}${ACTION} - request body`, req.body);

  trans.generateTransactionId()
    .then(data => {
      res.send({
        data
      });
    })
    .catch(err => {
      res.status(err.status).send(err);
    });
});

module.exports = router;
