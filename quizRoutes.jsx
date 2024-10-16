const express = require('express');
const Quiz = require('../models/Quiz1');
const router = express.Router();

router.get('/quizzes', async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
});

router.get('/quiz/:id', async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  res.json(quiz);
});

module.exports = router;
