export default class Policy {
  constructor(client) {
    this.http = client;
  }
  
  getDocumentByTransactionType(transactionType) {
    return this.http.get(`/lifeasia/documents/${transactionType}`);
  }

  saveDocs(args) {
    return this.http.put(`/lifeasia/documents/`, args);
  }

  createMemo(args) {
    return this.http.post(`/lifeasia/memo`, args);
  }
}