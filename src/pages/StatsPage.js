import React from "react";
import '../App.css';
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Stats: " + "HERE",
      },
    },
  };
  
  const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => 1),
        backgroundColor: 'black',
      }
    ],
  };

function StatsPage() {
    const location = useLocation();
    const balance = location.state[0];
    const transactionsDict = location.state[1];
    return(
        <div className="App">
            <NavBar balance = {balance} transactionsDict={transactionsDict}/>
            <h1> {balance} </h1>
            <Bar
            options={options}
            data={data}
            />
        </div>
    );
}

export default StatsPage;