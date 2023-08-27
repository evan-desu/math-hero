import { useEffect, useState } from "react";
import { mixedCount, checkAnswer } from "../MathFunctions";

const CountingMixed = () => {
    const [problem, setProblem] = useState<{ emojis: string[], counts: { [key: string]: number } } | null>(null);
    const [problems, setProblems] = useState<{ emojis: string[], counts: { [key: string]: number } }[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [questionNumber, setQuestionNumber] = useState(1);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        let newProblems = Array.from({length: 20}, () => mixedCount(4, 10, 20));
        setProblems(newProblems);
        let randomProblem = newProblems[Math.floor(Math.random() * newProblems.length)];
        setProblem(randomProblem);
        setCurrentQuestion(randomProblem.emojis[Math.floor(Math.random() * randomProblem.emojis.length)]);
        setIsLoading(false);
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if(problem && checkAnswer(parseInt(userAnswer), problem.counts[currentQuestion])) {
            setScore(score + 1)
        };

        if(questionNumber < 10) {
            setQuestionNumber(questionNumber + 1);
            let randomProblem = problems[Math.floor(Math.random() * problems.length)];
            setProblem(randomProblem);
            setCurrentQuestion(randomProblem.emojis[Math.floor(Math.random() * randomProblem.emojis.length)])
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
                    <p>How many {currentQuestion} are there?</p>
                    <div>
                        {problem && problem.emojis.map((emoji, index) => (
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