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
      res.send(data);
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

router.get('/:policyNum/policy', mw.isAuthenticated, async(req, res) => {
  const ACTION = '[getPolicy]';
  Logger.log('debug', `${TAG}${ACTION} - request parameters`, req.params);
  let policy;
  policy = await la.getPolicy(req.params.policyNum)
    .catch(err => {
      res.status(err.status).send(err);
    });

  la.getLarten(req.params.policyNum)
    .then(data => {
      // policy.result.push(data);
      // const d = { }
      if (data.status == "fail") {
        res.send(data)
      } else {
        res.send({
          status: "success",
          result: { number: req.params.policyNum, ...policy.result, ...data.result},
        });
      }
    })
    .catch(err => {
      res.status(err.status).send(err);
    });
  
  
  // la.getPolicy(req.params.policyNum)
  //   .then(data => {
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     res.status(err.status).send(err);
  //   });
});

router.get('/:policyNum/lartenq', mw.isAuthenticated, (req, res) => {
  const ACTION = '[getLartenq]';
  Logger.log('debug', `${TAG}${ACTION} - request parameters`, req.params);

  la.getLarten(req.params.policyNum)
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
      res.send(data);
    })
    .catch(err => {
      res.status(err.status).send(err);
    });
});


router.get('/documents/:transactionId', mw.isAuthenticated, (req, res) => {
  const ACTION = '[getDocument]';
  const { transactionId, subTransactionId } = req.params;
  Logger.log('debug', `${TAG}${ACTION} - request parameters`, req.params);

  doc.getDocList(transactionId)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(err.status).send(err);
    });
});

router.post('/documents', mw.isAuthenticated, (req, res) => {
  const ACTION = '[getDocuments]';
  Logger.log('debug', `${TAG}${ACTION} - request body`, req.body);

  doc.doclist(req.body)
    .then(data => {
      res.send(data);
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

router.post('/transaction/save', mw.isAuthenticated, (req, res) => {
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

router.put('/documents', mw.isAuthenticated, (req, res) => {
  const ACTION = '[postSaveDocList]';
  Logger.log('debug', `${TAG}${ACTION} - request body`, req.body);

  trans.saveTransaction(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(err.status).send(err);
    });
});

router.post('/memo', mw.isAuthenticated, (req, res) => {
  const ACTION = '[createMemo]';
  Logger.log('debug', `${TAG}${ACTION} - request body`, req.body);

  doc.createMemo(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(err.status).send(err);
    });
});

module.exports = router;
