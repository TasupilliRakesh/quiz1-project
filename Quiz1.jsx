const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: String,
  options: [
    {
      text: String,
      isCorrect: Boolean
    }
  ]
});

const quizSchema = new mongoose.Schema({
  title: String,
  questions: [questionSchema],
});

module.exports = mongoose.model('Quiz1', quizSchema);
