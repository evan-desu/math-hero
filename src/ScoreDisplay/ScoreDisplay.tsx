import "./ScoreDisplay.css"

type ScoreDisplayProps = {
    score: number;
    totalQuestions: number;
};

const ScoreDisplay = ({ score, totalQuestions }: ScoreDisplayProps) => {
    return (
        <section className="score-container">
            <p className="score-text">Your score:</p>
            <p className="score-result">{score}/{totalQuestions}</p>
        </section>
    );
};

export default ScoreDisplay;