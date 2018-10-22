import { ApiClient } from '../../../lib/api/ApiClient';
import FileNet from './FileNet';

let client = new ApiClient();
let axios = client.getClient();

axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
});

const FileNetService = new FileNet(client);

export {
  FileNetService
}