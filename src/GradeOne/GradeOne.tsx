import { useNavigate } from 'react-router-dom'
import './GradeOne.css'

const GradeOne = () => {
    const navigate = useNavigate();

    function handleQuizClick(path: string) {
        navigate(`/${path}`)
    }

    return (
        <main className="quiz-selection-container">
            <section className="selection-text">
                <h2>Welcome to Grade One!</h2>
                <h2>Select a quiz:</h2>
                <div className="quiz-button-container">
                    <button className="quiz-btn" onClick={() => handleQuizClick("count-single")}>
                        Counting <br className="desktop-break" />(Single Item)
                    </button>
                    <button className="quiz-btn" onClick={() => handleQuizClick("count-mixed")}>
                        Counting <br className="desktop-break" />(Mixed Items)
                    </button>
                    <button className="quiz-btn" onClick={() => handleQuizClick("add-to-20")}>
                        Addition <br className="desktop-break" />(To 20)
                    </button>
                    <button className="quiz-btn" onClick={() => handleQuizClick("add-to-10")}>
                        Addition <br className="desktop-break" />(To 10)
                    </button>
                    <button className="quiz-btn" onClick={() => handleQuizClick("subtract-under-10")}>
                        Subtraction <br className="desktop-break" />(Under 10)
                    </button>
                    <button className="quiz-btn" onClick={() => handleQuizClick("subtract-under-20")}>
                        Subtraction <br className="desktop-break" />(Under 20)
                    </button>
                </div>
            </section>
        </main>
    );
}
 
export default GradeOne;