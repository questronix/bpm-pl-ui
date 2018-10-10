export default class Policy {
  constructor(client) {
    this.http = client;
  }

  getPolicyInformationByID(args) {
    return this.http.post('/policy', args);
  }

  createNewTask(args) {
    return this.http.post('/policy', args);
  }
}