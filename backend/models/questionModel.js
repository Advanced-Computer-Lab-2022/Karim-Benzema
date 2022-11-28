const mongoose = require('mongoose');
const Schema = mongoose.Schema 
const AnswerOptionSchema = require('../models/answerModel')

 const questionSchema = new Schema({
  q: {
    type: String,
    minlength: 10,
    maxlength: 1000,
  },
  answerOptions: {
    type: [AnswerOptionSchema],
    default: undefined,
    validate: {
      validator: function(value) {
        return value && value.length === 4;
      },
      message: 'Answer options should be 4.'
    }
  }
}, {
  timestamps: true
});

const question = mongoose.model('questionModel',questionSchema); //to use it in another file 
module.exports = questionSchema;

