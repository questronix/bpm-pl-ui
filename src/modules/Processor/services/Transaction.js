export default class Transaction {
  constructor(client) {
    this.http = client;
  }

  getDetailsById(id) {
    return this.http.get(`/lifeasia/transaction-details/${id}`);
  }
}
