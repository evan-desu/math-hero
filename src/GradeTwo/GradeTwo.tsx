import { useNavigate } from 'react-router-dom'
import './GradeTwo.css'

const GradeTwo = () => {
    const navigate = useNavigate();

    function handleQuizClick(path: string) {
        navigate(`/${path}`)
    }
    return (
        <main className="grade-two-quiz-selection-container">
            <section className='grade-two-selection-text'>
                <h2>Welcome to Grade Two!</h2>
                <h2>Select a quiz:</h2>
                <div className='grade-two-quiz-button-container'>
                    <button className="grade-two-quiz-btn" onClick={() => handleQuizClick("add-to-20")}>
                        Addition <br className="desktop-break" />(To 20)
                    </button>
                    <button className="grade-two-quiz-btn" onClick={() => handleQuizClick("subtract-under-20")}>
                        Subtraction <br className="desktop-break" />(Under 20)
                    </button>
                    <button className="grade-two-quiz-btn" onClick={() => handleQuizClick("compare-numbers-100")}>
                        Comparisons <br className="desktop-break" />(To 100)
                    </button>
                    <button className="grade-two-quiz-btn" onClick={() => handleQuizClick("compare-numbers-300")}>
                        Comparisons <br className="desktop-break" />(To 300)
                    </button>
                </div>
            </section>
        </main>
    );
}
 
export default GradeTwo;