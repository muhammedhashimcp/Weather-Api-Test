
// Object.keys Object.values Object.entries

const billy = {
	'200m freestyle': 78,
	'100m breatstroke': 140,
	'200m IM': 130,
};

const billyEntries = Object.entries(billy);
console.table(billyEntries);

export default function Sample() {
	return (
		<div className="App">
			{billyEntries.map(([event, time]) => {
				return (
					<div key={event}>
						<div>{event}</div>
						<div>{time}</div>
					</div>
				);
			})}
		</div>
	);
}
