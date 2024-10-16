import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Quiz = () => {
  const { quizId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios.get(`/api/quiz/${quizId}`).then(response => setQuestions(response.data.questions));
  }, [quizId]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= questions.length) {
    return <h1>Quiz Finished! Your Score: {score}</h1>;
  }

  return (
    <div>
      <h2>{questions[currentQuestion].questionText}</h2>
      {questions[currentQuestion].options.map(option => (
        <button key={option.id} onClick={() => handleAnswer(option.isCorrect)}>
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default Quiz;
