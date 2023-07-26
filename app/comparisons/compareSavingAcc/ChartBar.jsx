import React from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartComponent = ({ chartData, isFilteredBankData }) => {
  const options = {
    series: !isFilteredBankData ? chartData.data : chartData.data,
    chart: {
      height: 350,
      // type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      // type: "datetime",
      categories: !isFilteredBankData ? chartData.categories : chartData.categories,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div>
      <h1>saving</h1>
      <ApexCharts options={options} series={options.series} type="line" height={options.chart.height} />
    </div>
  );
};

export default ChartComponent;
