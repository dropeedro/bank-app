"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({accounts} : DoughnutChartProps) => {
    const data = {
        datasets : [
            {
                label: 'Banks',
                data: [78932,53434,61232],
                backgroundColor: ['#0747b6', '#2265B8', '#2F91FA']
            }
        ],
        labels : ['Bank 1', 'Bank 2', 'Bank 3']
    }
    return <Doughnut 
        data={data}
        options={{
            cutout : '60%',
            plugins:{
                legend:{
                    display : false
                }
            }
        }} />

}

export default DoughnutChart