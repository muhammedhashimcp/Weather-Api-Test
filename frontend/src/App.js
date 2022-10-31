import WeatherApi from './screens/WeatherApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Output from './screens/Output';
function App() {

	return (
		<div className="flex justify-center">
			<ToastContainer limit={1} />
			<WeatherApi />
		</div>
	);
}

export default App;
