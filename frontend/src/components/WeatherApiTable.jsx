import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { titles } from '../utils/titles';
const WeatherApiTable = () => {
	const [weatherData, setWeatherData] = useState(titles);

	const [isCheckAllFields, setIsCheckAllFields] = useState(false);
	// const [isCheck, setIsCheck] = useState([]);
	const [checkedFields, setCheckedFields] = useState([]);
	console.log("🚀 ~ file: WeatherApiTable.jsx ~ line 10 ~ WeatherApiTable ~ checkedFields", checkedFields)

	// checkbox change
	// const handleOnChange = (title) => {

	// 	const updatedCheckedState = weatherData.filter((item) =>
	// 		title === item.title ? title : ''
	// 	);
	// 	setCheckedFields(updatedCheckedState);
	// };

	const handleSelectAll = (e) => {
		setIsCheckAllFields(!isCheckAllFields);
		setCheckedFields(weatherData.map((item) => item.title));
		if (isCheckAllFields) {
			setCheckedFields([]);
		}
	};

	const handleClick = (e) => {
		const { id, checked } = e.target;
		console.log("🚀 ~ file: WeatherApiTable.jsx ~ line 31 ~ handleClick ~ e.target", e.target)
		setCheckedFields([...checkedFields, id]);
		if (!checked) {
			setCheckedFields(checkedFields.filter((item) => item !== id));
		}
	};

	// useEffect(() => {
	// 	axios.get('http://localhost:5000/api/weather').then((response) => {
	// 		console.log(response?.data);
	// 		setWeatherData(response?.data[0]);
	// 	});
	// }, []);

	// const handleOnChange = (position) => {
	// 	const updatedCheckedState
	// }
	return (
		<div className=" flex flex-col justify-center mx-auto">
			<h3 className="mb-4 mx-auto font-semibold text-gray-900 dark:text-white">
				Weather Apis
			</h3>

			<form action="" className="w-4xl">
				{/* search box */}
				<input
					type="text"
					placeholder=" Search a town"
					className=" my-3 max-w-4xl flex text-2xl justify-center mx-auto border-2 border-gray-300 bg-gray-100"
				/>
				<table className="max-w-5xl w-full mx-auto ">
					<thead className="w-full text-xl border-2 border-zinc-300 ">
						<tr className="capitalize">
							<td className="pl-5 inline-flex">
								{/* Select all input */}
								<input
									type="checkbox"
									className="w-6 h-6 my-auto "
									onClick={handleSelectAll}
								/>
								<label htmlFor="" className="ml-2">
									{' '}
									Select All{' '}
								</label>
							</td>
							<td>titles</td>
							<td>values</td>
						</tr>
					</thead>
					<tbody className="w-full text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
						{weatherData.map((title, index) => (
							<tr
								key={index}
								className="w-full  rounded-t-lg border-b border-gray-200 dark:border-gray-600"
							>
								{/* <div className="flex items-center pl-3"> */}
								<td>
									<input
										type="checkbox"
										name={title.title}
										value={title.title}
										id={title.title}
										checked={checkedFields[index]}
										onClick={(e) =>
											handleClick(e)
										}
									/>
								</td>
								<td>
									<label
										htmlFor="vue-checkbox"
										className="py-3 ml-5 capitalize w-full text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										{title.title}
									</label>
								</td>
								{/* <td>
									<label
										htmlFor="vue-checkbox"
										className="py-3 ml-5 w-full  text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										
									</label>
								</td> */}
								{/* </div> */}
							</tr>
						))}
					</tbody>
				</table>

				<button
					type="submit"
					className="bg-black my-3 w-2xl text-white mx-auto flex justify-center"
				>
					Submit
				</button>
			</form>
		</div>
	);
};
export default WeatherApiTable;
