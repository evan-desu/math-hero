import { useNavigate } from 'react-router-dom'
import './GradeOne.css'

const GradeOne = () => {
    const navigate = useNavigate();

    function handleQuizClick(path: string) {
        navigate(`/${path}`)
    }

    return (
        <main className="quiz-select-selection">
            <section className="selection-text">
                <h2>Welcome to Grade One!</h2>
                <h2>Select a quiz:</h2>
                <div className="quiz-button-container">
                    <button onClick={() => handleQuizClick("count-single")} className="quiz-btn">Counting<br></br>(Single Item)</button>
                    <button onClick={() => handleQuizClick("count-mixed")}className="quiz-btn">Counting<br></br>(Mixed Items)</button>
                    <button onClick={() => handleQuizClick("add-to-20")} className="quiz-btn">Addition<br></br>(To 20)</button>
                    <button onClick={() => handleQuizClick("add-to-10")} className="quiz-btn">Addition<br></br>(To 10)</button>
                    <button onClick={() => handleQuizClick("subtract-under-10")} className="quiz-btn">Subtraction<br></br>(Under 10)</button>
                    <button onClick={() => handleQuizClick("subtract-under-20")} className="quiz-btn">Subtraction<br></br>(Under 20)</button>
                </div>
            </section>
        </main>
    );
}
 
export default GradeOne;