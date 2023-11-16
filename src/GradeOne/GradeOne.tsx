import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import './GradeOne.css';

const GradeOne = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    function handleQuizClick(addend: string) {
        navigate(`/add-by/${addend}`);
    }

    return (
        <main className="quiz-selection-container">
            <section className="selection-text">
                <h2>{t("gradeOne.welcome")}</h2>
                <h2>{t("gradeOne.select_quiz")}</h2>
                <div className="quiz-button-container">
                <h3>{t("gradeOne.counting")}</h3>
                    <button id="counting-single-item" className="quiz-btn" onClick={() => handleQuizClick("count-single")}>
                        {t("gradeOne.single_item")}
                    </button>
                    <button id="counting-mixed-items" className="quiz-btn" onClick={() => handleQuizClick("count-mixed")}>
                        {t("gradeOne.mixed_items")}
                    </button>
                    <h3>{t("gradeOne.addition")}</h3>
                    <button id="addition-to-ten" className="quiz-btn" onClick={() => handleQuizClick("add-to-10")}>
                        {t("gradeOne.sum_to_ten")}
                    </button>
                    <button id="addition-to-twenty" className="quiz-btn" onClick={() => handleQuizClick("add-to-20")}>
                        {t("gradeOne.sum_to_twenty")}
                    </button>
                    <button id="addition-by-one" className="quiz-btn" onClick={() => handleQuizClick("1")}>
                        {t("gradeOne.adding_one")}
                    </button>
                    <button id="addition-by-two" className="quiz-btn" onClick={() => handleQuizClick("2")}>
                        {t("gradeOne.adding_two")}
                    </button>
                    <button id="addition-by-three" className="quiz-btn" onClick={() => handleQuizClick("3")}>
                        {t("gradeOne.adding_three")}
                    </button>
                    <button id="addition-by-four" className="quiz-btn" onClick={() => handleQuizClick("4")}>
                        {t("gradeOne.adding_four")}
                    </button>
                    <button id="addition-by-five" className="quiz-btn" onClick={() => handleQuizClick("5")}>
                        {t("gradeOne.adding_five")}
                    </button>
                    <button id="addition-by-ten" className="quiz-btn" onClick={() => handleQuizClick("10")}>
                        {t("gradeOne.adding_ten")}
                    </button>
                    <button id="addition-three" className="quiz-btn" onClick={() => handleQuizClick("add-three")}>
                        {t("gradeOne.add_three_numbers")}
                    </button>
                    <h3>{t("gradeOne.subtraction")}</h3>
                    <button id="subtraction-from-ten" className="quiz-btn" onClick={() => handleQuizClick("subtract-under-10")}>
                        {t("gradeOne.difference_under_ten")}
                    </button>
                    <button id="subtraction-from-twenty" className="quiz-btn" onClick={() => handleQuizClick("subtract-under-20")}>
                        {t("gradeOne.difference_under_twenty")}
                    </button>
                    <button id="subtraction-ten" className="quiz-btn" onClick={() => handleQuizClick("subtract-10")}>
                        {t("gradeOne.subtracting_ten")}
                    </button>
                    <button id="subtraction-three-nums" className="quiz-btn" onClick={() => handleQuizClick("subtract-three")}>
                        {t("gradeOne.subtract_three_numbers")}
                    </button>
                </div>
            </section>
        </main>
    );
}
 
export default GradeOne;