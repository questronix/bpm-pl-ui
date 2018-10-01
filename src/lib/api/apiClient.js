import axios from 'axios';

const getClient = () => {

  const config = {
      baseURL: 'http://localhost:3001',
      timeout: 2000,
  };

  const client = axios.create(config);
  return client;
}

export default class apiClient {
  constructor() {
    this.client = getClient();
  }

  getClient() {
    console.log(this.client);
    return this.client;
  }

  get(path, params) {
    console.log(`GET request: ${path} \n params: ${JSON.stringify(params)}`);
    return request(this.client.get(path, params));
  }

  post(path, params) {
    console.log(`POST request: ${path} \n params: ${JSON.stringify(params)}`);
    return request(this.client.post(path, params));
  }

  put(path, params) {
    console.log(`PUT request: ${path} \n params: ${JSON.stringify(params)}`);
    return request(this.client.put(path, params));
  }

  delete(path, params) {
    console.log(`DELETE request: ${path} \n params: ${JSON.stringify(params)}`);
    return request(this.client.delete(path, params));
  }
}

function request(req) {
  return req.then((result) => {
    console.log(`Success Request: ${JSON.stringify(result.data)}`);
    return result;
  }).catch((err) => {
    console.log(`Error Request: ${JSON.stringify(err)}`);
    return err;
  });
}
