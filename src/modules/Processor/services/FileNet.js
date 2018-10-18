export default class FileNet {
  constructor(client) {
    this.http = client;
  }

  getDocs() {
    return this.http.post(`/filenet`, {});
  }
}
