import React, {Component} from 'react';

class SearchPolicyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policyNumber: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
 }

 handleSubmit(event) {
   event.preventDefault();
   this.props.onPolicySearchSubmit(this.state.policyNumber);
 }

 handleInputChange(event) {
   const value = event.target.value;

   this.setState({
     policyNumber: value
   })
 }

 render() {
   return (
     <form onSubmit={this.handleSubmit}>
      <label> Policy Number: 
        <input className="input"
          type="text" 
          placeholder="Input policy number here"
          value={this.state.policyNumber} 
          onChange={this.handleInputChange} />
      </label>
      <input className="btn prulife" type="submit" value="Search" />
     </form>
   );
 }
}

export default SearchPolicyForm;