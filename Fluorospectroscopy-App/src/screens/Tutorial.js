import { Button, Typography, Box } from '@mui/material';
import React, { useState } from 'react';



const Tutorial = () => {
  const questions = [
    {
      questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
    },
    {
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      }
		}
	};

  return (
    <>
      <Box display="flex" justifyContent="center" m={10} >
        <Typography variant="h1" align="center" color="primary" >
        {questions[currentQuestion].questionText}
        </Typography>
      </Box>

      {questions[currentQuestion].answerOptions.map((answerOption) => (
        <Box display="flex" justifyContent="center" m={2}>
          <Button variant="contained" style={{maxWidth: '500px', maxHeight: '50px', minWidth: '500px', minHeight: '50px', fontSize: '40px'}} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
            {answerOption.answerText}
          </Button>
        </Box>
			))}
    </>
	);
}

export default Tutorial;
