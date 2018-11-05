import { ApiClient } from '../../../lib/api/ApiClient';
import Role from './Role';

let client = new ApiClient();
let axios = client.getClient();

axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
});


const RoleService = new Role(client);

export {
  RoleService
}