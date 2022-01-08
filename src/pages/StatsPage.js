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
import { format, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function StatsPage() {
    const location = useLocation();
    const balance = location.state[0];
    const transactionsDict = location.state[1];
    function getTotalTransactions(date) {
        var sum = 0;
        var fDate = format(date, "yyyy-MM-dd");
        if(transactionsDict.hasOwnProperty(fDate)) {
            for(var i = 0; i < transactionsDict[fDate].length; i++) {
                sum += transactionsDict[fDate][i].amount;
            }
            return sum;
        }
        else {
            return sum;
        }
    }

    const datesThisWeek = eachDayOfInterval({
        start: startOfWeek(new Date()),
        end: endOfWeek(new Date())
    });

    var options = {
        responsive: true,
  plugins: {
    title: {
      display: true,
      text: format(startOfWeek(new Date()), "yyyy-MM-dd") + " - " + format(endOfWeek(new Date()), "yyyy-MM-dd"),
      color: 'white',
      font: {
        size: 20,
        
      },
    },
  },
  scales: {
    xAxes: {
        ticks: {
            color: 'white', 
            font: {
                size: 20,
            }
        },
        grid: {
            display: false,
            drawBorder: true,
            borderColor: 'black',
            borderWidth: 20,
        }
    },
    yAxes: {
        ticks: {
            color: 'white', 
            font: {
                size: 20,
            }
        },
        grid: {
            display: false,
            drawBorder: true,
            borderColor: 'black',
            borderWidth: 20,
        }
    },
  }
};
    
    const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      
    var data = {
        labels,
        datasets: [
            {
                label: 'Amount???',
                data: datesThisWeek.map((date) => getTotalTransactions(date)),
                backgroundColor: 'black',
            }
        ],
    };    

    return(
        <div className="App">
            <NavBar balance = {balance} transactionsDict={transactionsDict}/>
            <h1 className='balanceMain'> Stats </h1>
            <Bar
            options={options}
            data={data}
            />
        </div>
    );
}

export default StatsPage;