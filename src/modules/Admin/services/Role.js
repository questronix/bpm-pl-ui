export default class Task {
  constructor(client) {
    this.http = client;
  }

  getAllRoles() {
    return this.http.get(`/roles`, {});
  }

  getRoleById(id) {
    return this.http.get(`/roles/${id}`);
  }

  createNewRole(args) {
    return this.http.post(`/roles`, args);
  }

  updateById(id) {
    return this.http.put(`/roles/${id}`);
  }

  removeRole(id) {
    return this.http.delete(`/roles/${id}`);
  }

 

 
}