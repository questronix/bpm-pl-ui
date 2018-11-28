import React, { Fragment } from 'react';
import Input from '../../../../shared/component/input/Input';
import { policyUtils } from '../../../../utils';

const PolicyInfoHeader = ({policy, clients, type}) => {

    let owner = {};
    let insured = {};
    if (clients.length > 0) {
      owner = policyUtils.findOwnerInfo(clients);
      insured = policyUtils.findInsuredInfo(clients);
    }

    return (
      <Fragment>
        {type === 'approver' &&
          <div className="xl-12 flex-container flex-wrap insured-details">
            <Input editable="false" inputLabel="Policy Number:" inputPlaceholder="0000001" txtboxClass="no-border" inputClass="col xl-6 l-6 m-6 s-6 xs-6 input-container" value={policy.policyNo} />
            <Input editable="false" inputLabel="Sum Assured:" inputPlaceholder="100,000" txtboxClass="no-border" inputClass="col xl-6 l-6 m-6 s-6 xs-6 input-container" value={policy.sumInsured} />
            <Input editable="false" inputLabel="Plan Status:" inputPlaceholder="Lapsed" txtboxClass="no-border" inputClass="col xl-6 l-6 m-6 s-6 xs-6 input-container" value={policy.premiumStatus} />
            <Input editable="false" inputLabel="Premium Status:" inputPlaceholder="Premium Paying" txtboxClass="no-border" inputClass="col xl-6 l-6 m-6 s-6 xs-6 input-container" value={policy.premiumStatus} />

            <Input editable="false" inputLabel="Plan Description:" inputPlaceholder="Plan Name" txtboxClass="no-border" inputClass="col xl-6 l-6 m-6 s-6 xs-6 input-container" value={policy.planDescription} />
            <Input editable="false" inputLabel="First Issue Date:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-6 l-6 m-6 s-6 xs-6 input-container" value={policy.firstIssueDate} />
            <Input editable="false" inputLabel="Risk Commencement Date:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-6 l-6 m-6 s-6 xs-6 input-container" value={policy.riskCommencementDate} />

            <Input editable="false" inputLabel="Currency:" inputPlaceholder="PHP" txtboxClass="no-border" inputClass="col xl-6 l-6 m-6 s-6 xs-6 input-container" value={policy.currency} />
            <Input editable="false" inputLabel="Current Premium:" inputPlaceholder="Current Premium" txtboxClass="no-border" inputClass="col xl-6 l-6 m-6 s-6 xs-6 input-container" value={policy.currentPremium} />
            <Input editable="false" inputLabel="Mode of Payment:" inputPlaceholder="Monthly" txtboxClass="no-border" inputClass="col xl-6 l-6 m-6 s-6 xs-6 input-container" value="" />

            <Input editable="false" inputLabel="Insured Name:" inputPlaceholder="LastN, FirstN, MName" txtboxClass="no-border" inputClass="col xl-6 l-6 m-6 s-6 xs-6 input-container" value={`${insured.clientLastName}, ${insured.clientFirstName} ${insured.clientMiddleName}`} />
            <Input editable="false" inputLabel="Birthdate:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-6 l-6 m-6 s-6 xs-6 input-container" value={insured.dateOfBirth} />
            <Input editable="false" inputLabel="Owner Name:" inputPlaceholder="LastN, FirstN, MName" txtboxClass="no-border" inputClass="col xl-6 l-6 m-6 s-6 xs-6 input-container" value={`${owner.clientLastName}, ${owner.clientFirstName} ${owner.clientMiddleName}`} />
            <Input editable="false" inputLabel="Birthdate:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-6 l-6 m-6 s-6 xs-6 input-container" value={owner.dateOfBirth} />
          </div>
        }

        {type === 'default' &&
         <div className="xl-12 flex-container flex-wrap insured-details">
         <Input editable="false" inputLabel="Policy Number:" inputPlaceholder="0000001" txtboxClass="no-border" inputClass="col xl-3 input-container" value={policy.policyNo} />
         <Input editable="false" inputLabel="Sum Assured:" inputPlaceholder="100,000" txtboxClass="no-border" inputClass="col xl-3 input-container" value={policy.sumInsured} />
         <Input editable="false" inputLabel="Plan Status:" inputPlaceholder="Lapsed" txtboxClass="no-border" inputClass="col xl-3 input-container" value={policy.premiumStatus} />
         <Input editable="false" inputLabel="Premium Status:" inputPlaceholder="Premium Paying" txtboxClass="no-border" inputClass="col xl-3 input-container" value={policy.premiumStatus} />

         <Input editable="false" inputLabel="Plan Description:" inputPlaceholder="Plan Name" txtboxClass="no-border" inputClass="col xl-4 input-container" value={policy.planDescription} />
         <Input editable="false" inputLabel="First Issue Date:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-4 input-container" value={policy.firstIssueDate} />
         <Input editable="false" inputLabel="Risk Commencement Date:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-4 input-container" value={policy.riskCommencementDate} />

         <Input editable="false" inputLabel="Currency:" inputPlaceholder="PHP" txtboxClass="no-border" inputClass="col xl-4 input-container" value={policy.currency} />
         <Input editable="false" inputLabel="Current Premium:" inputPlaceholder="Current Premium" txtboxClass="no-border" inputClass="col xl-4 input-container" value={policy.currentPremium} />
         <Input editable="false" inputLabel="Mode of Payment:" inputPlaceholder="Monthly" txtboxClass="no-border" inputClass="col xl-4 input-container" value="" />

         <Input editable="false" inputLabel="Insured Name:" inputPlaceholder="LastN, FirstN, MName" txtboxClass="no-border" inputClass="col xl-10 input-container" value={`${insured.clientLastName}, ${insured.clientFirstName} ${insured.clientMiddleName}`} />
         <Input editable="false" inputLabel="Birthdate:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-2 input-container" value={insured.dateOfBirth} />
         <Input editable="false" inputLabel="Owner Name:" inputPlaceholder="LastN, FirstN, MName" txtboxClass="no-border" inputClass="col xl-10 input-container" value={`${owner.clientLastName}, ${owner.clientFirstName} ${owner.clientMiddleName}`} />
         <Input editable="false" inputLabel="Birthdate:" inputPlaceholder="mm/dd/yyyy" txtboxClass="no-border" inputClass="col xl-2 input-container" value={owner.dateOfBirth} />
       </div>
      }
    </Fragment>
    );
}

PolicyInfoHeader.defaultProps = {
  type: 'default'
}

export default PolicyInfoHeader;