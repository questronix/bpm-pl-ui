import { ApiClient } from '../../../lib/api/ApiClient';
import FileNet from './FileNet';
import Transaction from './Transaction';

let client = new ApiClient();
let axios = client.getClient();

axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
});

const FileNetService = new FileNet(client);
const TransactionService = new Transaction(client);

export {
  FileNetService,
  TransactionService
}