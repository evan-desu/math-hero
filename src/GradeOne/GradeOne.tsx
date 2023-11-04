import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import './GradeOne.css'

const GradeOne = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    function handleQuizClick(path: string) {
        navigate(`/${path}`)
    }

    return (
        <main className="quiz-selection-container">
            <section className="selection-text">
                <h2>Welcome to Grade One!</h2>
                <h2>{t("select_quiz")}</h2>
                <div className="quiz-button-container">
                <h3>{t("counting")}</h3>
                    <button id="counting-single-item" className="quiz-btn" onClick={() => handleQuizClick("count-single")}>
                        {/* Counting <br className="desktop-break" />(Level 1) */}
                        Single Items
                    </button>
                    <button id="counting-mixed-items" className="quiz-btn" onClick={() => handleQuizClick("count-mixed")}>
                        {/* Counting <br className="desktop-break" />(Level 2) */}
                        Mixed Items
                    </button>
                    <h3>{t("addition")}</h3>
                    <button id="addition-to-ten" className="quiz-btn" onClick={() => handleQuizClick("add-to-10")}>
                        {/* Addition <br className="desktop-break" />(Level 1) */}
                        Sum to 10
                    </button>
                    <button id="addition-to-twenty" className="quiz-btn" onClick={() => handleQuizClick("add-to-20")}>
                        {/* Addition <br className="desktop-break" />(Level 3) */}
                        Sum to 20
                    </button>
                    <button id="addition-by-ten" className="quiz-btn" onClick={() => handleQuizClick("add-by-10")}>
                        {/* Addition <br className="desktop-break" />(Level 2) */}
                        Adding 10
                    </button>
                    <button id="addition-three" className="quiz-btn" onClick={() => handleQuizClick("add-three")}>
                        {/* Addition <br className="desktop-break" />(Level 4) */}
                        Add 3 Numbers
                    </button>
                    <h3>{t("subtraction")}</h3>
                    <button id="subtraction-from-ten" className="quiz-btn" onClick={() => handleQuizClick("subtract-under-10")}>
                        {/* Subtraction <br className="desktop-break" />(Level 1) */}
                        Difference Under 10
                    </button>
                    <button id="subtraction-from-twenty" className="quiz-btn" onClick={() => handleQuizClick("subtract-under-20")}>
                        {/* Subtraction <br className="desktop-break" />(Level 4) */}
                        Difference Under 20
                    </button>
                    <button id="subtraction-ten" className="quiz-btn" onClick={() => handleQuizClick("subtract-10")}>
                        {/* Subtraction <br className="desktop-break" />(Level 2) */}
                        Subtracting 10
                    </button>
                    <button id="subtraction-three-nums" className="quiz-btn" onClick={() => handleQuizClick("subtract-three")}>
                        {/* Subtraction <br className="desktop-break" />(Level 3) */}
                        Subtract 3 Numbers
                    </button>
                </div>
            </section>
        </main>
    );
}
 
export default GradeOne;