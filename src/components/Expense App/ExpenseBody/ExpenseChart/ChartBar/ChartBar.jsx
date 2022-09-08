import React from "react";
import "./chartBar.css";

const ChartBar = (props) => {
  const height =
    Math.round((props.height / props.MaxPrice) * 100).toString() + "%";
  // console.log(props)
  return (
    <div className="chart_bar">
      <div className="chart_bar_inner">
        <div className="chart_bar_fill" style={{ height: height }}></div>
      </div>
    </div>
  );
};

export default ChartBar;
