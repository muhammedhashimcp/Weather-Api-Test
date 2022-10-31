import React, { useEffect, useState } from 'react';
import CheckboxItem from './CheckboxItem';
import { toast } from 'react-toastify';
import axios from 'axios';
//  import { Formik, Form, Field } from 'formik';
//  import * as Yup from 'yup';
import { titles } from './fields';
const WeatherApi = () => {
	const [query, setQuery] = useState('');
	const [showData, setShowData] = useState(false);
	const [isCheckAll, setIsCheckAll] = useState(false);
	const [checkedFields, setCheckedFields] = useState([]);
	const [weatherData, setWeatherData] = useState([]);
	console.log(
		'🚀 ~ file: WeatherApi.jsx ~ line 13 ~ WeatherApi ~ weatherData',
		weatherData
	);

	useEffect(() => {
		setWeatherData(titles);
	}, [weatherData]);

	const handleSelectAll = () => {
		setIsCheckAll(!isCheckAll);
		setCheckedFields(weatherData.map((li) => li.title));
		if (isCheckAll) {
			setCheckedFields([]);
		}
	};

	const handleClick = (e) => {
		if (checkedFields.length + 1 === titles.length) {
			handleSelectAll();
		} else {
			setIsCheckAll(false);
		}
		const { id, checked } = e.target;
		setCheckedFields([...checkedFields, id]);
		if (!checked) {
			setCheckedFields(checkedFields.filter((item) => item !== id));
		}
	};

	const handleChange = (value) => {
		setQuery(value.toLowerCase());
		// Function to check letters and numbers
		// let letter = /^[a-zA-Z]+$/;
		// if ((value.match(letter))) {
		// 	setQuery(value.toLowerCase());
		// } else {
		// 	toast.error('City never contain a number');
		// 	return;
		// }
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (query === '') {
			toast.error('Please add a town name ');
		} else if (checkedFields.length === 0) {
			toast.error('Please a select at least one field');
		} else {
			setShowData(true)
			axios.get('http://localhost:5000/api/weather').then((response) => {
				console.log(response?.data);
				setWeatherData(response?.data[0]);
			});
		}
	};
	return (
		<div className=" flex w-full flex-col text-xl justify-center mx-auto">
			<h3 className="mb-4 mx-auto font-semibold text-gray-900 dark:text-white">
				Weather APP
			</h3>
			{/* search box */}
			{/* <Formik initialValues={{ items: [] }} validate={validate}> */}
			<form action="" onSubmit={handleSubmit}>
				<input
					value={query}
					onChange={(e) => handleChange(e.target.value)}
					type="text"
					placeholder=" Search a town"
					className=" my-3 max-w-4xl flex text-2xl justify-center mx-auto border-2 border-gray-300 bg-gray-100"
				/>
				<table className=" w-full  max-w-4xl  mx-auto ">
					<thead className="w-full text-xl text-red-600 font-bold border-2 border-zinc-300 ">
						<tr className="capitalize">
							{!showData && (
								<td className="pl-5 inline-flex ">
									{/* Select all input */}
									<div className="text-gray-700 ">
										<CheckboxItem
											type="checkbox"
											name="selectAll"
											id="selectAll"
											handleClick={handleSelectAll}
											isChecked={isCheckAll}
										/>
									</div>
									<span className="ml-2">Select All</span>
								</td>
							)}
							<td className="min-w-md">titles</td>
							{showData && <td>values</td>}
						</tr>
					</thead>
					<tbody className="w-full text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
						{!showData?(weatherData.map(({ title, id }) => (

							<tr
								key={id}
								className="rounded-t-lg border-b border-gray-200 "
							>
								{
									<td className="flex  justify-center my-2 ">
										<CheckboxItem
											key={title}
											type="checkbox"
											name={title}
											id={title}
											handleClick={handleClick}
											isChecked={checkedFields.includes(
												title
											)}
										/>
									</td>
								}
								<td className="ml-5  ">
									<h3>{title}</h3>
								</td>
								{showData && (
									<td className="ml-5  ">
										{/* <h3>{value}</h3> */}
									</td>
								)}
							</tr>
						)):(
					Object.entries(weatherData).map((key,value) => (

							<tr
								key={key}
								className="rounded-t-lg border-b border-gray-200 "
							>
								
								<td className="ml-5  ">
									<h3>{key}</h3>
									<h3>{value}</h3>
								</td>
								{showData && (
									<td className="ml-5  ">
										{/* <h3>{value}</h3> */}
									</td>
								)}
							</tr>
						)
						</>)}
						
					</tbody>
				</table>
				<button
					type="submit"
					className="bg-black my-3 w-2xl text-white mx-auto flex justify-center"
				>
					Submit
				</button>
			</form>
			{/* </Formik> */}
		</div>
	);
};

export default WeatherApi;
