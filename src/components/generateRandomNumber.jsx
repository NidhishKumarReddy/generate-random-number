import "../styles/generateRandomNumber.css";
import { useState } from "react";

function GenerateRandomNumber() {
    const [minEnteredValue, setMinEnteredValue] = useState(0);
    const [maxEnteredValue, setMaxEnteredValue] = useState(10);
    const [generatedRandomNumber, setGeneratedRandomNumber] = useState(null);

    function minHandler(e) {
        setMinEnteredValue(Number(e.target.value));
    }

    function maxHandler(e) {
        setMaxEnteredValue(Number(e.target.value));
    }

    function generateRandomNumberHandler() {
        setGeneratedRandomNumber(
            Math.floor(
                Math.random() * (maxEnteredValue + 1 - minEnteredValue) +
                    minEnteredValue
            )
        );
    }

    return (
        <div className="main">
            <div className="input">
                <label>Minimum Limit :: </label>
                <input
                    type="number"
                    value={minEnteredValue}
                    onChange={minHandler}
                />
            </div>
            <div className="input">
                <label>Maximum Limit :: </label>
                <input
                    type="number"
                    value={maxEnteredValue}
                    onChange={maxHandler}
                />
            </div>
            <div className="generate-random-number-btn">
                <button onClick={generateRandomNumberHandler}>
                    Generate Random Number
                </button>
            </div>
            <div className="generated-random-number">
                {generatedRandomNumber}
            </div>
        </div>
    );
}

export default GenerateRandomNumber;
