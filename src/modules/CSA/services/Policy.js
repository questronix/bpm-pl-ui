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

  getLarten(id){
    return this.http.get(`/lifeasia/${id}/lartenq`);
  }

  createNewTask(args) {
    return this.http.post('/policy', args);
  }

  saveTransaction(args) {
    return this.http.post('/lifeasia/transaction/save', args);
  }

  saveTransactionDetails(args) {
    return this.http.post('/lifeasia/transaction/saveTransaction', args);
  }
}