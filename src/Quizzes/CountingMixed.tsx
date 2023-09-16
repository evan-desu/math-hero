import { useEffect, useState } from "react";
import { mixedCount, checkAnswer } from "../MathFunctions";
import './CountingMixed.css'

const CountingMixed = () => {
    const [problem, setProblem] = useState<{ emojis: { symbol: string; name: string; }[], counts: { [key: string]: number } } | null>(null);
    const [problems, setProblems] = useState<{ emojis: {symbol: string; name: string; }[], counts: { [key: string]: number } }[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState <{ symbol: string; name: string } | null>(null);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        let newProblems = Array.from({length: 20}, () => mixedCount(4, 10, 15));
        setProblems(newProblems);
        let randomProblem = newProblems[Math.floor(Math.random() * newProblems.length)];
        setProblem(randomProblem);
        setCurrentQuestion(randomProblem.emojis[Math.floor(Math.random() * randomProblem.emojis.length)]);
        setIsLoading(false);
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if(problem && currentQuestion && checkAnswer(parseInt(userAnswer), problem.counts[currentQuestion.name])) {
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
        <main className="counting-mixed--quiz-container">
            {/* <h2>Counting Mixed Items</h2> */}
            {isLoading && <p>Loading...</p>}
            {!isFinished ? (
                <section className="question-container-mixed">
                    <p className="question-number-mixed">Question {questionNumber}</p>
                    <p className="question-text-mixed">How many {currentQuestion?.name} {currentQuestion?.symbol} are there?</p>
                    <div className="counting-items-mixed">
                        {problem && problem.emojis.map((emoji, index) => (
                            <span key={index}>{emoji.symbol}</span>
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
                <section className="score-container">
                    <p className="score-text">Your score: </p>
                    <p className="score-result">{score}/10</p>
                </section>
            )}
            
        </main>
    );
}
 
export default CountingMixed;