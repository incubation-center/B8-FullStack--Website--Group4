import React, { Component } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

class Chartfixdeposits extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.state = {
      options: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
      series: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.updateChart(this.props.data);
    }
  }

  updateChart(data) {
    const chartData = Object.keys(data).map((bank) => ({
      name: bank,
      data: Object.values(data[bank]).map((rate) => rate["2023-7-17"]),
    }));

    this.setState({
      series: chartData,
    });
  }

  render() {
    return (
      <Chart
        key={JSON.stringify(this.state.series)} // Use a unique key to force re-mount when the data changes
        options={this.state.options}
        series={this.state.series}
        type="area"
        height={350}
        ref={this.chartRef}
      />
    );
  }
}

export default Chartfixdeposits;
