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

  console.log('TYPEEE', typeof isFakeEndpoint);

  if (isFakeEndpoint) {
    console.log('FAKEEEEEE', isFakeEndpoint);
    return new Promise((resolve, reject) => {
      const data = {
        result: {
          policyDetails: {
            policyNo: num + "",
            agentCode: '70000007',
            agentFirstName: 'ROMEO',
            agentMiddleName: 'CAMILLE',
            agentLastName: 'ABION',
            agentBranch: 'China Gold',
            nmaCode: 'EXCLUSIVE',
            planDescription: 'PLPP - PRULINK ASSURANCE ACCOUNT PLUS',
            currency: 'PHP',
            policyStatus: 'IN FORCE',
            premiumStatus: 'PREMIUM PAYING',
            sumAssured: '1,000,000.00',
            riskCommencementDate: '05-OCT-2012',
            firstIssueDate: '05-OCT-2012',
            currentPremium: 'CP',
            mpt: 'MPT',
            dateOfSigning: '05-OCT-2012'
          },

          insuredDetails: {
            salutation: 'MR',
            firstName: 'RAMIREZ',
            lastName: 'DANIVIC JESUS',
            gender: 'MALE',
            occupation1: 'OTHER OCCUPATION',
            hrcTag: 'X',
            vipTag: '',
            strTag: 'X',
            nationality: 'PHILIPPINES',
            dateOfBirth: '19-SEP-1973',
            attainedAge: '45',
            civilStatus: 'SINGLE',
            telephoneNum: '09171234567',
            mobileNum: '09291234567',
            tinNum: '111-111-111',
            email: 'sample@email.com',
            address: {
              street: '12th St.',
              city: 'San Pedro City',
              zipCode: '4023',
              coutry: 'Philippines'
            }
          }
        }
      };
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
