import { useState, useEffect } from 'react';
import { checkAnswer, generateNumber } from '../../MathFunctions';
import ScoreDisplay from '../../ScoreDisplay/ScoreDisplay';
import './AdditionByThree.css';

const AdditionByThree = () => {
    const [problem, setProblem] = useState({ num1: 0, num2: 3, sum: 0 });
    const [userAnswer, setUserAnswer] = useState('');
    const [questionNumber, setQuestionNumber] = useState(1);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const num1 = generateNumber(10);
        setProblem({ num1: num1, num2: 3, sum: num1 + 3 });
        setIsLoading(false);
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (checkAnswer(parseInt(userAnswer), problem.sum)) {
            setScore(score + 1);
        }

        if(questionNumber < 10) {
            setQuestionNumber(questionNumber + 1);
            const num1 = generateNumber(10);
            setProblem({ num1: num1, num2: 3, sum: num1 + 3 });
        } else {
            setIsFinished(true);
        }

        setUserAnswer('');
    }

    return (
        <main className="add-by-three-container">
            {isLoading && <p>Loading...</p>}
            {!isFinished ? (
                <section className="add-by-three-question-container">
                    <p className="add-by-three-question-number">Question {questionNumber}</p>
                    <p className="add-by-three-problem-text">{problem.num1} + {problem.num2}</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='number'
                            placeholder='Answer'
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                        />
                        <button type='submit'>Submit</button>
                    </form>
                </section>
            ) : (
                <ScoreDisplay score={score} totalQuestions={10}/>
            )}
        </main>
    );
};
 
export default AdditionByThree;