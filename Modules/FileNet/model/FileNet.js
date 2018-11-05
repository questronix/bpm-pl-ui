const TAG = '[Filenet]';
const ajax = require('../../Common/services/Ajax');
const url = process.env.FILENET_URL;
const Logger = require('../../Common/services/Logger');
const Error = require('../../Common/services/Errors');

module.exports.getDocs = args => {
  const ACTION = '[getDocs]';
  const uri = `${process.env.FILENET_URL}/Filenet/listPolicyDocByAppNumber`;
  Logger.log('info', `${TAG}${ACTION} - args `, { username });
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
              msg: 'No documents found.'
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
