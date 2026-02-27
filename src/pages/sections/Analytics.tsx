import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
  datasets: [{
    label: 'Sales (UGX)',
    data: [120000, 150000, 100000, 180000, 200000, 220000, 250000],
    borderColor: '#FBBF24',
    backgroundColor: 'rgba(251,191,36,0.2)',
    tension: 0.4,
    fill: true,
  }]
};

export default function Analytics() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="font-bold text-lg mb-4">Weekly Sales Overview</h2>
      <Line data={data} />
    </div>
  );
}