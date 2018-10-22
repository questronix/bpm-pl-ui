const TAG = '[Task]';
const ajax = require('../Common/services/Ajax');
const express = require('express');
const router = express.Router();
const url = process.env.LIFE_ASIA_URL;
const la = require('./model/LifeAsia');

router.post('/', (req, res) => {
  const ACTION = '[getPolicy]';
  const args = {
    "status": "success",
    "statusCode": 0,
    "isSuccess": true,
    "message": "successful",
    "result": {
      "policyNo": "72940355",
      "action": "GETPLCY",
      "macTriggered": true
    }
  };
  la.getPolicy(args)
  .then(data=>{
    const p = data.result.policyDetails;
    const i = data.result.insuredDetails;
    const policy = {
      number: p.policyNo,
      agentCode: p.agentNumber,
      agentName: `${p.agentFirstName} ${p.agentMiddleName} ${p.agentLastName}`,
      branch: p.agentBranch,
      nma: p.nmaCode,
      planDesc: p.planDescription,
      planCurrency: p.currency,
      contractStatus: p.policyStatus,
      premiumStatus: p.premiumStatus,
      sumAssured: '1,000,000.00',
      rcd: p.riskCommencementDate,
      firstIssueDate: p.firstIssueDate,
      currentPremium: 'CP',
      mpt: 'MPT',
      dateOfSigning: '05-OCT-2012',
      agentStatus: 'active'
    };
    
    const insured = {
      salutation: 'MR',
      firstName: i.firstName,
      lastName: i.lastName,
      gender: i.gender,
      occupation: i.occupation1,
      hrc: i.hrcTag === 'X' ? 'YES' : 'NO',
      vip: i.vipTag === 'X' ? 'YES' : 'NO',
      str: i.strTag === 'X' ? 'YES' : 'NO',
      nationality: i.nationality,
      dateOfBirth: i.dateOfBirth,
      attainedAge: i.attainedAge,
      civilStatus: i.civikStatus,
      telNumber: i.telephoneNum,
      mobileNumber: i.mobileNum,
      tinOrSss: i.tinNum,
      email: i.email, 
      address: {
        street: '12th St.',
        city: 'San Pedro City',
        zipCode: '4023',
        coutry: 'Philippines'
      }
    };
    res.success({
      message: 'success',
      request: req.body,
      data: { policy, insured },
    });
  })
  .catch(error=>{
    res.error(error);
  });
});

// router.post('/', (req, res) => {
//   const policy = {
//     number: '00000001',
//     agentCode: '70000007',
//     agentName: 'ROMEO CAMILLE ABION',
//     branch: 'China Gold',
//     nma: 'EXCLUSIVE',
//     planDesc: 'PLPP - PRULINK ASSURANCE ACCOUNT PLUS',
//     planCurrency: 'PHP',
//     contractStatus: 'IN FORCE',
//     premiumStatus: 'PREMIUM PAYING',
//     sumAssured: '1,000,000.00',
//     rcd: '05-OCT-2012',
//     firstIssueDate: '05-OCT-2012',
//     currentPremium: 'CP',
//     mpt: 'MPT',
//     dateOfSigning: '05-OCT-2012',
//   };
  
//   const insured = {
//     salutation: 'MR',
//     firstName: 'RAMIREZ',
//     lastName: 'DANIVIC JESUS N.',
//     gender: 'MALE',
//     occupation: 'OTHER OCCUPATION',
//     hrc: 'X',
//     vip: '',
//     str: 'X',
//     nationality: 'PHILIPPINES',
//     dateOfBirth: '19-SEP-1973',
//     attainedAge: '45',
//     civilStatus: 'SINGLE',
//     telNumber: '09171234567',
//     mobileNumber: '09291234567',
//     tinOrSss: '111-111-111',
//     email: 'sample@email.com', 
//     address: {
//       street: '12th St.',
//       city: 'San Pedro City',
//       zipCode: '4023',
//       coutry: 'Philippines'
//     }
//   };

//   res.send({
//     message: 'success',
//     request: req.body,
//     data: { policy, insured },
//   });
// });

module.exports = router;
