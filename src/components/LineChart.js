import { Line } from 'vue-chartjs';

export default Line.extend({
	data() {
		return {
			gradient: null,
			gradient2: null,
			data1: this.randomNumberArr(),
			data2: this.randomNumberArr()
		}
	},
	methods: {
		randomNumberArr() {
			let arr = [];

			for (let i = 0; i < 7; i++){
				arr.push(Math.random() * 100);
			}
			return arr;
		}	
	},
	mounted() {
		
		this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
		this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);

		this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
		this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
		this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

		this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)');
		this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)');
		this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)');

		this.renderChart({ // callable because we extended BaseChart
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				label: 'Data One',
				borderColor: '#FC2525',
				pointBackgroundColor: 'white',
				borderWidth: 1,
				pointBorderColor: 'white',
				backgroundColor: this.gradient,
				data: this.data1
			}, {
				label: 'Data Two',
				borderColor: '#05CBE1',
				pointBackgroundColor: 'white',
				pointBorderColor: 'white',
				borderWidth: 1,
				backgroundColor: this.gradient2,
				data: this.data2
			}]
		}, {
				responsive: true, // ensure that the charg grows based on outer container
				maintainAspectRatio: false
		});

	}
});