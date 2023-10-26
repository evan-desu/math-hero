import { useState, useEffect } from "react";
import { compareTwoNumbers } from "../MathFunctions";
import './CompareNumbers.css'

const CompareNumbers = () => {
    const [problem, setProblem] = useState({ num1: 0, num2: 0, correctAnswer: '' });
    const [userAnswer, setUserAnswer] = useState('');
    const [questionNumber, setQuestionNumber] = useState(1);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        setProblem(compareTwoNumbers(100, 50));
        setIsLoading(false);
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if(userAnswer === problem.correctAnswer) {
            setScore(score + 1);
        }

        if(questionNumber < 10) {
            setQuestionNumber(questionNumber + 1);
            setProblem(compareTwoNumbers(100, 50));
        } else {
            setIsFinished(true);
        }

        setUserAnswer('');
    }

    return (
        <main className="compare-numbers-container">
            {isLoading && <p>Loading...</p>}
            {!isFinished ? (
                <div className="question-container">
                    <p>Question {questionNumber}</p>
                    <div className="comparison-container">
                        <p>{problem.num1}</p>
                        <form onSubmit={handleSubmit} className="answer-choice-container">
                            <button type="submit" value="<" onClick={() => setUserAnswer("<")}>{`<`}</button>
                            <button type="submit" value="=" onClick={() => setUserAnswer("=")}>{`=`}</button>
                            <button type="submit" value=">" onClick={() => setUserAnswer(">")}>{`>`}</button>
                        </form>
                        <p>{problem.num2}</p>
                    </div>
                </div>
            ) : (
                <section className="compare-score-container">
                    <p className="compare-score-text">Your score: </p>
                    <p className="compare-score-result">{score}/10</p>
                </section>
            )}
        </main>
    )
}

export default CompareNumbers;