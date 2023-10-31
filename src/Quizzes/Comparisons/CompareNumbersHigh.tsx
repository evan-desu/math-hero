import { useState, useEffect } from "react";
import { compareTwoNumbers } from "../../MathFunctions";
import './CompareNumbersHigh.css'

const CompareNumbers300 = () => {
    const [problem, setProblem] = useState({ num1: 0, num2: 0, correctAnswer: '' });
    const [userAnswer, setUserAnswer] = useState('');
    const [questionNumber, setQuestionNumber] = useState(1);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        setProblem(compareTwoNumbers(300, 100));
        setIsLoading(false);
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if(userAnswer === problem.correctAnswer) {
            setScore(score + 1);
        }

        if(questionNumber < 10) {
            setQuestionNumber(questionNumber + 1);
            setProblem(compareTwoNumbers(300, 100));
        } else {
            setIsFinished(true);
        }

        setUserAnswer('');
    }

    return (
        <main className="compare-300-container">
            {isLoading && <p>Loading...</p>}
            {!isFinished ? (
                <div className="compare-300-question-container">
                    <p className="compare-300-question-number">Question {questionNumber}</p>
                    <div className="compare-300-comparison-container">
                        <p>{problem.num1}</p>
                        <form onSubmit={handleSubmit} className="compare-300-answer-container">
                            <button type="submit" value="<" onClick={() => setUserAnswer("<")}>{`<`}</button>
                            <button type="submit" value="=" onClick={() => setUserAnswer("=")}>{`=`}</button>
                            <button type="submit" value=">" onClick={() => setUserAnswer(">")}>{`>`}</button>
                        </form>
                        <p>{problem.num2}</p>
                    </div>
                </div>
            ) : (
                <section className="compare-300-score-container">
                    <p className="compare-300-score-text">Your score: </p>
                    <p className="compare-300-score-result">{score}/10</p>
                </section>
            )}
        </main>
    )
}

export default CompareNumbers300;