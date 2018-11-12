const TAG = '[Document]';
const ajax = require('../../Common/services/Ajax');
const Logger = require('../../Common/services/Logger');
const Error = require('../../Common/services/Errors');
const url = process.env.LIFE_ASIA_CLIENT_URL_2;
const isFakeEndpoint = process.env.FAKE_ENDPOINTS;

module.exports.getDocList = (transactionId, subTransactionId) => {
  const ACTION = '[getDocList]';
  const uri = `${url}/getListDocs`;
  Logger.log('info', `${TAG}${ACTION} - args `, { transactionId, subTransactionId });
  Logger.log('info', `${TAG}${ACTION} - url`, uri);

  if (isFakeEndpoint) {
    return new Promise((resolve, reject) => {
      resolve({
        status: 200,
        msg: require('../../Dummy/docs.json')
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      const args = {
        transactionID: transactionId,
        subTransactionID: subTransactionId
      };

      ajax
        .setOptions({
          uri
        })
        .post(args)
        .then(res => {
          Logger.log('info', `${TAG}${ACTION} - res `, { res });
          if (res.body) {
            resolve(res.body);
          } else {
            reject({
              status: 400,
              error: {
                msg: 'No documents found'
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


module.exports.create = (args) => {
  const ACTION = '[create]';
  const uri = `${url}/insertTransactionDocs`;
  Logger.log('info', `${TAG}${ACTION} - args `, { args });
  Logger.log('info', `${TAG}${ACTION} - url`, uri);

  if (isFakeEndpoint) {
    return new Promise((resolve, reject) => {
      resolve({
        status: 200,
        msg: require('../../Dummy/docsCreate.json')
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      ajax
        .setOptions({
          uri
        })
        .post(args)
        .then(res => {
          Logger.log('info', `${TAG}${ACTION} - res `, { res });
          if (res.body) {
            resolve(res.body);
          } else {
            reject({
              status: 400,
              error: {
                msg: 'Failed to create document'
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