import { Button, Typography, Box, Radio, FormControl, FormLabel, RadioGroup, FormControlLabel } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import { fontSize } from '@mui/system';
import React, { useState } from 'react';
import styles from './Tutorial.module.scss'
import cn from 'classnames';


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
		{
			questionText: 'Good Job!',
			answerOptions: [
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
	<div display= "flex" className={`menu${cn(styles.block_layout, styles.block)}`}>
      <Box display="flex" justifyContent="center" m={10} >
        <Typography variant="h1" align="center" color="primary" >
        {questions[currentQuestion].questionText}
        </Typography>
      </Box>

      {questions[currentQuestion].answerOptions.map((answerOption) => (
        <Box display="flex" justifyContent="center" m={2}>
          <Button variant="contained" style={{maxWidth: '300px', maxHeight: '50px', minWidth: '300px', minHeight: '50px', fontSize: '18px'}} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
            {answerOption.answerText}
          </Button>
        </Box>
			))}
			</div>
    </>
	);
}

export default Tutorial;
