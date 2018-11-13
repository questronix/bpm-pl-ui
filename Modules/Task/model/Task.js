const TAG = '[Task]';
const ajax = require('../../Common/services/Ajax');
const Logger = require('../../Common/services/Logger');
const Error = require('../../Common/services/Errors');
const url = process.env.BPM_URL;


module.exports.new = (username, transactionNo) => {
  const ACTION = '[getDetails]';
  const uri = `${url}/process/start`;
  Logger.log('info', `${TAG}${ACTION} - args `, { username, transactionNo });
  Logger.log('info', `${TAG}${ACTION} - url`, uri);

  return new Promise((resolve, reject) => {
    ajax
      .setOptions({
        uri
      })
      .post({ username, transactionNo })
      .then(res => {
        Logger.log('info', `${TAG}${ACTION} - result`, res.body);
        const body = res.body;
        if (!body.error) {
          resolve(body);
        }
        else {
          reject({
            status: 200,
            error: body
          });
        }
      })
      .catch(err => {
        Logger.log('error', TAG + ACTION, err);
        reject(Error.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};

module.exports.getAll = uid => {
  const ACTION = '[getAll]';
  const uri = `${url}/tasks?uid=${uid}`;
  Logger.log('info', `${TAG}${ACTION} - args `, { uid });
  Logger.log('info', `${TAG}${ACTION} - url`, uri);

  return new Promise((resolve, reject) => {
    ajax
      .setOptions({
        uri
      })
      .get()
      .then(res => {
        Logger.log('info', `${TAG}${ACTION} - result`, res.body);
        const body = JSON.parse(res.body);
        if (!body.error) {
          resolve(body);
        }
        else {
          reject({
            status: 200,
            error: body
          });
        }
      })
      .catch(err => {
        Logger.log('error', TAG + ACTION, err);
        reject(Error.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};

module.exports.getDetails = (taskId, uid) => {
  const ACTION = '[getDetails]';
  const uri = `${url}/tasks/${taskId}?uid=${uid}`;
  Logger.log('info', `${TAG}${ACTION} - args `, { taskId, uid });
  Logger.log('info', `${TAG}${ACTION} - url`, uri);

  return new Promise((resolve, reject) => {
    ajax
      .setOptions({
        uri
      })
      .get()
      .then(res => {
        Logger.log('info', `${TAG}${ACTION} - result`, res.body);
        const body = JSON.parse(res.body);
        if (!body.error) {
          resolve(body);
        }
        else {
          reject({
            status: 200,
            error: body
          });
        }
      })
      .catch(err => {
        Logger.log('error', TAG + ACTION, err);
        reject(Error.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};

module.exports.submit = (formData, taskId, uid) => {
  const ACTION = '[submit]';
  const uri = `${url}/tasks/${taskId}?uid=${uid}`;
  Logger.log('info', `${TAG}${ACTION} - args `, {formData, taskId, uid});
  Logger.log('info', `${TAG}${ACTION} - url`, uri);

  return new Promise((resolve, reject) => {
    ajax
      .setOptions({
        uri
      })
      .post(formData)
      .then(res => {
        Logger.log('info', `${TAG}${ACTION} - result`, res.body);
        const body = res.body;
        if (!body.error) {
          resolve(body);
        }
        else {
          reject({
            status: 200,
            error: body
          });
        }
      })
      .catch(err => {
        Logger.log('error', TAG + ACTION, err);
        reject(Error.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};

module.exports.claim = (formData, taskId, uid) => {
  const ACTION = '[claim]';
  const uri = `${url}/tasks/${taskId}/claim?uid=${uid}`;
  Logger.log('info', `${TAG}${ACTION} - args `, {formData, taskId, uid});
  Logger.log('info', `${TAG}${ACTION} - url`, uri);

  return new Promise((resolve, reject) => {
    ajax
      .setOptions({
        uri
      })
      .post(formData)
      .then(res => {
        Logger.log('info', `${TAG}${ACTION} - result`, res.body);
        const body = res.body;
        if (!body.error) {
          resolve(data);
        }
        else {
          reject({
            status: 200,
            error: body
          });
        }
      })
      .catch(err => {
        Logger.log('error', TAG + ACTION, err);
        reject(Error.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};