

// import { dbData } from "../utils/dbData";

const dbData = {
	"town": 'Calicut',
	"state": 'Kerala',
	"nation": 'India',
	"latitude": 11.25,
	"longitude": 75.77,
	"timezone": 'Asia/Kolkata',
	"dawn": '06:18 AM',
	"dusk": '06:03 PM',
	"moonlit": '11:01 AM',
	"moonsleep": '10:42 PM',
	"orientation": 'Waxing Crescent',
	"illumination": 33,
};
const billy = {
	'200m freestyle': "78",
	'100m breatstroke': 140,
	'200m IM': 130,
};
export default function Output({weatherData}) { 
	return (
		<>
			{Object.entries(weatherData).map(([event, time], index) => (
				<tr key={index}>
		
					<td>{event}</td>
					<td>{time}</td>
				</tr>
			))}
		</>
	);
}
