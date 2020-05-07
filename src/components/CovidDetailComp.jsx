import React, { Fragment, Component } from "react";
import CanvasJSReact from "../canvas/canvasjs.react";
import Footer from "./Footer";
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CovidDetailComp = (props) => {
  const {
    country,
    newCase,
    activeCase,
    criticalCase,
    newDeath,
    recoveredCase,
    totalCase,
    totalDeath,
    totalTest,
  } = props;

  const options = {
    animationEnabled: true,
    title: {
      text: "Cases",
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}",
        dataPoints: [
          { y: newCase, label: "New" },
          { y: activeCase, label: "Active" },
          { y: criticalCase, label: "Critical" },
          { y: recoveredCase, label: "Recovered" },
        ],
      },
    ],
  };

  const options2 = {
    title: {
      text: "Case and Death",
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "doughnut",
        dataPoints: [
          { label: "Total Case", y: totalCase },
          { label: "Total Death", y: totalDeath },
        ],
      },
    ],
  };

  return (
    <Fragment>
      <div className="card-group rounded-lg my-4 container">
        <div className="card row">
          <div className="card-title mt-3 mb-0">
            <h3>{country}</h3>
          </div>
          <div className="row mt-0">
            <div className="card-body col-lg-6 row-xs-12">
              <CanvasJSChart options={options} />
            </div>
            <div className="card-body col-lg-6 row-xs-12">
              <CanvasJSChart options={options2} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CovidDetailComp;
