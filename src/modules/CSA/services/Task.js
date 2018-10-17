export default class Task {
  constructor(client) {
    this.http = client;
  }

  getAllTasks(username) {
    return this.http.get(`/tasks?username=${username}`, {});
  }

  getTaskByInstanceId(instanceId) {
    return this.http.get(`/tasks/${instanceId}`);
  }

  createNewTask(args) {
    return this.http.post(`/tasks`, args);
  }

  getTaskDetails(taskId, username) {
    return this.http.get(`/tasks/${taskId}?username=${username}`, {});
  }

  submitTask(taskId, username, data) {
    return this.http.post(`/tasks/${taskId}?username=${username}`, data);
  }

  // startProcess(args) {
  //   return this.http.post(`/tasks/new`, args);
  // }
}