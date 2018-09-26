import React, {Component} from 'react'
import SearchPolicyForm from './SearchPolicyForm';
import PolicyInformation from './PolicyInformation';
import Fatca from './Fatca';

class Policy extends Component {
   render() {
      const policy = {
        number: '00000001',
        status: 'sample status',
        insuredClientID: '123',
        insuredName: 'Juan Dela Cruz',
        ownerClientID: '123',
        ownerName: 'Miguel',
        rcd: '11/11/11',
        agentCode: '123',
        agentName: 'Joshua',
        agentNMA: 'nma',
        nationality: 'F',
        occupation: 'Worker',
        attainedAge: '22',
        mobileNumber: '09291234567',
        email: 'email@domain.com',
        dateOfApplication: '11/11/11',
        presentAddress: {
          addr1: 'addr 1',
          addr2: 'addr 2',
          addr3: 'addr 3',
        },
        permanentAddress: {
          addr1: 'addr 1',
          addr2: 'addr 2',
          addr3: 'addr 3',
        },
        businessAddress: {
          addr1: 'addr 1',
          addr2: 'addr 2',
          addr3: 'addr 3',
        },
      }

      return (
        <div>
          <SearchPolicyForm />
          <hr/>
          <PolicyInformation policy={policy} />
          <hr />
          <Fatca />
        </div>
      );
   }
}

export default Policy;