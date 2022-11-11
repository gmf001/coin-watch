'use client';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	LineElement,
	PointElement,
	Title
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title);

export function Sparkline({
	data,
	percentChange
}: {
	data: number[];
	percentChange: number;
}) {
	if (!data) return null;
	const borderColor = percentChange < 0 ? '#fca5a5' : '#86efac';

	return (
		<div>
			<Line
				options={{
					responsive: false,
					elements: {
						line: {
							borderColor,
							borderWidth: 1
						},
						point: {
							radius: 0
						}
					},
					plugins: {
						tooltip: {
							enabled: false
						},
						legend: {
							display: false
						}
					},
					scales: {
						y: {
							display: false
						},
						x: {
							display: false
						}
					}
				}}
				height={50}
				width={100}
				data={{
					labels: data,
					datasets: [
						{
							data
						}
					]
				}}
			/>
		</div>
	);
}
