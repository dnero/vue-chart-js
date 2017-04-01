import { Line } from 'vue-chartjs';

export default Line.extend({
	mounted() {

		this.renderChart({ // callable because we extended BaseChart
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
					label: 'Data One',
					backgroundColor: '#FC2525',
					data: [40, 39, 10, 40, 39, 80, 40]
				}, {
					label: 'Data Two',
					backgroundColor: '#05CBE1',
					data: [60, 55, 32, 10, 2, 12, 53]
			}]
		}, {
				responsive: true, // ensure that the charg grows based on outer container
				maintainAspectRatio: false
		})

	}
});