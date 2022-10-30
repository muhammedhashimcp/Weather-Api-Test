import { useState } from 'react';
import { toppings } from '../utils/toppings';

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

export default function MultipleCheckbox() {
	const [checkedState, setCheckedState] = useState(
		new Array(toppings.length).fill(false)
	);

	const [total, setTotal] = useState(0);

	const handleOnChange = (position) => {
		const updatedCheckedState = checkedState.map((item, index) =>
			index === position ? !item : item
		);
		setCheckedState(updatedCheckedState);
		console.log("🚀 ~ file: MutipleCheckbox.jsx ~ line 19 ~ handleOnChange ~ updatedCheckedState", updatedCheckedState)

		const totalPrice = updatedCheckedState.reduce(
			(sum, currentState, index) => {
				if (currentState === true) {
					return sum + toppings[index].price;
				}
				return sum;
			},
			0
		);

		setTotal(totalPrice);
	};

	return (
		<div className="App">
			<h3>Select Toppings</h3>
			<ul className="toppings-list">
				{toppings.map(({ name, price }, index) => {
					return (
						<li key={index}>
							<div className="toppings-list-item">
								<div className="left-section">
									<input
										type="checkbox"
										id={`custom-checkbox-${index}`}
										name={name}
										value={name}
										checked={checkedState[index]}
										onChange={() => handleOnChange(index)}
									/>
									<label htmlFor={`custom-checkbox-${index}`}>
										{name}
									</label>
								</div>
								<div className="right-section">
									{getFormattedPrice(price)}
								</div>
							</div>
						</li>
					);
				})}
				<li>
					<div className="toppings-list-item">
						<div className="left-section">Total:</div>
						<div className="right-section">
							{getFormattedPrice(total)}
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}
