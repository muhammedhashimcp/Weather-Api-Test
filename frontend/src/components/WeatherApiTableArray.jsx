import React, { useEffect, useState } from 'react';
import { data, titles } from '../titles';
import axios from 'axios'
const WeatherApiTable = () => {
	const [weatherData,setWeatherData]=useState({})
	useEffect(() => {
		axios.get('http://localhost:5000/api/weather').then((response) => {
			console.log(response?.data);
			setWeatherData(response?.data[0])
		})
	},[])
	return (
		<div className=" flex flex-col justify-center mx-auto">
			<h3 className="mb-4 mx-auto font-semibold text-gray-900 dark:text-white">
				Weather Apis
			</h3>

			<form action="" className="w-4xl">
				<input
					type="text"
					placeholder=" Search a town"
					className=" my-3 max-w-4xl flex text-2xl justify-center mx-auto border-2 border-gray-300 bg-gray-100"
				/>
				<table className="max-w-5xl w-full mx-auto ">
					<thead className="w-full text-xl border-2 border-zinc-300 ">
						<tr className="capitalize">
							<td className="pl-5 inline-flex">
								<input
									type="checkbox"
									className="w-6 h-6 my-auto "
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
						{/* {Object.entries(weatherData).map(([key,value],index) => ( */}
						{/* // {Object.entries(weatherData).map(([key,value],index) => ( */}
						{data.map((title, index) => (
							<tr
								key={index}
								className="w-full  rounded-t-lg border-b border-gray-200 dark:border-gray-600"
							>
								{/* <div className="flex items-center pl-3"> */}
								<td>
									<input
										id="vue-checkbox"
										type="checkbox"
										value=""
										className="w-4 h-4 ml-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
									/>
								</td>
								<td>
									<label
										htmlFor="vue-checkbox"
										className="py-3 ml-5 capitalize w-full text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										{title}
									</label>
								</td>
								<td>
									<label
										htmlFor="vue-checkbox"
										className="py-3 ml-5 w-full  text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										{/* {value} */}
										{title}
									</label>
								</td>
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
