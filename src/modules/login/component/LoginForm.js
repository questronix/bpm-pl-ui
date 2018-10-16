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
    this.setState({ isSubmitting: true});
    LoginService.login({ username: this.state.username, password: this.state.password }).then((res) => {
      if (res.status === 200) {
        this.setState({ isError: false});
        sessionStorage.setItem('username', this.state.username);
        sessionStorage.setItem('user_info', JSON.stringify(res.data));
        sessionStorage.setItem('is_authenticated', true);
        this.redirect(res.data.role);
      }
      else {
        this.setState({ isError: true});
      }
    }).finally(() => {
      this.setState({ isSubmitting: false});
      if (this.state.isError) {
        alert('error!');
      }
    });
  }

  redirect(role) {
    if (role === 'CSA') {
      window.location.href = "/dashboard";
    }
    else if(role === 'PROCESSOR') {
      window.location.href = "/processor";
    }
  }

  componentWillMount() {
    localStorage.clear();
    sessionStorage.clear();
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
                    disabled={this.state.isSubmitting}
                    value={this.state.username}
                    onChange={this.handleInputChange} />
                </div>
                <div className="f-row f-center flex-container flex-wrap col xl-12 flex">
                  <label className="col xl-3 l-3 m-12 s-12 xs-12 text-center">Password:</label>
                  <input className="input col xl-9 l-9 m-9 s-9 xs-9"
                    name="password"
                    type="password"
                    disabled={this.state.isSubmitting}
                    value={this.state.password}
                    onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="f-row f-center flex-container flex-wrap col xl-12 flex">
              {/* <button className="btn col xl-10 prulife"
                type="submit" 
                disabled={this.state.isSubmitting}>
                  {this.state.isSubmitting ? 'Please wait..' : 'Login'} 
                </button> */}
                {this.state.isSubmitting ? (<span className="spinner atom"></span>) : 
                <button className="btn col xl-10 prulife"
                type="submit" >
                  Login
                </button>}
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;