const TAG = '[Login]';
const ajax = require('../../Common/services/Ajax');
const Logger = require('../../Common/services/Logger');
const isFakeEndpoint = process.env.FAKE_ENDPOINTS;
const url = process.env.LDAP_URL;

module.exports.bpm = username => {
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

module.exports.ldap = (username, password) => {
  const ACTION = '[ldap]';
  Logger.log('info', `${TAG}${ACTION} - args `, { username });
  const fakeLdap = require('../../Dummy/ldap');

  if (isFakeEndpoint) {
    return new Promise((resolve, reject) => {
      const res = fakeLdap.success;
      resolve({ authenticated: res.result.authenticated});
    });
  } else {
    return new Promise((resolve, reject) => {
      ajax
        .setOptions({
          uri: url
        })
        .post({
          result: {
            username,
            password
          }
        })
        .then(res => {
          Logger.log('info', `${TAG}${ACTION} - result from ldap `, res.body);
          if (res.body.result.authenticated) {
            resolve({ authenticated: true });
          } else {
            resolve({ authenticated: false });
          }
        })
        .catch(err => {
          reject(Error.raise('INTERNAL_SERVER_ERROR', err));
        });
    });
  }
};  
