import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

import { useRecoilValue } from "recoil";
import {
  savingChartDataAtom,
  isFilteredBankDataState,
  filteredSavingChartDataAtom,
} from "./atom";

const ChartComponent = () => {
  const isFilteredBankData = useRecoilValue(isFilteredBankDataState);

  const chartRef = useRef(null);

  const chartData = useRecoilValue(savingChartDataAtom);
  const filteredChartData = useRecoilValue(filteredSavingChartDataAtom);

  useEffect(() => {
    const options = {
      series: !isFilteredBankData ? chartData.data : filteredChartData.data,
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
        categories: !isFilteredBankData
          ? chartData.categories
          : filteredChartData.categories,
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [isFilteredBankData, chartData, filteredChartData]);

  return (
    <div>
      <h1>saving</h1>
      <div ref={chartRef} />
    </div>
  );
};

export default ChartComponent;
