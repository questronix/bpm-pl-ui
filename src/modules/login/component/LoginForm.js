import React, {Component} from 'react';

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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username:
          <input
            name="username" 
            type="text" 
            value={this.state.username} 
            onChange={this.handleInputChange} />
        </label>
        <label>Password:
          <input 
            name="password"
            type="text" 
            value={this.state.password} 
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default LoginForm;