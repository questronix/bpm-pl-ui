const TAG = '[Login]';
const express = require('express');
const router = express.Router();

const lm = require('./model/Login');

router.post('/', (req, res, next)=>{
  const ACTION = '[postLogin]';
  lm.authenticate(req.body.username)
  .then(data=>{
    res.success(data);
  })
  .catch(error=>{
    res.error(error);
  });
});

module.exports = router;