import { ApiClient } from '../../../lib/api/ApiClient';
import Policy from './Policy';
import Task from './Task';
import Document from './Document';
import Question from './Question';

let client = new ApiClient();
let axios = client.getClient();

axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
});

const PolicyService = new Policy(client);
const TaskService = new Task(client);
const DocumentService = new Document(client);
const QuestionService = new Question(client);

export {
  PolicyService,
  TaskService,
  DocumentService,
  QuestionService
}