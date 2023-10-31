import { useEffect, useState } from "react";
import { subtract, checkAnswer } from "../../MathFunctions";
import './SubtractionTwenty.css'

const SubtractionTwenty = () => {
    const [problem, setProblem] = useState({ num1: 0, num2: 0, difference: 0 })
    const [questionNumber, setQuestionNumber] = useState(1)
    const [userAnswer, setUserAnswer] = useState('')
    const [score, setScore] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [isFinished, setIsFinished] = useState(false)

    useEffect(() => {
        setProblem(subtract(20))
        setIsLoading(false)
    }, [])

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        
        if(checkAnswer(parseInt(userAnswer), problem.difference)) {
            setScore(score + 1)
        }
        if(questionNumber < 10) {
            setQuestionNumber(questionNumber + 1)
            setProblem(subtract(20))
        } else {
            setIsFinished(true)
        }
        setUserAnswer('')
    }

    return (
        <main className="subtract-twenty-container">
            {isLoading && <p>Loading...</p>}
            {!isFinished ? (
                <section className="subtract-ten-question-container">
                    <p className="subtract-ten-question-number">Question: {questionNumber}</p>
                    <p className="subtract-ten-problem-text">{problem.num1} - {problem.num2}</p>
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
                <section  className="subtract-ten-score-container">
                    <p className="subtract-ten-score-text">Your score:</p>
                    <p className="subtract-ten-score-result">{score}/10</p>
                </section>
            )}
        </main>
    );
}
 
export default SubtractionTwenty;