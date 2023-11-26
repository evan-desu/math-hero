import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { checkAnswer, generateNumber } from "../../MathFunctions";
import ScoreDisplay from "../../ScoreDisplay/ScoreDisplay";
import './MultiplyBy.css';

const MultiplyBy = () => {
    const { multiplier } = useParams<{ multiplier: string }>();
    const multiplierNum = parseInt(multiplier ?? '0', 10);
    const { t } = useTranslation();
    
    const [problem, setProblem] = useState({ num1: multiplierNum, num2: 0, product: 0});
    const [userAnswer, setUserAnswer] = useState('');
    const [questionNumber, setQuestionNumber] = useState(1);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const num2 = generateNumber(10);
        setProblem({ num1: multiplierNum, num2: num2, product: multiplierNum * num2 });
        setIsLoading(false);
    }, [multiplier]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if(checkAnswer(parseInt(userAnswer), problem.product)) {
            setScore(score + 1);
        };

        if(questionNumber < 10) {
            setQuestionNumber(questionNumber + 1);
            const num2 = generateNumber(10);
            setProblem({ num1: multiplierNum, num2: num2, product: multiplierNum * num2 });
        } else {
            setIsFinished(true);
        }

        setUserAnswer('');
    }

    return (
        <main className={`multiply-by-container multiply-by-${multiplier}-container`}>
            {isLoading && <p>Loading...</p>}
            {!isFinished ? (
                <section className="multiply-by-question-container">
                    <p className="multiply-by-question-number">{t("quizText.question")} {questionNumber}</p>
                    <p className="multiply-by-problem-text">{problem.num1} x {problem.num2}</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="number"
                            placeholder="Answer"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                        />
                        <button type='submit'>{t("quizText.submit")}</button>
                    </form>
                </section>
            ) : (
                <ScoreDisplay score={score} totalQuestions={10}/>
            )}
        </main>
    )
}

export default MultiplyBy;