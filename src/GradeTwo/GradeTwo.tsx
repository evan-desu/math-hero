import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './GradeTwo.css'

const GradeTwo = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    function handleQuizClick(path: string) {
        navigate(`/${path}`)
    }
    return (
        <main className="grade-two-quiz-selection-container">
            <section className='grade-two-selection-text'>
                <h2>{t("gradeTwo.welcome")}</h2>
                <h2>{t("gradeTwo.select_quiz")}</h2>
                <div className='grade-two-quiz-button-container'>
                    <h3>{t("gradeTwo.addition")}</h3>
                    <button className="grade-two-quiz-btn" onClick={() => handleQuizClick("add-to-20")}>
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
                </div>
            </section>
        </main>
    );
}
 
export default GradeTwo;