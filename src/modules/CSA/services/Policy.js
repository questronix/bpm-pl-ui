import axios from 'axios';

export default class Policy {
  constructor(client) {
    this.http = client;
  }

  getPolicyInformationByID(args) {
    // return this.http.post('/lifeasia', args);
    return this.http.post('/lifeasia', args);
  }

  createNewTask(args) {
    return this.http.post('/policy', args);
  }
}