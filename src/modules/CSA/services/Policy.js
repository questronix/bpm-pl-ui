import axios from 'axios';

export default class Policy {
  constructor(client) {
    this.http = client;
  }

  getPolicyInformationByID(policyNum) {
    return this.http.get(`/lifeasia/${policyNum}/policy`);
  }
  getClientIformationByid(id){
    return this.http.get(`/lifeasia/${id}/client`);
  }

  createNewTask(args) {
    return this.http.post('/policy', args);
  }
}