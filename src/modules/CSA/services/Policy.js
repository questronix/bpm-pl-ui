import axios from 'axios';

export default class Policy {
  constructor(client) {
    this.http = client;
  }

  getPolicyInformationByID(policyNum) {
    return this.http.get(`/lifeasia/${policyNum}/policy`);
  }

  createNewTask(args) {
    return this.http.post('/policy', args);
  }
}