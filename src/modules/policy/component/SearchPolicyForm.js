import React, {Component} from 'react';

class SearchPolicyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policyNo: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
 }

 handleSubmit(event) {
   event.preventDefault();
   console.log(this.state);
 }

 handleInputChange(event) {
   const value = event.target.value;

   this.setState({
     policyNo: value
   })
 }

 render() {
   return (
     <form onSubmit={this.handleSubmit}>
      <label> Policy No: 
        <input className="input"
          type="text" 
          value={this.state.policyNo} 
          onChange={this.handleInputChange} />
      </label>
      <input className="btn primary" type="submit" value="Search" />
     </form>
   );
 }
}

export default SearchPolicyForm;