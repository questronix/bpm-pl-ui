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
        sessionStorage.setItem('user_info', JSON.stringify(res.data.result));
        sessionStorage.setItem('is_authenticated', true);
        // this.redirect(res.data.role.name);
        this.redirect(res.data.result.Role_Description);
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
      else if (role === 'PROCESSOR') {
        window.location.href = "/processor";
      } else if (role === "ADMIN") {
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
      <div className="login-container">
        <div class="login-circle"></div>
        <form onSubmit={this.handleSubmit}  >
          <div className="login col no-padding">
            <div class="logo">
              <div class="wrapper"><i class="icon fa fa-file-signature"></i></div>
              <div class="title"><span>BPM</span> After-sales</div>
            </div>
            <div className="">
              <div className="input-container flex f-row">
                <div className="text-label">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    // disabled={this.state.isSubmitting}
                    value={this.state.username}
                    onChange={this.handleInputChange} />
                </div>
                <div className="icon flex f-center">
                  <span className="fa fa-user"></span>
                </div>
              </div>
              <div className="input-container flex f-row">
                <div className="text-label">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    // disabled={this.state.isSubmitting}
                    value={this.state.password}
                    onChange={this.handleInputChange} />
                </div>
                <div className="icon flex f-center">
                  <span className="fa fa-eye-slash"></span>
                </div>
              </div>
              {this.state.isSubmitting ? (<span className="spinner atom"></span>) :
                <div className="login-button">
                    <button className="btn prulife flex f-center" type="submit">
                      LOGIN
                      <span className="fa fa-arrow-right"></span>
                    </button>
                </div>}
            </div>
          </div>
        </form >
      </div>
    );
  }
}

export default LoginForm;