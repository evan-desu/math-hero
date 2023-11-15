import { useState, useEffect } from 'react';
import { checkAnswer, addThreeNumbers } from '../../MathFunctions';
import ScoreDisplay from '../../ScoreDisplay/ScoreDisplay';
import './AdditionOfThree.css';

const AdditionOfThree = () => {
    const [problem, setProblem] = useState({ num1: 0, num2: 0, num3: 0, sum: 0 });
    const [userAnswer, setUserAnswer] = useState('');
    const [questionNumber, setQuestionNumber] = useState(1);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        setProblem(addThreeNumbers(20));
        setIsLoading(false);
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (checkAnswer(parseInt(userAnswer), problem.sum)) {
            setScore(score + 1);
        }

        if(questionNumber < 10) {
            setQuestionNumber(questionNumber + 1);
            setProblem(addThreeNumbers(20));
        } else {
            setIsFinished(true);
        }

        setUserAnswer('');
    }

    return (
        <main className="add-three-container">
            {isLoading && <p>Loading...</p>}
            {!isFinished ? (
                <section className="add-three-question-container">
                    <p className="add-three-question-number">Question {questionNumber}</p>
                    <p className="add-three-problem-text">{problem.num1} + {problem.num2} + {problem.num3}</p>
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
}
 
export default AdditionOfThree;