const TAG = '[Login]';
const express = require('express');
const router = express.Router();
const Logger = require('../Common/services/Logger');
const lm = require('./model/Login');
const sm = require('../Common/middleware/Session');

router.post('/login', (req, res)=>{
  const ACTION = '[postLogin]';
  Logger.log('debug', `${TAG}${ACTION} - request body`, req.body);
  lm.authenticate(req.body.username)
  .then(data=>{
    if (data.username) {
      req.session.user = data;
      res.send(req.session.user);
    }
    else {
      res.send(data);
    }
  })
  .catch(error=>{
    console.log(error);
    res.error(error);
  });
});

router.post('/logout', sm.destroy, (req, res)=>{
  const ACTION = '[postLogin]';
  Logger.log('debug', `${TAG}${ACTION} - request body`, req.body);

  res.send({
    status: 200,
    msg: 'Successfully logout'
  })
});

module.exports = router;