import { useEffect, useState } from "react";
import { calculateDailySales } from "@/services/analyticsService";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
} from "chart.js";

Chart.register(CategoryScale, LinearScale, LineElement, PointElement);

export default function AnalyticsDashboard() {
  const [dataPoints, setDataPoints] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const data = await calculateDailySales();
      setDataPoints(data);
    }
    load();
  }, []);

  const data = {
    labels: dataPoints.map(d => d.date),
    datasets: [
      {
        label: "Daily Sales",
        data: dataPoints.map(d => d.total),
        borderColor: "#000",
        tension: 0.4
      }
    ]
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">CEO Sales Overview</h2>
      <Line data={data} />
    </div>
  );
}