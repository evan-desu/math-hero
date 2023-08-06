import { useState, useEffect } from 'react'
import { add, checkAnswer } from '../MathFunctions'

const AdditionTen = () => {
    const [problem, setProblem] = useState({ num1: 0, num2: 0, sum: 0 });
    const [userAnswer, setUserAnswer] = useState('');
    const [questionNumber, setQuestionNumber] = useState(1);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        setProblem(add(10));
        setIsLoading(false);
    }, []);
    

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (checkAnswer(parseInt(userAnswer), problem.sum)) {
            setScore(score + 1);
        }

        if(questionNumber < 10) {
            setQuestionNumber(questionNumber + 1);
            setProblem(add(10));
        } else {
            setIsFinished(true);
        }

        setUserAnswer('');
    }

    return (
        <>
            <h2>Addition up to ten</h2>
            {isLoading && <p>Loading...</p>}
            {!isFinished ? (
                <section className="question-container">
                    <p>Question {questionNumber}</p>
                    <p>{problem.num1} + {problem.num2}</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='number'
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                        />
                        <button type='submit'>Submit</button>
                    </form>
                </section>
            ) : (
                <p>Your score: {score}/10</p>
            )}
        </>
    );
}
 
export default AdditionTen;