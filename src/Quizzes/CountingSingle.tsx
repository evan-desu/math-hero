import { useEffect, useState } from 'react';
import { generateEmoji, checkAnswer } from '../MathFunctions';
import './CountingSingle.css'

const CountingSingle = () => {
    const [problem, setProblem] = useState({ emoji: '', emojiName: '', count: 0 });
    const [questionNumber, setQuestionNumber] = useState(1);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useState(() => {
        let newProblem = generateEmoji();
        setProblem(newProblem);
        setIsLoading(false);
    })

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if(checkAnswer(parseInt(userAnswer), problem.count)) {
            setScore(score + 1);
        }

        if(questionNumber < 10) {
            setQuestionNumber(questionNumber + 1);
            let newProblem = generateEmoji();
            setProblem(newProblem);
        } else {
            setIsFinished(true);
        }
        setUserAnswer('');
    };

    return (
        <main className="counting-single--quiz-container">
            {/* <h2>Counting Single Items</h2> */}
            {isLoading && <p>Loading...</p>}
            {!isFinished ? (
                <section className="question-container">
                    <p className="question-number">Question {questionNumber}</p>
                    <p className="question-text">How many {problem.emojiName} {problem.emoji} are there?</p>
                    <div className="counting-items">
                        {Array.from({ length: problem.count }).map((_, i) => (
                            <span key={i}>{problem.emoji}</span>
                        ))}
                    </div>
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
                <section>
                    <p className="score-text">Your score: </p>
                    <p className="score-result">{score}/10</p>
                </section>
            )}
        </main>
    );
}
 
export default CountingSingle;