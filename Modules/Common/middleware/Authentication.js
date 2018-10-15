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

module.exports.isUbpAuthenticated = (req, res, next)=>{
  const ACTION = `[isUbpAuthenticated]`;
  //Get user session
  let access_token = req.session.UbpAccessToken;
  Logger.log('info', `${TAG}${ACTION} - session UBP access_token`, access_token);
  //if access_token doen't exist
  if(!access_token){
    // res.error(Error.raise('NO_ACCESS_TOKEN_SESSION'));
    if (req.session.receiptOptions) {
      res.redirect(`/#/transaction/receipt/?ref=${req.session.receiptOptions.ref}`);
    }else {
      res.redirect(`/#/dashboard`);
    }
  }else{
    //return the session
    // req.user = req.session.UbpAccessToken;
    next();
  }
};