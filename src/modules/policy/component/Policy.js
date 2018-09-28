import React, {Component} from 'react'
import SearchPolicyForm from './SearchPolicyForm';
import PolicyInformation from './PolicyInformation';
import Fatca from './Fatca';
import Transaction from './Transaction';

class Policy extends Component {
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

    const transaction = {
      number: '2018-000001',
      isNew: true,
      type: [
        {
          id: 1,
          label: 'Reinstatement',
        }, 
        {
          id: 2,
          label: 'Option 2'
        }
      ],
      actions: [
        {
          id: 1,
          value: true,
          label: 'Updating'
        },
        {
          id: 2,
          value: false,
          label: 'Redating'
        },
        {
          id: 3,
          value: false,
          label: 'Waiver'
        },
      ],
      checkList: [
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
      ],
    };
      // const policy = {
      //   number: '00000001',
      //   status: 'sample status',
      //   insuredClientID: '123',
      //   insuredName: 'Juan Dela Cruz',
      //   ownerClientID: '123',
      //   ownerName: 'Miguel',
      //   rcd: '11/11/11',
      //   agentCode: '123',
      //   agentName: 'Joshua',
      //   agentNMA: 'nma',
      //   nationality: 'F',
      //   occupation: 'Worker',
      //   attainedAge: '22',
      //   mobileNumber: '09291234567',
      //   email: 'email@domain.com',
      //   dateOfApplication: '11/11/11',
      //   salutation: '',
      //   gender: 'M',
      //   civilStatus: 'Single',
      //   tinOrSSSNumber: '123',
      //   clientTagging: 'HRC',
      //   presentAddress: {
      //     addr1: 'addr 1',
      //     addr2: 'addr 2',
      //     addr3: 'addr 3',
      //   },
      //   permanentAddress: {
      //     addr1: 'addr 1',
      //     addr2: 'addr 2',
      //     addr3: 'addr 3',
      //   },
      //   businessAddress: {
      //     addr1: 'addr 1',
      //     addr2: 'addr 2',
      //     addr3: 'addr 3',
      //   },
      // }

      return (
        <div>
          <SearchPolicyForm />
          <PolicyInformation policy={policy} />
          <Transaction transaction={transaction}/>
          <Fatca />
          <input type="button" value="Save" />
        </div>
      );
   }
}

export default Policy;