import { useState } from "react";

const messages = [
	"Learn React ⚛️",
	"Apply for jobs 💼",
	"Invest your new income 🤑",
];

export default function App() {
	const [stepCount, setStepCount] = useState(1);

	const [isOpen, setIsOpen] = useState(true);

	function handlePrevious() {
		if (stepCount > 1) {
			// setStepCount(stepCount - 1);
			// setStepCount(stepCount - 1); // ukupno bi se smanjilo za 1 a ne za 2, zato je sigurnije callback func uvek za ove stvari
			setStepCount((curStep) => curStep - 1);
		}
	}

	function handleNext() {
		if (stepCount < 3) setStepCount((curStep) => curStep + 1);
	}

	return (
		<>
			<button
				className="close"
				onClick={() => setIsOpen((curIsOpen) => !curIsOpen)}
			>
				&times;
			</button>
			{isOpen && (
				<div className="steps">
					<div className="numbers">
						<div className={stepCount >= 1 ? "active" : ""}>1</div>
						<div className={stepCount >= 2 ? "active" : ""}>2</div>
						<div className={stepCount >= 3 ? "active" : ""}>3</div>
					</div>

					<p className="message">
						Step {stepCount}: {messages[stepCount - 1]}
					</p>

					<div className="buttons">
						<button
							style={{ backgroundColor: "#7950f2", color: "#fff" }}
							onClick={handlePrevious}
						>
							Previous
						</button>
						<button
							style={{ backgroundColor: "#7950f2", color: "#fff" }}
							onClick={handleNext}
						>
							Next
						</button>
					</div>
				</div>
			)}
		</>
	);
}
