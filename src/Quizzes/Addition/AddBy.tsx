import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { checkAnswer, generateNumber } from '../../MathFunctions';
import ScoreDisplay from '../../ScoreDisplay/ScoreDisplay';
import './AddBy.css';

const AddBy = () => {
    const { addend } = useParams<{ addend: string }>();
    const addendNum = parseInt(addend ?? 'O', 10);
    const { t } = useTranslation();

    const [problem, setProblem] = useState({ num1: 0, num2: addendNum, sum: 0 });
    const [userAnswer, setUserAnswer] = useState('');
    const [questionNumber, setQuestionNumber] = useState(1);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const num1 = generateNumber(10);
        setProblem({ num1: num1, num2: addendNum, sum: num1 + addendNum });
        setIsLoading(false);
    }, [addend]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if(checkAnswer(parseInt(userAnswer), problem.sum)) {
            setScore(score + 1);
        }

        if(questionNumber < 10) {
            setQuestionNumber(questionNumber + 1);
            const num1 = generateNumber(10);
            setProblem({ num1: num1, num2: addendNum, sum: num1 + addendNum });
        } else {
            setIsFinished(true);
        }

        setUserAnswer('');
    }

    return (
        <main className={`add-by-container add-by-${addend}-container`}>
            {isLoading && <p>Loading...</p>}
            {!isFinished ? (
                <section className="add-by-question-container">
                    <p className="add-by-question-number">{t("quizText.question")} {questionNumber}</p>
                    <p className="add-by-problem-text">{problem.num1} + {problem.num2}</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='number'
                            placeholder='Answer'
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
    );
};
 
export default AddBy;