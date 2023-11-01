import './Home.css'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    function handleGradeClick(grade: number) {
        navigate(`/grade${grade}`);
    };
    
    return (
        <main className="home-container">
            <section className="home-intro-container">
                <h2 className="home-welcome">Welcome to</h2>
                <h1 className="home-title">Math Hero</h1>
                <h2 className="home-intro">The app to help children
                    <br></br>improve their math skills!
                </h2>
            </section>
            <section className="home-grade-selection">
                <h2>Select your elementary school grade:</h2>
                <div className="home-button-container">
                    <button className="grade-btn" onClick={() => handleGradeClick(1)}>{t('grade_one')}</button>
                    <button className="grade-btn" onClick={() => handleGradeClick(2)}>{t('grade_two')}</button>
                    <button className="grade-btn" onClick={() => handleGradeClick(3)}>{t('grade_three')}</button>
                    <button className="grade-btn" onClick={() => handleGradeClick(4)}>{t('grade_four')}</button>
                    <button className="grade-btn" onClick={() => handleGradeClick(5)}>{t('grade_five')}</button>
                    <button className="grade-btn" onClick={() => handleGradeClick(6)}>{t('grade_six')}</button>
                </div>
            </section>
        </main>
    );
}
 
export default Home;