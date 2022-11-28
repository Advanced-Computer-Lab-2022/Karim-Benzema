const mongoose = require('mongoose');
const Schema = mongoose.Schema 
const questionSchema = require('../models/questionModel')

 const examSchema = new Schema({
  exercisee: {
    type: String,
    minlength: 10,
    maxlength: 1000,
  },
  questionOptions: {
    type: [questionSchema],

  
  }
}, {
  timestamps: true
});

const exam = mongoose.model('examModel',examSchema); //to use it in another file 
module.exports = exam;

