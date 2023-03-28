import react from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  //   console.log(props);
  //   console.log(props.dataPoints);
  //   const dataX = props.dataPoints;
  const dataPointsValue = props.dataPoints.map((datapoint) => datapoint.value);
  const totalMaxium = Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.id}
          // key={index}
          value={datapoint.value}
          maxValue={totalMaxium}
          labal={datapoint.lable}
        />
      ))}
    </div>
  );
};

export default Chart;
