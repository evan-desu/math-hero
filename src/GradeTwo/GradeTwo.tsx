import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './GradeTwo.css'

const GradeTwo = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    function handleQuizClick(path: string) {
        navigate(`/${path}`)
    }

    function handleAddClick(sumLimit: string) {
        navigate(`/add-to/${sumLimit}`);
    }

    function handleMultiplyByQuizClick(multiplier: string) {
        navigate(`/multiply-by/${multiplier}`);
    }

    return (
        <main className="grade-two-quiz-selection-container">
            <section className='grade-two-selection-text'>
                <h2>{t("gradeTwo.welcome")}</h2>
                <h2>{t("gradeTwo.select_quiz")}</h2>
                <div className='grade-two-quiz-button-container'>
                    <h3>{t("gradeTwo.addition")}</h3>
                    <button className="grade-two-quiz-btn" onClick={() => handleAddClick("20")}>
                        {t("gradeTwo.sum_to_twenty")}
                    </button>
                    <h3>{t("gradeTwo.subtraction")}</h3>
                    <button className="grade-two-quiz-btn" onClick={() => handleQuizClick("subtract-under-20")}>
                        {t("gradeTwo.difference_under_twenty")}
                    </button>
                    <h3>{t("gradeTwo.comparisons")}</h3>
                    <button className="grade-two-quiz-btn" onClick={() => handleQuizClick("compare-numbers-100")}>
                        {t("gradeTwo.compare_under_100")}
                    </button>
                    <button className="grade-two-quiz-btn" onClick={() => handleQuizClick("compare-numbers-300")}>
                        {t("gradeTwo.compare_under_300")}
                    </button>
                    <h3>{t("gradeTwo.multiplication")}</h3>
                    <button id="multiply-by-one" className="quiz-btn" onClick={() => handleMultiplyByQuizClick("1")}>
                        {t("gradeTwo.multiply_by_one")}
                    </button>
                    <button id="multiply-by-two" className="quiz-btn" onClick={() => handleMultiplyByQuizClick("2")}>
                        {t("gradeTwo.multiply_by_two")}
                    </button>
                    <button id="multiply-by-three" className="quiz-btn" onClick={() => handleMultiplyByQuizClick("3")}>
                        {t("gradeTwo.multiply_by_three")}
                    </button>
                    <button id="multiply-by-four" className="quiz-btn" onClick={() => handleMultiplyByQuizClick("4")}>
                        {t("gradeTwo.multiply_by_four")}
                    </button>
                    <button id="multiply-by-five" className="quiz-btn" onClick={() => handleMultiplyByQuizClick("5")}>
                        {t("gradeTwo.multiply_by_five")}
                    </button>
                </div>
            </section>
        </main>
    );
}
 
export default GradeTwo;