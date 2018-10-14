const TAG = `[MIDDLEWARE][Session]`;
const Error = require('../services/Errors');
const Logger = require('../../Common/services/Logger');

module.exports.destroy = (req, res, next)=>{
  const ACTION = `[destroy]`;
  Logger.log('info', `${TAG}${ACTION} - before destroy`, req.session);
  //destroy session
  req.session.destroy();
  Logger.log('info', `${TAG}${ACTION} - after destroy`, req.session);
  next();
};