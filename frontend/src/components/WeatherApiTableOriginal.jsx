import React from 'react';

const WeatherApiTable = () => {
	return (
		<div className="">
			<h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
				Technology
			</h3>
			<ul class="w-48 text-sm font-medium flex justify-center text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
				<li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
					<div class="flex items-center pl-3">
						<input
							id="vue-checkbox"
							type="checkbox"
							value=""
							class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
						/>
						<label
							for="vue-checkbox"
							class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Vue JS
						</label>
						<p
						
							class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Vue JS
						</p>
					</div>
				</li>
				{/* <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="react-checkbox" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">React</label>
        </div>
    </li>
    <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="angular-checkbox" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Angular</label>
        </div>
    </li>
    <li class="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="laravel-checkbox" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Laravel</label>
        </div>
    </li> */}
			</ul>
		</div>
	);
};

export default WeatherApiTable;
