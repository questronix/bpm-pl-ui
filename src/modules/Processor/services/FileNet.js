export default class FileNet {
  constructor(client) {
    this.http = client;
  }

  getDocs(args) {
    return this.http.post(`/filenet`, args);
  }
}
