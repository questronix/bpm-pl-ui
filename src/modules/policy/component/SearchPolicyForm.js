import React, { Component } from 'react';

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
        <div className="flex-wrap flex-container">
          <label className="col xl-1 l-1 m-1 s-12 xs-12 flex f-center"> Policy Number: </label>
          <input className="input xl-4 l-4 m-4 col s-9 xs-9"
            type="text"
            placeholder="Input policy number here"
            value={this.state.policyNumber}
            onChange={this.handleInputChange} />
          <input className="btn prulife col xl-1 l-1 m-1 s-3 xs-3" type="submit" value="Search" />
        </div>
      </form>
    );
  }
}

export default SearchPolicyForm;