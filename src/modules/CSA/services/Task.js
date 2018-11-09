export default class Task {
  constructor(client) {
    this.http = client;
  }

  getAllTasks() {
    return this.http.get(`/tasks`, {});
  }

  getTaskByInstanceId(instanceId) {
    return this.http.get(`/tasks/${instanceId}`);
  }

  createNewTask() {
    return this.http.post(`/tasks`);
  }

  getTaskDetails(taskId) {
    return this.http.get(`/tasks/${taskId}`, {});
  }

  submitTask(taskId, data) {
    return this.http.post(`/tasks/${taskId}`, data);
  }

  getAllTaskHistory() {
    return this.http.get(`/tasks/history`, {});
  }

  generateTransactionId() {
    return this.http.post(`/lifeasia/transaction`);
  }
}