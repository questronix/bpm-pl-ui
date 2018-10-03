import { ApiClient } from '../lib/api/ApiClient';
import Policy from './Policy/Policy';

let client = new ApiClient();
let axios = client.getClient();

axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
});

const PolicyService = new Policy(client);

export {
  PolicyService,
}