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
        <div className="login">
          {/* <img src="https://i.imgur.com/DkX0ZtJ.jpg"></img> */}
          <div className="login-form col xl-3 l-3 m-4 s-12 xs-12 flex f-center f-column">
            <div>
              <div className="login-header">
                <h3 className="font-prulife text-center">
                  Prulife login
              </h3>
              </div>
              <div className="login-body">
                <div className="f-row f-center flex-container flex-wrap col xl-12 flex">
                  <label className="col xl-3 l-3 m-12 s-12 xs-12 text-center">Username:</label>
                  <input className="input col xl-9 l-9 m-9 s-9 xs-9"
                    name="username"
                    type="text"
                    value={this.state.username}
                    onChange={this.handleInputChange} />
                </div>
                <div className="f-row f-center flex-container flex-wrap col xl-12 flex">
                  <label className="col xl-3 l-3 m-12 s-12 xs-12 text-center">Password:</label>
                  <input className="input col xl-9 l-9 m-9 s-9 xs-9"
                    name="password"
                    type="text"
                    value={this.state.password}
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="f-row f-center flex-container flex-wrap col xl-12 flex">
                <button className="btn prulife col xl-10"
                  type="submit"
                  value="Login" >
                  Login
                </button>
              </div>
            </div>
          </div>
          {/* <div className="f-column f-center flex">
            <img className="col xl-6 l-6 m-6 s-9 xs-10 no-padding"
              src="https://trabahotayo.com/wp-content/uploads/job-manager-uploads/company_logo/2017/04/prulife-1024x265.png" />
            <div className="flex f-column flex-container flex-wrap f-center box col xl-5 l-5 m-7 s-7 xs-9 f-justify-between">
              <div className="f-center flex f-column">
                <h4 className="font-danger f-center">
                  Pru Life Login
            </h4>
              </div>
              <div className="f-row f-center f-justify-around flex-container flex-wrap col xl-12">
                <label className="col xl-3 l-3 m-12 s-12 xs-12 text-center">Username:</label>
                <input className="input col xl-9 l-9 m-9 s-9 xs-9"
                  name="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.handleInputChange} />
              </div>
              <div className="f-row f-center f-justify-around flex-container flex-wrap col xl-12">
                <label className="col xl-3 l-3 m-12 s-12 xs-12 text-center">Password:</label>
                <input className="input col xl-9 l-9 m-9 s-9 xs-9"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInputChange} />
              </div>
              <button className="btn col xl-10 prulife"
                type="submit"
                value="Login" >
                Login
            </button>
            <div className="col"></div>
            {/* <div className="spinner spin">
            </div> */}
          {/* <div className="spinner atom">
            </div> */}
          {/* <input className="btn col xl-12 primary" type="submit" value="Login" ></input> */}
          {/* </div>
          </div>
            <div className="test spinner pusle">
              <h4>
                Loading
              </h4>
            </div> */}
        </div>
      </form>
    );
  }
}

export default LoginForm;