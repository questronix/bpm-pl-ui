import miscUtils from './misc';

const findAnswer = (id, questions) => {
  let answer = null;
  let question = questions.find(q => q.questionId === id);
  if (question !== undefined && question.answer !== null) {
    return miscUtils.sanitizedBool(question.answer);
  }
  return answer;
}

export default {
  findAnswer
}