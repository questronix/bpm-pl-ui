const TAG = '[Client]';
const ajax = require('../../Common/services/Ajax');
const Logger = require('../../Common/services/Logger');
const Error = require('../../Common/services/Errors');
const url = process.env.LIFE_ASIA_CLIENT_URL;
const isFakeEndpoint = process.env.FAKE_ENDPOINTS;

module.exports.updateClientDetails = args => {
  const ACTION = '[updateClientDetails]';
  const uri = `${url}/requestDetailstoLifeAsia`;
  Logger.log('info', `${TAG}${ACTION} - args `, { args });
  Logger.log('info', `${TAG}${ACTION} - url`, `${uri}/insertCIUChangeRequestDetails`);

  if (isFakeEndpoint) {
    return new Promise((resolve, reject) => {
      resolve({
        status: 200,
        msg: require('../../Dummy/clientUpdate.json')
      });
      // reject(Error.raise('INTERNAL_SERVER_ERROR', "Error details here"));
    });
  } else {
    return new Promise((resolve, reject) => {
      const args = {
        status: 'success',
        statusCode: 0,
        isSuccess: true,
        message: 'successful',
        result: {
          policyNo: num,
          action: 'GETCLNTB',
          macTriggered: true
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
            resolve({
              error: {
                msg: 'Failed to update client details'
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
