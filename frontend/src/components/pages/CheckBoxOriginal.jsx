import React, { useState, useEffect } from 'react';
import { titles } from '../utils/titles';
import CheckboxItem from './CheckboxItem';
const CheckBox = () => {
	const [isCheckAll, setIsCheckAll] = useState(false);
	const [isCheck, setIsCheck] = useState([]);
	const [list, setList] = useState([]);

	useEffect(() => {
		setList(titles);
	}, [list]);
	
	const handleSelectAll = (e) => {
		setIsCheckAll(!isCheckAll);
		setIsCheck(list.map((li) => li.title));
		if (isCheckAll) {
			setIsCheck([]);
		}
	};

	const handleClick = (e) => {
		const { id, checked } = e.target;
		setIsCheck([...isCheck, id]);
		if (!checked) {
			setIsCheck(isCheck.filter((item) => item !== id));
		}
	};

	console.log(isCheck);

	const Fields = list.map(({ title }) => {
		return (
			<>
				<CheckboxItem
					key={title}
					type="checkbox"
					name={title}
					id={title}
					handleClick={handleClick}
					isChecked={isCheck.includes(title)}
				/>
				{title}
			</>
		);
	});

	return (
		<div>
			<CheckboxItem
				type="checkbox"
				name="selectAll"
				id="selectAll"
				handleClick={handleSelectAll}
				isChecked={isCheckAll}
			/>
			Select All
			{Fields}
		</div>
	);
};
export default CheckBox