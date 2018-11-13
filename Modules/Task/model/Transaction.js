const TAG = '[Transaction]';
const ajax = require('../../Common/services/Ajax');
const Logger = require('../../Common/services/Logger');
const Error = require('../../Common/services/Errors');
const url = process.env.LIFE_ASIA_CLIENT_URL_3;
const isFakeEndpoint = process.env.FAKE_ENDPOINTS;

module.exports.generateTransactionId = () => {
  const ACTION = '[generateTransactionId]';
  const uri = `${url}/generateTransactionNumber`;
  Logger.log('info', `${TAG}${ACTION} - url`, uri);

  if (isFakeEndpoint) {
    return new Promise((resolve, reject) => {
      Logger.log('info', `${TAG}${ACTION} - result`, require('../../Dummy/transaction.json'));
      resolve(require('../../Dummy/transaction.json'));
    });
  } else {
    return new Promise((resolve, reject) => {
      ajax
        .setOptions({
          uri
        })
        .post()
        .then(res => {
          Logger.log('info', `${TAG}${ACTION} - result`, res.body);
          if (res.body) {
            resolve(res.body);
          } else {
            resolve({
              error: {
                status: 404,
                msg: 'Client details not found.'
              }
            });
          }
        })
        .catch(err => {
          Logger.log('error', TAG + ACTION, err);
          reject(Error.raise('INTERNAL_SERVER_ERROR', err));
        });
    });
  }
};