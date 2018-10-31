const TAG = '[Task]';
const express = require('express');
const router = express.Router();
const Logger = require('../Common/services/Logger');
const url = process.env.LIFE_ASIA_URL;
const la = require('./model/LifeAsia');
const mw = require('../Common/middleware/Authentication');

// router.post('/', mw.isAuthenticated, (req, res) => {
router.post('/', (req, res) => {
  const ACTION = '[getPolicy]';
  Logger.log('debug', `${TAG}${ACTION} - request body`, req.body);

  la.getPolicy(req.body.policyNo)
    .then(data => {
      const p = data.result.policyDetails;
      const i = data.result.insuredDetails;

      // Formatting results
      const policy = {
        number: p.policyNo,
        agentCode: p.agentNumber,
        agentName: `${p.agentFirstName} ${p.agentMiddleName} ${
          p.agentLastName
        }`,
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
        civilStatus: i.civilStatus,
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
      res.send({
        data: { policy, insured }
      });
    })
    .catch(error => {
      res.error(error);
    });
});

module.exports = router;
