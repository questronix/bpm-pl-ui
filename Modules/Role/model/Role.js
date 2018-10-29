const TAG = '[Role]';
const ajax = require('../../Common/services/Ajax');
const url = process.env.FILENET_URL;
const Logger = require('../../Common/services/Logger');
const Error = require('../../Common/services/Errors');

module.exports.getAll = () => {
  const ACTION = '[getAllRole]';
  const uri = `${process.env.BPM_URL}/roles`;
  Logger.log('info', `${TAG}${ACTION} - url`, uri);

  return new Promise((resolve, reject) => {
    ajax
      .setOptions({
        uri
      })
      .get()
      .then(res => {
        if (res.body) {
          resolve(JSON.parse(res.body));
        } else {
          reject({
            status: 400,
            error: {
              msg: 'No roles found.'
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
};

module.exports.getById = (id) => {
    const ACTION = '[getById]';
    const uri = `${process.env.BPM_URL}/roles/${id}`;
    Logger.log('info', `${TAG}${ACTION} - id`, id);
    Logger.log('info', `${TAG}${ACTION} - url`, uri);
  
    return new Promise((resolve, reject) => {
      ajax
        .setOptions({
          uri
        })
        .get()
        .then(res => {
          if (res.body) {
            resolve(JSON.parse(res.body));
          } else {
            reject({
              status: 400,
              error: {
                msg: 'No roles found.'
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
  };

  module.exports.updateById = (id) => {
    const ACTION = '[updateById]';
    const uri = `${process.env.BPM_URL}/roles/${id}`;
    Logger.log('info', `${TAG}${ACTION} - id`, id);
    Logger.log('info', `${TAG}${ACTION} - url`, uri);
  
    return new Promise((resolve, reject) => {
      ajax
        .setOptions({
          uri
        })
        .get()
        .then(res => {
          if (res.body) {
            resolve(JSON.parse(res.body));
          } else {
            reject({
              status: 400,
              error: {
                msg: 'No roles found.'
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
  };

  module.exports.createNewRole = (args) => {
    const ACTION = '[createNewRole]';
    const uri = `${process.env.BPM_URL}/roles`;
    Logger.log('info', `${TAG}${ACTION} - args`, args);
    Logger.log('info', `${TAG}${ACTION} - url`, uri);
  
    return new Promise((resolve, reject) => {
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
                msg: 'No roles found.'
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
  };

  module.exports.removeRole = (id) => {
    const ACTION = '[removeRole]';
    const uri = `${process.env.BPM_URL}/roles/${id}`;
    Logger.log('info', `${TAG}${ACTION} - id`, id);
    Logger.log('info', `${TAG}${ACTION} - url`, uri);
  
    return new Promise((resolve, reject) => {
      ajax
        .setOptions({
          uri
        })
        .delete()
        .then(res => {
          if (res.body) {
            resolve(JSON.parse(res.body));
          } else {
            reject({
              status: 400,
              error: {
                
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
  };