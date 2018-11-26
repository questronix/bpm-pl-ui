const TAG = '[Question]';
const ajax = require('../../Common/services/Ajax');
const Logger = require('../../Common/services/Logger');
const Error = require('../../Common/services/Errors');
const url2 = process.env.LIFE_ASIA_CLIENT_URL_2;
const isFakeEndpoint = process.env.FAKE_ENDPOINTS;

module.exports.getAllQuestions = (args) => {
    const ACTION = '[getAllQuestions]';
    const uri = `${url2}/getQuestions`;
    Logger.log('info', `${TAG}${ACTION} - url`, uri);
    Logger.log('info', `${TAG}${ACTION} - args`, args);
  
    if (isFakeEndpoint) {
      return new Promise((resolve, reject) => {
        resolve(require('../../Dummy/client.json'));
      });
    } else {
      return new Promise((resolve, reject) => {
        
        ajax
          .setOptions({
            uri
          })
          .post(args)
          .then(res => {
            Logger.log('info', `${TAG}${ACTION} - result`, res.body);
            if (res.body) {
              resolve(res.body);
            } else {
              resolve({
                error: {
                  status: 404,
                  msg: 'Failed to get questions.'
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

  module.exports.saveAllAnswers = (args) => {
    const ACTION = '[saveAllAnswers]';
    const uri = `${url2}/insertAnswers`;
    Logger.log('info', `${TAG}${ACTION} - url`, uri);
    Logger.log('info', `${TAG}${ACTION} - args`, args);
  
    if (isFakeEndpoint) {
      return new Promise((resolve, reject) => {
        resolve(require('../../Dummy/client.json'));
      });
    } else {
      return new Promise((resolve, reject) => {
        
        ajax
          .setOptions({
            uri
          })
          .post(args)
          .then(res => {
            Logger.log('info', `${TAG}${ACTION} - result`, res.body);
            if (res.body) {
              resolve(res.body);
            } else {
              resolve({
                error: {
                  status: 404,
                  msg: 'Failed to get questions.'
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