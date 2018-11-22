export default class Question {
    constructor(client) {
      this.http = client;
    }
  
    getQuestionsByTransactionID(args) {
      return this.http.post(`/lifeasia/questions`, args);
    }

    saveAnswer(args) {
      return this.http.post(`/lifeasia/questions/save`, args);
    }

  }