import { useTranslation } from 'react-i18next';
import "./ScoreDisplay.css"

type ScoreDisplayProps = {
    score: number;
    totalQuestions: number;
};

const ScoreDisplay = ({ score, totalQuestions }: ScoreDisplayProps) => {
    const { t } = useTranslation();
    return (
        <section className="score-container">
            <p className="score-text">{t("scoreDisplay.your_score")}</p>
            <p className="score-result">{score}/{totalQuestions}</p>
        </section>
    );
};

export default ScoreDisplay;