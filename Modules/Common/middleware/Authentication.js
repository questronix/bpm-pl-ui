const TAG = `[MIDDLEWARE][Authentication]`;
const Error = require('../services/Errors');
const Logger = require('../../Common/services/Logger');

module.exports.isAuthenticated = (req, res, next)=>{
  const ACTION = `[isAuthenticated]`;
  //Get user session
  let user = req.session.user;
  Logger.log('info', `${TAG}${ACTION} - session user`, user);
  //if user doen't exist
  if(!user){
    res.error(Error.raise('NO_USER_SESSION'));
  }else{
    //return the session
    req.user = req.session.user;
    next();
  }
};