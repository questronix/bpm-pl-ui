import React, { Component } from 'react';
import { LoginService } from '../services';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isSubmitting: false,
      isError: false,
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
    this.setState({ isSubmitting: true });
    LoginService.login({ username: this.state.username, password: this.state.password }).then((res) => {
      if (res.status === 200) {
        this.setState({ isError: false });
        console.log('RESULT', res);
        sessionStorage.setItem('username', this.state.username);
        sessionStorage.setItem('user_info', JSON.stringify(res.data));
        sessionStorage.setItem('is_authenticated', true);
        this.redirect(res.data.role.name);
      }
      else {
        this.setState({ isError: true });
      }
    }).finally(() => {
      this.setState({ isSubmitting: false });
      if (this.state.isError) {
        alert('Invalid username or password!');
      }
    });
  }

  redirect(role) {
    const url = window.location.href;
    const path = window.location.pathname;

    if (path === '/' || path === '/login') {
      if (role === 'CSA') {
        window.location.href = "/tasks";
      }
      else if(role === 'PROCESSOR') {
        window.location.href = "/processor";
      }else if (role === "ADMIN"){
        window.location.href = "/admin";  
      }
    }
    else {
      window.location.href = url;
    }
  }

  componentWillMount() {
    localStorage.clear();
    sessionStorage.clear();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="login col no-padding">
          <div className="login-bg-filter">
            {/* <img src="https://i.imgur.com/DkX0ZtJ.jpg"></img> */}
            <div className="login-form no-padding m-4 s-12 xs-12">
              <div className="login-banner">
                <div className="login-banner-filter flex f-center">
                  <div className="login-header">
                    <h3 className="font-white text-center margin-auto">
                      Prulife login
                  </h3>
                  </div>
                </div>
              </div>
              <div>
                <div className="login-body flex f-center f-column">
                  <div className="input-container xl-11">
                    <label className="col xl-3 l-3 m-12 s-12 xs-12 text-center">User ID:</label>
                    <input className="input-with-icon col xl-11 l-11 m-11 s-11 xs-11"
                      name="username"
                      type="text"
                      disabled={this.state.isSubmitting}
                      value={this.state.username}
                      onChange={this.handleInputChange}
                      placeholder="Ldap id" />
                      <span className="fa fa-user font-white"></span>
                  </div>
                  <div className="input-container xl-11">
                    <label className="col xl-3 l-3 m-12 s-12 xs-12 text-center">Password:</label>
                    <input className="input-with-icon col xl-11 l-11 m-11 s-11 xs-11"
                      name="password"
                      type="password"
                      disabled={this.state.isSubmitting}
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      placeholder="Password" />
                      <span className="fa fa-lock font-white"></span>
                  </div>
                </div>
                <div className="f-row f-center flex-container flex-wrap xl-12 flex">
                  {/* <button className="btn col xl-10 prulife"
                type="submit" 
                disabled={this.state.isSubmitting}>
                  {this.state.isSubmitting ? 'Please wait..' : 'Login'} 
                </button> */}
                  {this.state.isSubmitting ? (<span className="spinner atom"></span>) :
                    <button className="btn xl-10 prulife login-btn flex f-center"
                      type="submit" >
                      Login
                  </button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form >
    );
  }
}

export default LoginForm;