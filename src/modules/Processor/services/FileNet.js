export default class FileNet {
  constructor(client) {
    this.http = client;
  }

  getDocs() {
    return this.http.get(`/fr`, {});
  }

  // startProcess(args) {
  //   return this.http.post(`/tasks/new`, args);
  // }
}