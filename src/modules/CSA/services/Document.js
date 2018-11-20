export default class Policy {
  constructor(client) {
    this.http = client;
  }
  
  getDocumentByTransactionType(transactionType) {
    return this.http.get(`/lifeasia/documents/${transactionType}`);
  }

  saveDocs(args) {
    return this.http.post(`/lifeasia/documents/save`, args);
  }

  createMemo(args) {
    return this.http.post(`/lifeasia/documents/memo`, args);
  }
}