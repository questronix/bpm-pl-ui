import miscUtils from './misc';

const findAnswer = (id, questions) => {
  let question = questions.find(q => q.questionId === id);
  question = question !== undefined && miscUtils.sanitizedBool(question.answer);
  console.log('QUESTIONSSSS', question)
  return question;
}

export default {
  findAnswer
}