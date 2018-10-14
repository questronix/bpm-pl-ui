const TAG = '[Model][Token]';
const logger = require('../services/Logger');
const Errors = require('../services/Errors');
const db = require('../services/Database');
const JWT = require('../services/JWT');
const moment = require('moment');

function createToken(type, ref_id, payload){
  return new Promise((resolve, reject)=>{
    let jwt = new JWT(payload);
    let token = jwt.sign();
  
    jwt.verify(token, (err, data)=>{
      if(err){
        reject(Errors.raise('JWT_TOKEN_ERROR', err));
      }else{
        let exp = moment(data.exp * 1000).format("YYYY-MM-DD HH:mm:ss");
        let iat = moment(data.iat * 1000).format("YYYY-MM-DD HH:mm:ss");
        db.execute(`
          INSERT INTO tokens SET ?
        `, [{
          ref_id,
          token,
          payload: JSON.stringify(payload),
          type: type,
          expires_at: exp,
          created_at: iat
        }]).then(result=>{
          if(result.affectedRows > 0){
            resolve({
              id: result.insertId,
              token: token
            });
          }else{
            reject(Errors.raise('NO_AFFECTED_ROWS'));
          }
        }).catch(error=>{
          reject(Errors.raise('INTERNAL_SERVER_ERROR', error));
        });
      }
    });
  });
}

module.exports.validateEmail = (token)=>{
  const ACTION = '[validateEmail]';
  logger.log('info', `${TAG}${ACTION}`, { token } );
  let jwt = new JWT();
  return new Promise((resolve, reject)=>{
    jwt.verify(token, function(err, data){
      if(err){
        reject(Errors.raise('JWT_TOKEN_VERIFY_ERROR', err)); 
      }else{
        db.execute(`SELECT * FROM tokens where token = ? AND status = 0`, [token]).then(result=>{
          if(result.length > 0){
            resolve(result[0].payload);
          }else{
            reject(Errors.raise('JWT_TOKEN_VERIFY_ERROR')); 
          }
        }).catch(error=>{
          reject(Errors.raise('INTERNAL_SERVER_ERROR', error));
        });
      }
    });
  });
};

module.exports.verifyEmailbyToken = (token)=>{
  const ACTION = '[verifyEmailbyToken]';
  logger.log('info', `${TAG}${ACTION}`, { token } );
  return new Promise((resolve, reject)=>{
    db.execute(`UPDATE tokens SET status = 1 WHERE token = ?`, [token]).then(result=>{
      if(result.affectedRows > 0){
        resolve(result);
      }else{
        reject(Errors.raise('NO_AFFECTED_ROWS'));
      }
    }).catch(error=>{
      reject(Errors.raise('INTERNAL_SERVER_ERROR', error));
    });
  });
};

module.exports.invalidateToken = (token)=>{
  const ACTION = '[updateToken]';
  logger.log('info', `${TAG}${ACTION}`, { token } );
  return new Promise((resolve, reject)=>{
    db.execute(`UPDATE tokens SET status = -1 WHERE token = ?`, [token]).then(result=>{
      if(result.affectedRows > 0){
        resolve(result);
      }else{
        reject(Errors.raise('NO_AFFECTED_ROWS'));
      }
    }).catch(error=>{
      reject(Errors.raise('INTERNAL_SERVER_ERROR', error));
    });
  });
};

module.exports.createVerifyEmail = (ref_id, payload) => {
  const ACTION = '[createVerifyEmail]';
  logger.log('info', `${TAG}${ACTION}`, { ref_id, payload} );
  return createToken('VERIFY_EMAIL', ref_id, payload);
};

module.exports.createResetPassword = (ref_id, payload) => {
  const ACTION = '[createVerifyEmail]';
  logger.log('info', `${TAG}${ACTION}`, { ref_id, payload} );
  return createToken('RESET_PASSWORD', ref_id, payload);
};