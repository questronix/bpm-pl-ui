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
    return this.http.post(`/process/start`, args);
  }

  getTaskDetails(taskId, username) {
    return this.http.get(`/tasks/3877d623-d11b-11e8-be1f-429f38baa9cd?username=${username}`, {});
  }

  submitTask(taskId, username, data) {
    return this.http.post(`/tasks/${taskId}?username=${username}`, data);
  }

  // startProcess(args) {
  //   return this.http.post(`/tasks/new`, args);
  // }
}