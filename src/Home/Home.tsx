import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    function handleGradeClick(grade: number) {
        navigate(`/grade${grade}`)
    }

    // try to set upn one function to handle all grades

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
                    <button className="grade-btn" onClick={() => handleGradeClick(1)}>Grade 1</button>
                    <button className="grade-btn" onClick={() => handleGradeClick(2)}>Grade 2</button>
                    <button className="grade-btn" onClick={() => handleGradeClick(3)}>Grade 3</button>
                    <button className="grade-btn" onClick={() => handleGradeClick(4)}>Grade 4</button>
                    <button className="grade-btn" onClick={() => handleGradeClick(5)}>Grade 5</button>
                    <button className="grade-btn" onClick={() => handleGradeClick(6)}>Grade 6</button>
                </div>
            </section>
        </main>
    );
}
 
export default Home;