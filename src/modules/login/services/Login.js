export default class Login {
  constructor(client) {
    this.http = client;
  }

  login(args) {
    // return this.http.post('/auth/login', args);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ 
          status: 200,
          data: {
            id: 1,
            firstName: 'Juan',
            lastName: 'Sipag',
            role: 'CSA',
          }
        })
      }, 1500);
    });
  }

  logout(args) {
    return this.http.post('/logout', args);
  }
}