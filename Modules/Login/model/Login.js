const TAG = '[Login]';
const ajax = require('../../Common/services/Ajax');
const Logger = require('../../Common/services/Logger');

module.exports.authenticate = username => {
  const ACTION = '[authenticate]';
  Logger.log('info', `${TAG}${ACTION} - args `, { username });

  return new Promise((resolve, reject) => {
    ajax
      .setOptions({
        uri: `${process.env.BPM_URL}/login`
      })
      .post({ username: username })
      .then(res => {
        if (res.body) {
          resolve(res.body);
        } else {
          reject({
            status: 404,
            msg: 'User not found'
          });
        }
      })
      .catch(err => {
        reject(Error.raise('INTERNAL_SERVER_ERROR', err));
      });
  });
};
