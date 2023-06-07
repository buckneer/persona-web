import ReactDOM from "react-dom";
import { Bar } from "react-chartjs-2";
import {BarElement, CategoryScale, Chart as ChartJS, LinearScale, Title, Tooltip, Legend} from "chart.js";
// import "./styles.css";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const labels = ['Ekstroverzija/Introverzija', 'Intuitivnost/Senzitivnost', 'Osećajnost/Mišljenje', 'Percepcija/Suđenje'];

const data = {
	labels,
	datasets: [
		{
			data: [1, 2, 3, 4],
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
		{

			data: [1, 2, 3, 4],
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	],
};

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Grafički prikaz',
		},
	},
};

function Chart({dataset}) {

	const data = {
		labels,
		datasets: [
			{
				label: "",
				data: [dataset.E, dataset.N, dataset.F, dataset.P],
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: "",
				data: [dataset.I,dataset.S,dataset.T,dataset.J],
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	};


	return (
		<div style={{width: "700px", marginLeft: "auto", marginRight: "auto"}}>
			<Bar height={15} width={15} options={options} data={data} />
		</div>
	);
}

export default Chart;
