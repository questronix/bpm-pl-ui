import React, { Component } from 'react'
import SearchPolicyForm from './SearchPolicyForm';
import PolicyInformation from './PolicyInformation';
import Fatca from './Fatca';
import Transaction from './Transaction';
import { PolicyService }  from '../../../services/request';
import axios from 'axios';

class Policy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policyNumberSearch: '',
      policy: {},
      insured: {},
      selectedTransaction: '',
      transactionCheckList: [],
    }
    this.handleTransactionChange = this.handleTransactionChange.bind(this);
    this.handlePolicySearchSubmit = this.handlePolicySearchSubmit.bind(this);
  }

  componentDidMount() {
    // Init default values to Transaction on page load.
    // TODO: REST call here
    this.setState({
      selectedTransaction: '1',
      transactionCheckList: [
        {
          id: 1,
          value: false,
          label: 'Health Statement Form (HSF)',
        },
        {
          id: 2,
          value: false,
          label: 'U/W routine requirements',
        },
        {
          id: 3,
          value: false,
          label: 'Payment of Premium Arrears',
        },
        {
          id: 4,
          value: false,
          label: 'Specimen Signature Form (if applicable)',
        },
        {
          id: 5,
          value: false,
          label: 'Valid Government Issued ID (if applicable)',
        },
        {
          id: 6,
          value: false,
          label: 'Valid Non-Government Issued ID (if applicable)',
        },
      ]
    });
  }

  handlePolicySearchSubmit(policyNumber) {
    this.setState({ policyNumberSearch: policyNumber });
    PolicyService.getPolicyInformationByID({ policyNumber }).then((result) => {
      this.setState({ 
        policy: result.data.data.policy ,
        insured: result.data.data.insured,
      });
      console.log('Result: ', result);
    }).catch((err) => {
      console.log('Error: ', err);
    });
    // TODO: REST calling here
    // if (policyNumber === '00000001') {
    //   this.setState({
    //     policy: {
    //       number: '00000001',
    //       agentCode: 'ROMEO CAMILLE ABION',
    //       agentName: 'JADEITE',
    //       branch: 'RAMIREZ, DANIVIC JESUS N.',
    //       nma: 'RAMIREZ, DANIVIC JESUS N.',
    //       planDesc: 'PLPP - PRULINK ASSURANCE ACCOUNT PLUS',
    //       planCurrency: 'PHP',
    //       contractStatus: 'IN FORCE',
    //       premiumStatus: 'PREMIUM PAYING',
    //       sumAssured: '1,000,000.00',
    //       rcd: '05-OCT-2012',
    //       firstIssueDate: '05-OCT-2012',
    //     },
    //     insured: {
    //       salutation: 'MR',
    //       firstName: 'RAMIREZ',
    //       lastName: 'DANIVIC JESUS N.',
    //       gender: 'MALE',
    //       occupation: 'OTHER OCCUPATION',
    //       hrc: 'No value',
    //       vip: 'No value',
    //       str: 'No value',
    //       nationality: 'PHILIPPINES',
    //       dateOfBirth: '19-SEP-1973',
    //       attainedAge: 'SINGLE',
    //       civilStatus: 'SINGLE',
    //       telNumber: '09171234567',
    //       mobileNumber: '09291234567',
    //       tinOrSss: 'No value',
    //       email: 'sample@email.com', 
    //     }
    //   })
    // }
  }

  handleTransactionChange(transactionType) {
    this.setState({ selectedTransaction: transactionType });
    let t_list;

    if (transactionType === '1') {
      t_list = [
        {
          id: 1,
          value: false,
          label: 'Health Statement Form (HSF)',
        },
        {
          id: 2,
          value: false,
          label: 'U/W routine requirements',
        },
        {
          id: 3,
          value: false,
          label: 'Payment of Premium Arrears',
        },
        {
          id: 4,
          value: false,
          label: 'Specimen Signature Form (if applicable)',
        },
        {
          id: 5,
          value: false,
          label: 'Valid Government Issued ID (if applicable)',
        },
        {
          id: 6,
          value: false,
          label: 'Valid Non-Government Issued ID (if applicable)',
        }
      ];
    }
    else if (transactionType === '2') {
      t_list = [
        {
          id: 1,
          value: false,
          label: 'Health Statement Form (HSF)',
        },
        {
          id: 2,
          value: false,
          label: 'Health Statement Form (HSF)',
        },
        {
          id: 3,
          value: false,
          label: 'Specimen Signature Form (if applicable)',
        },
        {
          id: 4,
          value: false,
          label: 'Valid Government Issued ID (if applicable)',
        },
        {
          id: 5,
          value: false,
          label: 'Valid Non-Government Issued ID (if applicable)',
        },
      ];
    }
    else if (transactionType === '3') {
      t_list = [
        {
          id: 1,
          value: false,
          label: 'Discretionary Waiver Form',
        },
        {
          id: 2,
          value: false,
          label: 'Payment of reinstatement cost',
        },
      ];
    }

    this.setState({ transactionCheckList: t_list });
  }

  render() {
    return (
      <div className="flex-container flex-wrap">
        <div className="col xl-2 l-2 m-2 s-hide xs-hide">
        sad
        </div>
        <div className="col xl-10 l-10 m-10 s-11 xs-11 margin-top-90">
          <h1 className="font-prulife">Policy Information</h1>
          <SearchPolicyForm onPolicySearchSubmit={this.handlePolicySearchSubmit}/>
          <PolicyInformation policy={this.state.policy} />
          <Transaction
            transactionCheckList={this.state.transactionCheckList}
            onTransactionChange={this.handleTransactionChange} />
          <Fatca insured={this.state.insured} />
          <div className="col xl-12 l-12 m-2 s-12 xs-12  flex xl-f-end l-f-end m-f-end s-f-center xs-f-center">
            <input className="btn prulife col xl-1 l-1 m-12 s-12 xs-12" type="button" value="Save" />
          </div>
        </div>
      </div>
    );
  }
}

export default Policy;