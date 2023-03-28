import react from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  //   console.log(props);
  let barfillHeight = "0%";

  if (props.maxValue > 0) {
    barfillHeight = Math.round(props.value / props.maxValue) * 100 + "%";
  }
  //   console.log(barfillHeight);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barfillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.labal}</div>
    </div>
  );
};

export default ChartBar;
