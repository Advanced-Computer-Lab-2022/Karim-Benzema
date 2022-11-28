const mongoose = require('mongoose');

const Schema = mongoose.Schema 
 const AnswerOptionSchema = new Schema({
  optionNumber: {
    type: Number
  },
  answerBody: {
    type: String,
    minlength: 1,
    maxlength: 200,
  },
  isCorrectAnswer: { // you can store the correct answer with question id in another model.
    type: Boolean,
    default: false
  }
});
const answer = mongoose.model('answerModel',AnswerOptionSchema); //to use it in another file 
module.exports = AnswerOptionSchema;
