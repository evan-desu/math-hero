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
                    <button id="counting-single-item" className="quiz-btn" onClick={() => handleQuizClick("count-single")}>
                        Counting <br className="desktop-break" />(Level 1)
                    </button>
                    <button id="counting-mixed-items" className="quiz-btn" onClick={() => handleQuizClick("count-mixed")}>
                        Counting <br className="desktop-break" />(Level 2)
                    </button>
                    <button id="addition-to-ten" className="quiz-btn" onClick={() => handleQuizClick("add-to-10")}>
                        Addition <br className="desktop-break" />(Level 1)
                    </button>
                    <button id="addition-by-ten" className="quiz-btn" onClick={() => handleQuizClick("add-by-10")}>
                        Addition <br className="desktop-break" />(Level 2)
                    </button>
                    <button id="addition-to-twenty" className="quiz-btn" onClick={() => handleQuizClick("add-to-20")}>
                        Addition <br className="desktop-break" />(Level 3)
                    </button>
                    <button id="addition-three" className="quiz-btn" onClick={() => handleQuizClick("add-three")}>
                        Addition <br className="desktop-break" />(Level 4)
                    </button>
                    <button id="subtraction-from-ten" className="quiz-btn" onClick={() => handleQuizClick("subtract-under-10")}>
                        Subtraction <br className="desktop-break" />(Level 1)
                    </button>
                    <button id="subtraction-from-twenty" className="quiz-btn" onClick={() => handleQuizClick("subtract-under-20")}>
                        Subtraction <br className="desktop-break" />(Level 2)
                    </button>
                </div>
            </section>
        </main>
    );
}
 
export default GradeOne;