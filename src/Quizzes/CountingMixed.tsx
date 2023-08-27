import { useEffect, useState } from "react";
import { mixedCount, checkAnswer } from "../MathFunctions";

const CountingMixed = () => {
    const [problem, setProblem] = useState<{ emojis: string[], total: number }>({ emojis: [], total: 0 });
    const [questionNumber, setQuestionNumber] = useState(1);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        let newProblem = mixedCount(3, 10, 20);
        setProblem(newProblem);
        setIsLoading(false);
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if(checkAnswer(parseInt(userAnswer), problem.total)) {
            setScore(score + 1)
        };

        if(questionNumber < 10) {
            setQuestionNumber(questionNumber + 1);
            const newProblem = mixedCount(3, 10, 15);
            setProblem(newProblem);
        } else {
            setIsFinished(true);
        }
        setUserAnswer('');
    };

    return (
        <>
            <h2>Counting Mixed Items</h2>
            {isLoading && <p>Loading...</p>}
            {!isFinished ? (
                <section className="question-container">
                    <p>Question {questionNumber}</p>
                    <div>
                        {problem.emojis.map((emoji, index) => (
                            <span key={index}>{emoji}</span>
                        ))}
                    </div>
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
 
export default CountingMixed;