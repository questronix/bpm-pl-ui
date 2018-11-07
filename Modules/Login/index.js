const TAG = '[Login]';
const express = require('express');
const router = express.Router();
const Logger = require('../Common/services/Logger');
const lm = require('./model/Login');
const sm = require('../Common/middleware/Session');

router.post('/login', async (req, res) => {
  const ACTION = '[postLogin]';
  const { username, password } = req.body;
  let bpm;
  let ldap;
  Logger.log('debug', `${TAG}${ACTION} - request body`, req.body);

  try {
    bpm = await lm.bpm(username);
    if (bpm) {
      ldap = await lm.ldap(bpm.username, password);
      if (ldap.authenticated) {
        req.session.user = bpm;
        res.send(req.session.user);
      }
      else {
        res.status(404).send(ldap);
      }
    } 
  } catch (error) {
    res.error(error);
  }

  
});

router.post('/logout', sm.destroy, (req, res) => {
  const ACTION = '[postLogin]';
  Logger.log('debug', `${TAG}${ACTION} - request body`, req.body);

  res.send({
    status: 200,
    msg: 'Successfully logout'
  });
});

router.post('/ldap', (req, res) => {
  const ACTION = '[postLogin]';
  Logger.log('debug', `${TAG}${ACTION} - request body`, req.body);

  lm.ldap(req.body.usernamem, req.body.password)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      console.log(error);
      res.error(error);
    });
});

module.exports = router;
