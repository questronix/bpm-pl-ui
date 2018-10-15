const TAG = '[Login]';
const db = require('../../Common/services/Database');
const err = require('../../Common/services/Errors');
const logger = require('../../Common/services/Logger');
const bcrypt = require('bcrypt');

module.exports.authenticate = (username, password)=>{
  const ACTION = '[authenticateAdmin]';
  logger.log('info', `${TAG}${ACTION}`, {username, password});
  // return new Promise((resolve, reject)=>{
  //   //Find user name first
    
  // });
};