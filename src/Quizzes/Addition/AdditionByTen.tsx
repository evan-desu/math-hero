import { useState, useEffect } from 'react'
import { checkAnswer, generateNumber } from '../../MathFunctions'
import './AdditionByTen.css'

const AdditionByTen = () => {
    const [problem, setProblem] = useState({ num1: 10, num2: 0, sum: 0 });
    const [userAnswer, setUserAnswer] = useState('');
    const [questionNumber, setQuestionNumber] = useState(1);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const num2 = generateNumber(10);
        setProblem({ num1: 10, num2: num2, sum: 10 + num2 });
        setIsLoading(false);
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (checkAnswer(parseInt(userAnswer), problem.sum)) {
            setScore(score + 1);
        }

        if(questionNumber < 10) {
            setQuestionNumber(questionNumber + 1);
            const num2 = generateNumber(10);
            setProblem({ num1: 10, num2: num2, sum: 10 + num2 });
        } else {
            setIsFinished(true);
        }

        setUserAnswer('');
    }

    return (
        <main className="add-by-ten-container">
            {isLoading && <p>Loading...</p>}
            {!isFinished ? (
                <section className="add-by-ten-question-container">
                    <p className="add-by-ten-question-number">Question {questionNumber}</p>
                    <p className="add-by-ten-problem-text">{problem.num1} + {problem.num2}</p>
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
                <section className="add-by-ten-score-container">
                    <p className="add-by-ten-score-text">Your score: </p>
                    <p className="add-by-ten-score-result">{score}/10</p>
                </section>
            )}
        </main>
    );
}
 
export default AdditionByTen;