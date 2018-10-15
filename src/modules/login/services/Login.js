export default class Login {
  constructor(client) {
    this.http = client;
  }

  login(args) {
    // return this.http.post('/auth/login', args);
    return new Promise((resolve, reject) => {
      const data = {
        id: 1,
        firstName: 'Juan',
        lastName: 'Sipag',
        role: 'CSA',
      };

      if (args.username === 'processor') data.role = 'PROCESSOR';
      setTimeout(() => {
        resolve({ 
          status: 200,
          data
        })
      }, 1500);
    });
  }

  logout(args) {
    return this.http.post('/logout', args);
  }
}