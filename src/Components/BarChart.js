import "chart.js";
import "chart.js/auto";
import "../component.css";
import Data from "../Data";
import { Bar } from "react-chartjs-2";

export default function BarChart() {
  const Day = Data.map((item) => item.day);
  const Amount = Data.map((item) => item.amount);

  return (
    <div className="barContainer">
      <Bar
        data={{
          labels: Day,
          datasets: [
            {
              data: Amount,
              backgroundColor: "hsl(10, 79%, 65%)",
              hoverBackgroundColor: "hsl(186, 34%, 60%)",
              borderRadius: 5,
              borderSkipped: false,
              drawOnChartArea: false,
              drawBorder: false,
            },
          ],
        }}
        height={70}
        width={100}
        options={{
          scales: {
            xAxis: {
              grid: {
                display: false,
              },
            },
            yAxis: {
              display: false,
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
}
