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
      maskPassword: true
    };

    this.handleMaskPassword = this.handleMaskPassword.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    localStorage.clear();
    sessionStorage.clear();
  }

  handleMaskPassword() {
    const { maskPassword } = this.state;
    this.setState({ maskPassword: !maskPassword });
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
    LoginService.login({
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({ isError: false });
          console.log('RESULT', res);
          sessionStorage.setItem('username', this.state.username);
          sessionStorage.setItem('user_info', JSON.stringify(res.data.result));
          sessionStorage.setItem('is_authenticated', true);
          // this.redirect(res.data.role.name);
          this.redirect(res.data.result.Role_Description);
        } else {
          this.setState({ isError: true });
        }
      })
      .finally(() => {
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
        window.location.href = '/tasks';
      } else if (role === 'PROCESSOR') {
        window.location.href = '/processor';
      } else if (role === 'ADMIN') {
        window.location.href = '/admin';
      }
    } else {
      window.location.href = url;
    }
  }

  render() {
    const { username, password, maskPassword, isSubmitting } = this.state;

    return (
      <div className="login-container">
        <div className="login-circle" />
        <form onSubmit={this.handleSubmit}>
          <div className="login col no-padding">
            <div className="logo">
              <div className="wrapper">
                <i className="icon fa fa-file-signature" />
              </div>
              <div className="title">
                <span>BPM</span> After-sales
              </div>
            </div>
            <div>
              <div className="input-container flex f-row">
                <div className="text-label">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    disabled={isSubmitting}
                    value={username}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="icon flex f-center">
                  <span className="fa fa-user" />
                </div>
              </div>
              <div className="input-container flex f-row">
                <div className="text-label">
                  <label>Password</label>
                  <input
                    type={maskPassword ? 'password' : 'input'}
                    name="password"
                    placeholder="Password"
                    disabled={isSubmitting}
                    value={password}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="icon flex f-center">
                  <span
                    className={maskPassword ? "fa fa-eye-slash" : "fa fa-eye"}
                    onClick={this.handleMaskPassword}
                  />
                </div>
              </div>
              {!isSubmitting && (
                <div className="login-button">
                  <button className="btn prulife flex f-center" type="submit">
                    LOGIN
                    <span className="fa fa-arrow-right" />
                  </button>
                </div>
              )}
            </div>
            {isSubmitting && <span className="spinner atom" />}
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
