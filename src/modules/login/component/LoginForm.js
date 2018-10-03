import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    // implement authentication here
    window.location.href = "/";
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="fullscreen-center test flex f-center">
          <div className="flex f-column flex-container flex-wrap f-center box col xl-3 l-3 m-3 s-3 xs-3 f-justify-between">
            <div className="f-start">
              <h4 className="font-danger f-start">
                Pru Life Login
            </h4>
            </div>
            <div className="f-row f-center f-justify-around flex-container flex-wrap col xl-12">
              <label className="col xl-3 l-3 m-3 s-3 xs-3">Username:</label>
              <input className="input col xl-9 l-9 m-9 s-9 xs-9"
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleInputChange} />
            </div>
            <div className="f-row f-center f-justify-around flex-container flex-wrap col xl-12">
              <label className="col xl-3 l-3 m-3 s-3 xs-3">Password:</label>
              <input className="input col xl-9 l-9 m-9 s-9 xs-9"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange} />
            </div>
            <button className="btn col xl-12 prulife"
            type="submit" 
            value="Login" >
            Login
            </button>
            {/* <input className="btn col xl-12 primary" type="submit" value="Login" ></input> */}
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;