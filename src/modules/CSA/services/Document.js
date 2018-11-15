export default class Policy {
  constructor(client) {
    this.http = client;
  }
  
  getDocumentByTransactionType(transactionType) {
    return this.http.get(`/lifeasia/documents/${transactionType}`);
  }
}