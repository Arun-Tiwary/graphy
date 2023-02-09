import { useState } from "react";
import { Route, Link, Routes } from "react-router-dom";

import "./App.css";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { userData } from "./Data";

function App() {
  const [data, setData] = useState({
    labels: userData.map((data) => data.year),
    datasets: [
      {
        label: "User Gained",
        data: userData.map((data) => data.users),
        borderWidth: 2,
        backgroundColor: [
          "#e11d48",
          "#a21caf",
          "#6d28d9",
          "#4d7c0f",
          "#0f766e",
        ],
        borderColor: "balck",
      },
    ],
  });

  console.log(setData);
  return (
    <div className="App">
      <h1>Graphy</h1>
      <section>
        <ul>
          <li>
            <Link to="/bar">Bar</Link>
          </li>
          <li>
            <Link to="/line">Line</Link>
          </li>
          <li>
            <Link to="/pie">Pie</Link>
          </li>

          <li>
            <Link to="/doughnut">Doughnut</Link>
          </li>
        </ul>
      </section>

      <section className="charts">
        <Routes>
          <Route
            path="/"
            element={<h2>Please Select the type of chart you want to view</h2>}
            exact
          />
          <Route path="/bar" element={<BarChart chartData={data} />} exact />
          <Route path="/line" element={<LineChart chartData={data} />} exact />
          <Route path="/pie" element={<PieChart chartData={data} />} exact />
          <Route
            path="/doughnut"
            element={<DoughnutChart chartData={data} />}
            exact
          />
        </Routes>
      </section>
    </div>
  );
}

export default App;
