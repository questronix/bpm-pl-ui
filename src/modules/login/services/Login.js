export default class Login {
  constructor(client) {
    this.http = client;
  }

  login(args) {
    return this.http.post('/login', args);
  }

  logout(args) {
    return this.http.post('/logout', args);
  }
}