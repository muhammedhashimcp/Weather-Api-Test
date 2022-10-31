import React from 'react'

const TableRow = () => {
  return (
		<tr key={id} className="rounded-t-lg border-b border-gray-200 ">
			{!showData && (
				<td className="flex  justify-center my-2 ">
					<CheckboxItem
						key={title}
						type="checkbox"
						name={title}
						id={title}
						handleClick={handleClick}
						isChecked={checkedFields.includes(title)}
					/>
				</td>
			)}
			<td className="ml-5  ">
				<h3>{title}</h3>
			</td>
			{showData && (
				<td className="ml-5  ">
					<h3>{value}</h3>
				</td>
			)}
		</tr>
  );
}

export default TableRow
