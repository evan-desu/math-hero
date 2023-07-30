import { useNavigate } from 'react-router-dom'
import { generateNumber, generateEmoji } from '../MathFunctions'
import './GradeOne.css'

type QuestionProps = {
    generateNumber: number
    generateEmoji: string[]
}

const GradeOne = () => {
    const navigate = useNavigate();

    function handleQuizClick(verb: string, prep: string, limit: number) {
        navigate(`/${verb}-${prep}-${limit}`)
    }

    const num1 = generateNumber();
    const num2 = generateNumber(500);
    const emoji = generateEmoji();

    return (
        <main>
            <h2>You're in Grade One!</h2>
            <p>{num1}, {num2}</p>
            <p>Count the {emoji[0]}.</p>
            <section className="quiz-select-selection">
                <h2>Select a quiz:</h2>
                <div className="quiz-button-container">
                    <button className="quiz-btn">Counting<br></br>to 10</button>
                    <button onClick={() => handleQuizClick("add", "to", 10)} className="quiz-btn">Addition<br></br>to 10</button>
                    <button className="quiz-btn">Subtraction<br></br>under 10</button>
                    <button className="quiz-btn">Counting<br></br>to 20</button>
                    <button className="quiz-btn">Addition<br></br>to 20</button>
                    <button className="quiz-btn">Subtraction<br></br>under 20</button>
                </div>
            </section>
        </main>
    );
}
 
export default GradeOne;