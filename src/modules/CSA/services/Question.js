export default class Question {
    constructor(client) {
      this.http = client;
    }
  
    getQuestionsByTransactionID(args) {
      return this.http.post(`/lifeasia/questions`, args);
    }

  }