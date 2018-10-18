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
                <div className="col xl-12 l-12 m-12 s-12 xs-12 flex-container flex-wrap flex f-justify-space-between">
                  <div className="">
                    <input className="input-search"
                      type="text"
                      placeholder="Input policy number here"
                      value={this.state.policyNumber}
                      onChange={this.handleInputChange} />
                    <span className="fa fa-search input-icon"></span>
                    <button disabled className="btn bright-blue">
                      Search
                    </button>
                  </div>
                </div>
              </Fragment>) :
              (<Fragment>
                <div className="col xl-12 l-12 m-12 s-12 xs-12 flex-container flex-wrap flex f-justify-space-between">
                  <div className="">
                    <input className="input-search"
                      type="text"
                      placeholder="Input policy number here"
                      value={this.state.policyNumber}
                      onChange={this.handleInputChange} />
                    <span className="fa fa-search input-icon"></span>
                    <button className="btn bright-blue">
                      Search
                    </button>
                  </div>
                </div>
              </Fragment>)}
          </div>
        </div>
      </form>
    );
  }
}

export default SearchPolicyForm;