import React, { Component } from 'react';
import CheckBox from '../../../../shared/component/checkbox/CheckBox';
import Input from '../../../../shared/component/input/Input';
import OwnerinformationNew from './OwnerinformationNew';

class PolicyInformationNew extends Component {
  render() {
    //const { clients } = this.props;
    const clients = this.props.policy.clients;
    let insured;
    let owner;
    // const owner = [...clients].find(client => client.role === 'OW');
    // const insured = [...clients].find(client => client.role === 'LF');
    
    // if (clients) {
    //   owner = clients.forEach(client => {
    //     return client.role === 'OW';
    //   });
    //   insured = clients.forEach(client => {
    //     return client.role === 'LF';
    //   });
    // }


    if (clients) {
      clients.forEach(client => {
        if (client.role === 'OW') {
          owner = client; 
          return;
        }
      });
      
      if(this.props.policy.payorWaiver === "Y" ||
          this.props.policy.payorTerm === "Y") {
             clients.forEach(client => {
              if (client.role === 'LF') {
                  
                  if(client.clntNum != owner.clntNum && client.length == 3){
                    insured = client; 
                    return;
                  }
                  else {
                    insured = owner; 
                    return;
                  }
                
              }
            });
      }
      else {
        clients.forEach(client => {
          if (client.role === 'LF') {
            insured = client; 
            return;
          }
        });
      }
      
    }
    return (
      <div className="xl-12 flex-container flex-wrap">


        <Input inputLabel="Plan Description:" inputPlaceholder="Plan Name" txtboxClass="no-border" inputClass="col xl-6 input-container" value={this.props.policy.planDescription}/>
        <Input inputLabel="Plan Status:" inputPlaceholder="Lapsed" txtboxClass="no-border" inputClass="col xl-3 input-container" value={this.props.policy.policyStatusDesc}/>
        <Input inputLabel="Premium Status:" inputPlaceholder="Premium Paying" txtboxClass="no-border" inputClass="col xl-3 input-container" value={this.props.policy.premiumStatusDesc}/>
        <Input inputLabel="First Issue Date:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.firstIssueDate}/>
        <Input inputLabel="Risk Commencement Date:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.riskCommencementDate} />
        <Input inputLabel="Sum Assured:" inputPlaceholder="100,000" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.sumInsured}/>
        <Input inputLabel="Currency:" inputPlaceholder="PHP" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.currency}/>
        <Input inputLabel="Current Premium:" inputPlaceholder="Current Premium" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.currentPremium} />
        <Input inputLabel="Mode of Payment:" inputPlaceholder="Monthly" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.billFrequencyDesc} />
        <Input inputLabel="Insured Name:" inputPlaceholder="LastN, FirstN, MName" txtboxClass="no-border" inputClass="col xl-8 input-container" value={insured.clientLastName + "," + insured.clientFirstName + " " + insured.clientMiddleName}/>
        <Input inputLabel="Birthdate:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-4 input-container" value={insured.dateOfBirth}/>
        <Input inputLabel="Owner Name:" inputPlaceholder="LastN, FirstN, MName" txtboxClass="no-border" inputClass="col xl-8 input-container" value={owner.clientLastName + "," + owner.clientFirstName + " " + owner.clientMiddleName} />
        <Input inputLabel="Birthdate:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-4 input-container" value={owner.dateOfBirth}/>
      
        {/* <Input inputLabel="Plan Description:" inputPlaceholder="Plan Name" txtboxClass="no-border" inputClass="col xl-6 input-container" value={this.props.policy.planDescription}/>
        <Input inputLabel="Plan Status:" inputPlaceholder="Lapsed" txtboxClass="no-border" inputClass="col xl-3 input-container" value={this.props.policy.policyStatusDesc}/>
        <Input inputLabel="Premium Status:" inputPlaceholder="Premium Paying" txtboxClass="no-border" inputClass="col xl-3 input-container" value={this.props.policy.premiumStatusDesc}/>
        <Input inputLabel="First Issue Date:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.firstIssueDate}/>
        <Input inputLabel="Risk Commencement Date:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.riskCommencementDate} />
        <Input inputLabel="Sum Assured:" inputPlaceholder="100,000" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.sumInsured}/>
        <Input inputLabel="Currency:" inputPlaceholder="PHP" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.currency}/>
        <Input inputLabel="Current Premium:" inputPlaceholder="Current Premium" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.currentPremium} />
        <Input inputLabel="Mode of Payment:" inputPlaceholder="Monthly" txtboxClass="no-border" inputClass="col xl-4 input-container" value={this.props.policy.billFrequencyDesc} />
        <Input inputLabel="Insured Name:" inputPlaceholder="LastN, FirstN, MName" txtboxClass="no-border" inputClass="col xl-8 input-container" value={insured.clientLastName + "," + insured.clientFirstName + " " + insured.clientMiddleName}/>
        <Input inputLabel="Birthdate:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-4 input-container" value={insured.dateOfBirth}/>
        <Input inputLabel="Owner Name:" inputPlaceholder="LastN, FirstN, MName" txtboxClass="no-border" inputClass="col xl-8 input-container" value={owner.clientLastName + "," + owner.clientFirstName + " " + owner.clientMiddleName} />
        <Input inputLabel="Birthdate:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-4 input-container" value={owner.dateOfBirth}/> */}
      </div>

    );
  }
}

export default PolicyInformationNew;