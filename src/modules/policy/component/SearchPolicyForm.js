import React, { Component } from 'react';

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
        <div className="flex-wrap flex-container">
          <label className="col xl-1 l-1 m-1 s-12 xs-12 flex f-center"> Policy Number: </label>
          <input className="input xl-3 l-3 m-3 col s-9 xs-9"
            type="text"
            placeholder="Input policy number here"
            value={this.state.policyNo}
            onChange={this.handleInputChange} />
          <input className="btn bright-blue col xl-2 l-2 m-2 s-3 xs-3" type="submit" value="Search" />
        </div>
      </form>
    );
  }
}

export default SearchPolicyForm;