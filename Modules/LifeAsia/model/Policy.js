const TAG = '[Policy]';
const ajax = require('../../Common/services/Ajax');
const Logger = require('../../Common/services/Logger');
const Error = require('../../Common/services/Errors');
const url = process.env.LIFE_ASIA_URL;
const isFakeEndpoint = process.env.FAKE_ENDPOINTS;

module.exports.getPolicy = num => {
  const ACTION = '[getPolicy]';
  const uri = `${url}/requestDetailstoLifeAsia`;
  Logger.log('info', `${TAG}${ACTION} - policy number `, { num });
  Logger.log('info', `${TAG}${ACTION} - url`, uri);

  if (isFakeEndpoint) {
    return new Promise((resolve) => {
      const data = require('../../Dummy/policy.json');  
      Logger.log('info', `${TAG}${ACTION} - result`, data);
      
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  } else {
    return new Promise((resolve, reject) => {
      // "policyNo": "72940355",
      const args = {
        status: 'success',
        statusCode: 0,
        isSuccess: true,
        message: 'successful',
        result: {
          policyNo: num,
          action: 'GETPLCY',
        }
      };

      ajax
        .setOptions({
          uri
        })
        .post(args)
        .then(res => {
          if (res.body) {
            resolve(res.body);
          } else {
            reject({
              status: 400,
              error: {
                msg: 'Policy not found.'
              }
            });
          }
          Logger.log('info', `${TAG}${ACTION} - result`, res.body);
        })
        .catch(err => {
          Logger.log('error', TAG + ACTION, err);
          reject(Error.raise('INTERNAL_SERVER_ERROR', err));
        });
    });
  }
};