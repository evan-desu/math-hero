import { useState } from "react";
import { compareTwoNumbers } from "../MathFunctions";
import './CompareNumbers.css'

const CompareNumbers = () => {
    // const [problem, setProblem] = useState({ num1: 0, num2: 0, correctAnswer: '' });
    // const [userAnswer, setUserAnswer] = useState('');
    // const [questionNumber, setQuestionNumber] = useState(1);
    // const [score, setScore] = useState(0);
    // const [isLoading, setIsLoading] = useState(true);
    // const [isFinished, setIsFinished] = useState(false);

    return (
        <main>
            <h1>Compare Two Numbers</h1>
            <div className="question-container">
                <p>Questions 1</p>
                <div className="comparison-container">
                    <p>34</p>
                    <section className="answer-choice-container">
                        <button>{`<`}</button>
                        <button>{`=`}</button>
                        <button>{`>`}</button>
                    </section>
                    <p>32</p>
                </div>
            </div>
        </main>
    )
}

export default CompareNumbers;