import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function TemperatureGraph({ forecastData }) {
  const data = {
    labels: forecastData.list.map((forecast) => 
      new Date(forecast.dt * 1000).toLocaleDateString("en-US", { weekday: "long" })
    ),
    datasets: [
      {
        label: "Max Temperature",
        data: forecastData.list.map((forecast) => forecast.temp.max),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Min Temperature",
        data: forecastData.list.map((forecast) => forecast.temp.min),
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            family: "'Inter', sans-serif",
            color: "#374151",
          },
        },
      },
      title: {
        display: true,
        text: "Temperature Forecast",
        font: {
          size: 20,
          family: "'Inter', sans-serif",
          color: "#1F2937", 
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
            family: "'Inter', sans-serif",
            color: "#4B5563", 
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
            family: "'Inter', sans-serif",
            color: "#4B5563", 
          },
        },
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold  text-center">7-Day Temperature Forecast</h2>
      <Line data={data} options={options} />
    </div>
  );
}
