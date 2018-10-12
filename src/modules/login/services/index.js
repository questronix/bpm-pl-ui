import { ApiClient } from '../../../lib/api/ApiClient';
import Login from './Login';

let client = new ApiClient();
let axios = client.getClient();

axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
});

const LoginService = new Login(client);

export {
  LoginService
}