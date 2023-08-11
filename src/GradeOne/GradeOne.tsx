import { useNavigate } from 'react-router-dom'
import './GradeOne.css'

const GradeOne = () => {
    const navigate = useNavigate();

    function handleQuizClick(path: string) {
        navigate(`/${path}`)
    }

    return (
        <main>
            <h2>You're in Grade One!</h2>
            <section className="quiz-select-selection">
                <h2>Select a quiz:</h2>
                <div className="quiz-button-container">
                    <button onClick={() => handleQuizClick("count-to-10")} className="quiz-btn">Counting<br></br>to 10</button>
                    <button onClick={() => handleQuizClick("add-to-10")} className="quiz-btn">Addition<br></br>to 10</button>
                    <button onClick={() => handleQuizClick("subtract-under-10")} className="quiz-btn">Subtraction<br></br>under 10</button>
                    <button onClick={() => handleQuizClick("count-to-20")}className="quiz-btn">Counting<br></br>to 20</button>
                    <button onClick={() => handleQuizClick("add-to-20")} className="quiz-btn">Addition<br></br>to 20</button>
                    <button onClick={() => handleQuizClick("subtract-under-20")} className="quiz-btn">Subtraction<br></br>under 20</button>
                </div>
            </section>
        </main>
    );
}
 
export default GradeOne;