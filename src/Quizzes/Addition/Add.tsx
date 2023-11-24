import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { checkAnswer, generateNumber } from '../../MathFunctions';
import ScoreDisplay from '../../ScoreDisplay/ScoreDisplay';
import 'Add.css';

const Add = () => {
    // const { t } = useTranslation();
    // const { num1, num2, num3 } = useParams<{ num1: string, num2: string, num3?: string }>();
    // const [problem, setProblem] = useState({ num1: 0, num2: 0, num3: 0, sum: 0});
    // const [userAnswer, setUserAnswer] = useState('');
    // const [questionNumber, setQuestionNumber] = useState(1);
    // const [score, setScore] = useState(0);
    // const [isLoading, setIsLoading] = useState(true);
    // const [isFinished, setIsFinished] = useState(false);

    // useEffect(() => {
    //     const addend1 = parseInt(num1, 10) || 0;
    //     const addend2 = parseInt(num2, 10) || 0;
    //     const addend3 = num3 ? parseInt(num3, 10) : 0;

    //     if (addend3) {

    //     }
    // })
}

export default Add;