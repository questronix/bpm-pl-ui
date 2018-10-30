const TAG = '[Role]';
const Logger = require('../Common/services/Logger');
const express = require('express');
const router = express.Router();
const mw = require('../Common/middleware/Authentication');
const role = require('./model/Role');

router.get('/', mw.isAuthenticated, (req, res) => {
  const ACTION = '[getAllRole]';
  Logger.log('debug', `${TAG}${ACTION} - request parameters`, req.params);
  role.getAllRoles().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.error(err);
  });
});

router.get('/:id', mw.isAuthenticated, (req, res) => {
  const ACTION = '[getRoleById]';
  Logger.log('debug', `${TAG}${ACTION} - request parameters`, req.params);
  role.getRoleById(req.params.id).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.error(err);
  });
});

router.put('/:id', mw.isAuthenticated, (req, res) => {
  const ACTION = '[updateById]';
  Logger.log('debug', `${TAG}${ACTION} - request parameters`, req.params);
  role.updateById(req.params.id, req.body).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.error(err);
  });
});

router.post('/', mw.isAuthenticated, (req, res) => {
  const ACTION = '[createNewRole]';
  Logger.log('debug', `${TAG}${ACTION} - request parameters`, req.params);
  role.createNewRole(req.body).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.error(err);
  });
});

router.delete('/:id', mw.isAuthenticated, (req, res) => {
  const ACTION = '[removeRole]';
  Logger.log('debug', `${TAG}${ACTION} - request parameters`, req.params);
  role.removeRole(req.params.id).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.error(err);
  });
});






module.exports = router;
