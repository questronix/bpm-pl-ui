import axios from 'axios';

const getClient = () => {

  const config = {
      baseURL: '/api',
      timeout: 10000, //removed because of filenet slow response
  };

  config.headers = {
    'Access-Control-Allow-Origin': '*',
    // Authorization: 'Bearer ' + token,
    // 'origin': 'localhost',
    'Accept': 'application/json',
		'Content-Type': 'application/json',
  };

  const client = axios.create(config);
  return client;
}

//TODO: change apiClient to ApiClient
class ApiClient {
  constructor() {
    this.client = getClient();
  }
  
  setHeaders(headers) {
    this.client.defaults.headers = headers;
    return this;
  }

  getClient() {
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

export {
  ApiClient,
}

function request(req) {
  return req.then((result) => {
    console.log(`Success Request: ${JSON.stringify(result.data)}`);
    return result;
  }).catch((err) => {
    /**
     * This will validate if the user is authorized to make a request from our server. 
     * Then if not, we will redirect the user to login page. */ 
    if (err.response.status == 401) {
      __isLoggedIn = false;
      // alert('Please login to continue');
      window.location.href = '/login';
    }
    console.log(`Error Request: ${JSON.stringify(err)}`);
    return err;
  });
}
