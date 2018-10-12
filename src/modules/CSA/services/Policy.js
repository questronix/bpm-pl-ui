import axios from 'axios';

export default class Policy {
  constructor(client) {
    this.http = client;
  }

  getPolicyInformationByID(args) {
    // return this.http.post('/policy', args);
    return axios.post('http://localhost:3001/policy', args);
  }

  createNewTask(args) {
    return this.http.post('/policy', args);
  }
}