const TAG = '[LifeAsia]';
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
    return new Promise((resolve, reject) => {
      const data = require('../../Dummy/policy.json');  
      Logger.log('info', `${TAG}${ACTION} - result`, data);
      resolve(data);
    });
  } else {
    console.log('ELSEEEEEEEEEEEEEE', isFakeEndpoint);
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

module.exports.getClientDetails = clientNum => {
  const ACTION = '[getClientDetails]';
  const uri = `${url}/requestDetailstoLifeAsia`;
  Logger.log('info', `${TAG}${ACTION} - policy number `, { clientNum });
  Logger.log('info', `${TAG}${ACTION} - url`, uri);

  if (isFakeEndpoint) {
    return new Promise((resolve, reject) => {
      const data = {
        status: 'success',
        statusCode: 0,
        message: 'getting data from Life Asia is successful',
        isSuccess: true,
        result: {
          policyNo: '',
          template: 'BPM',
          id: 'GETCLNT',
          data: {
            guid: 'e097e084-5451-43d4-bad2-ada752c704ad',
            action: 'GETCLNT',
            user: 'DUMMY1',
            status: '1',
            clientId: '',
            lastName: '',
            firstName: '',
            middleName: '',
            gender: '',
            occupation1: '',
            occupation2: '',
            vipTag: '',
            hrcTag: '',
            strTag: '',
            nationality: '',
            dateOfBirth: '',
            attainedAge: '',
            civilStatus: '',
            telephoneNum: '',
            mobileNum: '',
            tinNum: '',
            sssNum: '',
            emailAdd: '',
            address: [
              {
                addressType: '',
                countryCode: '',
                address1: '',
                address2: '',
                address3: '',
                address4: '',
                address5: '',
                zipCode: ''
              },
              {
                addressType: '',
                countryCode: '',
                address1: '',
                address2: '',
                address3: '',
                address4: '',
                address5: '',
                zipCode: ''
              },
              {
                addressType: '',
                countryCode: '',
                address1: '',
                address2: '',
                address3: '',
                address4: '',
                address5: '',
                zipCode: ''
              }
            ]
          }
        }
      };
      Logger.log('info', `${TAG}${ACTION} - result`, data);
      resolve(data);
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
            reject({
              status: 400,
              error: {
                msg: 'Client details not found.'
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
