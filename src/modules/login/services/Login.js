export default class Login {
  constructor(client) {
    this.http = client;
  }

  login(args) {
    return this.http.post('/auth/login', args);
  }

  logout(args) {
    return this.http.post('/auth/logout', args);
  }
}