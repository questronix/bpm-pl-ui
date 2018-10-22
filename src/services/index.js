import { ApiClient } from '../lib/api/ApiClient';
import Task from './Task/Task';

let client = new ApiClient();
let axios = client.getClient();

axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
});

const TaskService = new Task(client);

export {
  TaskService
}