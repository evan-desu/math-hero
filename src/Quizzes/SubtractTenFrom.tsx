import { useState, useEffect } from 'react'
import { checkAnswer, generateNumber } from '../MathFunctions'
import './SubtractTenFrom.css'

const SubtractTenFrom = () => {
    const [problem, setProblem] = useState({ num1: 0, num2: 10, diff: 0 });
    const [userAnswer, setUserAnswer] = useState('');
    const [questionNumber, setQuestionNumber] = useState(1);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        let num1  = generateNumber(20);
            while (num1 < 10) {
                num1 = generateNumber(20);
            }
        setProblem({ num1: num1, num2: 10, diff: num1 - 10 });
        setIsLoading(false);
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (checkAnswer(parseInt(userAnswer), problem.diff)) {
            setScore(score + 1);
        }

        if(questionNumber < 10) {
            setQuestionNumber(questionNumber + 1);
            let num1  = generateNumber(20);
            while (num1 < 10) {
                num1 = generateNumber(20);
            }
        setProblem({ num1: num1, num2: 10, diff: num1 - 10 });
        } else {
            setIsFinished(true);
        }

        setUserAnswer('');
    }

    return (
        <main className="subtract-ten-from-container">
            {isLoading && <p>Loading...</p>}
            {!isFinished ? (
                <section className="subtract-ten-from-question-container">
                    <p className="subtract-ten-from-question-number">Question {questionNumber}</p>
                    <p className="subtract-ten-from-problem-text">{problem.num1} - {problem.num2}</p>
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
                <section className="subtract-ten-from-score-container">
                    <p className="subtract-ten-from-score-text">Your score: </p>
                    <p className="subtract-ten-from-score-result">{score}/10</p>
                </section>
            )}
        </main>
    );
}
 
export default SubtractTenFrom;