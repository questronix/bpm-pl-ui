import React, { Component, Fragment } from 'react';

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
          <div className="col xl-12 l-12 m-12 s-12 xs-12 flex-container flex-wrap">
            <label className="col xl-1 l-1 m-1 s-12 xs-12 flex f-center"><span className="fa fa-warning"></span> Policy Number: </label>
            {this.props.isSearching ?
              (<Fragment>
                <div className="flex-container col xl-12">
                  <input className="input disabled xl-4 l-4 m-4 col s-8 xs-8"
                    type="text"
                    placeholder="Input policy number here"
                    value={this.state.policyNumber}
                    onChange={this.handleInputChange} disabled />
                  <button className="btn font-prugray disabled prugray col xl-1 l-1 m-2 s-4 xs-4" disabled type="submit">
                    Searching
                  </button>
                </div>
              </Fragment>) :
              (<Fragment>
                <div className="flex-container col xl-11 l-11 m-11 l-11 xs-11">
                  <input className="input xl-4 l-4 m-4 col s-8 xs-8"
                    type="text"
                    placeholder="Input policy number here"
                    value={this.state.policyNumber}
                    onChange={this.handleInputChange} />
                  <button className="btn prulife col xl-1 l-1 m-2 s-4 xs-4" type="submit" >
                    Search
              {/* <span className="fa fa-search font-white"></span> */}
                  </button>
                </div>
              </Fragment>)}
          </div>
        </div>
      </form>
    );
  }
}

export default SearchPolicyForm;