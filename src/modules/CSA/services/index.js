import { ApiClient } from '../../../lib/api/ApiClient';
import Policy from './Policy';
import Task from './Task';

let client = new ApiClient();
let axios = client.getClient();

axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
});

const PolicyService = new Policy(client);
const TaskService = new Task(client);

export {
  PolicyService,
  TaskService
}