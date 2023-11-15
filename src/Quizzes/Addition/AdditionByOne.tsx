import { useState, useEffect } from "react";
import { checkAnswer, generateNumber } from "../../MathFunctions";
import './AdditionByOne.css';

const AdditionByOne = () => {
    const [problem, setProblem] = useState({ num1: 0, num2: 0, sum: 0 });
    const [userAnswer, setUserAnswer] = useState("");
    const [questionNumber, setQuestionNumber] = useState(1);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const num1 = generateNumber(10);
        const num2Array = [1, 2];
        const num2 = num2Array[generateNumber(2) - 1]
        setProblem({ num1: num1, num2: num2, sum: num1 + num2 });
        setIsLoading(false);
    }, []);

    const handleSubmit= (event: React.FormEvent) => {
        event.preventDefault();
        
        if(checkAnswer(parseInt(userAnswer), problem.sum)) {
            setScore(score + 1);
        }

        if (questionNumber < 10) {
            setQuestionNumber(questionNumber + 1);
            const num1 = generateNumber(10);
            const num2Array = [1, 2];
            const num2 = num2Array[generateNumber(2) - 1]
            setProblem({ num1: num1, num2: num2, sum: num1 + num2 });
        } else {
            setIsFinished(true);
        }

        setUserAnswer("");
    }

    return (
        <main className="add-by-one-container">
            {isLoading && <p>Loading...</p>}
            {!isFinished ? (
                <section className="add-by-one-question-container">
                    <p className="add-by-one-question-number">Question {questionNumber}</p>
                    <p className="add-by-one-problem-text">{problem.num1} + {problem.num2}</p>
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
                <section className="add-by-one-score-container">
                    <p className="add-by-one-score-text">Your score: </p>
                    <p className="add-by-one-score-result">{score}/10</p>
                </section>
            )}
        </main>
    )

}

export default AdditionByOne;