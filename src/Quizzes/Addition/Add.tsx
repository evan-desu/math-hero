import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { add, checkAnswer } from '../../MathFunctions';
import ScoreDisplay from '../../ScoreDisplay/ScoreDisplay';
import './Add.css';

const Add = () => {
    const { sumLimit } = useParams<{ sumLimit: string }>();
    const limit = parseInt(sumLimit ?? '0', 10);

    const [problem, setProblem] = useState({ num1: 0, num2: 0, sum: 0 });
    const [userAnswer, setUserAnswer] = useState('');
    const [questionNumber, setQuestionNumber] = useState(1);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        setProblem(add(limit));
        setIsLoading(false);
    },[limit]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if(checkAnswer(parseInt(userAnswer), problem.sum)){
            setScore(score + 1);
        }

        if(questionNumber < 10) {
            setQuestionNumber(questionNumber + 1);
            setProblem(add(limit));
        } else {
            setIsFinished(true);
        }
        setUserAnswer('');
    }

    return (
        <main className="add-container">
            {isLoading && <p>Loading...</p>}
            {!isFinished ? (
                <section className="add-question-container">
                    <p className="add-question-number">Question {questionNumber}</p>
                    <p className="add-problem-text">{problem.num1} + {problem.num2}</p>
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

export default Add;