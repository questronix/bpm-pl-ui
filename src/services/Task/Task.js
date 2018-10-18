export default class Task {
  constructor(client) {
    this.http = client;
  }

  getAllTasks(uid) {
    return this.http.get(`/tasks?uid=${uid}`, {});
  }

  getTaskByInstanceId(instanceId) {
    return this.http.get(`/tasks/${instanceId}`);
  }

  createNewTask(args) {
    return this.http.post(`/tasks`, args);
  }

  getTaskDetails(taskId, uid) {
    return this.http.get(`/tasks/${taskId}?uid=${uid}`, {});
  }

  submitTask(taskId, uid, data) {
    return this.http.post(`/tasks/${taskId}?uid=${uid}`, data);
  }

  getAllTaskHistory(uid) {
    return this.http.get(`/tasks/history?uid=${uid}`, {});
  }

  claim(taskId, uid) {
    return this.http.post(`/tasks/${taskId}/claim?uid=${uid}`, { action: "claim" });
  }
  // startProcess(args) {
  //   return this.http.post(`/tasks/new`, args);
  // }
}