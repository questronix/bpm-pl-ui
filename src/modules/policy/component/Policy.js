import React, {Component} from 'react'
import SearchPolicyForm from './SearchPolicyForm';
import PolicyInformation from './PolicyInformation';
import Fatca from './Fatca';
import Transaction from './Transaction';

class Policy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTransaction: '' ,
      transactionCheckList: [],
    }
    this.handleTransactionChange = this.handleTransactionChange.bind(this);
  }

  componentDidMount() {
    // Init default values to Transaction on page load.
    this.setState ({
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

    this.setState({ transactionCheckList: t_list});
  }

  render() {
    const policy = {
      number: '04010295',
      agentCode: 'ROMEO CAMILLE ABION',
      agentName: 'JADEITE',
      branch: 'RAMIREZ, DANIVIC JESUS N.',
      nma: 'RAMIREZ, DANIVIC JESUS N.',
      planDesc: 'PLPP - PRULINK ASSURANCE ACCOUNT PLUS',
      planCurrency: 'PHP',
      contractStatus: 'IN FORCE',
      premiumStatus: 'PREMIUM PAYING',
      sumAssured: '1,000,000.00',
      rcd: '05-OCT-2012',
      firstIssueDate: '05-OCT-2012',
    };

    return (
      <div>
        <SearchPolicyForm />
        <PolicyInformation policy={policy} />
        <Transaction 
          transactionCheckList={this.state.transactionCheckList} 
          onTransactionChange={this.handleTransactionChange} />
        <Fatca />
        <div className="col xl-12  flex f-end">
        <input className="btn prulife col xl-1" type="button" value="Save" />
        </div>
      </div>
    );

   }
}

export default Policy;