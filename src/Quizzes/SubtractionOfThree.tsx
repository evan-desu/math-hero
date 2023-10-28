import { useState, useEffect } from 'react'
import { checkAnswer, subtractWithThreeNums } from '../MathFunctions'
import './SubtractionOfThree.css'

const SubtractionOfThree = () => {
    const [problem, setProblem] = useState({ num1: 0, num2: 0, num3: 0, diff: 0 });
    const [userAnswer, setUserAnswer] = useState('');
    const [questionNumber, setQuestionNumber] = useState(1);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        setProblem(subtractWithThreeNums(10, 2));
        setIsLoading(false);
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (checkAnswer(parseInt(userAnswer), problem.diff)) {
            setScore(score + 1);
        }

        if(questionNumber < 10) {
            setQuestionNumber(questionNumber + 1);
            setProblem(subtractWithThreeNums(10, 2));
        } else {
            setIsFinished(true);
        }

        setUserAnswer('');
    }

    return (
        <main className="subtract-three-container">
            {isLoading && <p>Loading...</p>}
            {!isFinished ? (
                <section className="subtract-three-question-container">
                    <p className="subtract-three-question-number">Question {questionNumber}</p>
                    <p className="subtract-three-problem-text">{problem.num1} - {problem.num2} - {problem.num3}</p>
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
                <section className="subtract-three-score-container">
                    <p className="subtract-three-score-text">Your score: </p>
                    <p className="subtract-three-score-result">{score}/10</p>
                </section>
            )}
        </main>
    );
}
 
export default SubtractionOfThree;