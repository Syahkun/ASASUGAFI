import React, {Fragment, Component} from "react";
import CanvasJSReact from "../canvas/canvasjs.react";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const CovidDetailComp = (props) => {
    const {country, newCase, activeCase, criticalCase, newDeath, recoveredCase, totalCase, totalDeath, totalTest} = props;

    const options = {
        animationEnabled: true,
        title: {
            text: "Cases"
        },
        data: [{
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
            ]
        }]
    };

    const options2 = {
        title: {
            text: "Basic Column Chart"
        },
        data: [
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "doughnut",
                dataPoints: [
                    { label: "Total Case",  y: totalCase  },
                    { label: "Total Death", y: totalDeath  },
                ]
            }
        ]
    };

    return (
        <Fragment>
                <div className="card-group container">
                    <div className="card row">
                        <div className="card-title">{country}</div>
                        <div className="row">
                            <div className="card-body col-6 col-xs-12">
                                <CanvasJSChart options = {options}/>
                            </div>
                            <div className="card-body col-6 col-xs-12">
                                <CanvasJSChart options = {options2}/>
                            </div>
                        </div>
                    </div>
                </div>

        </Fragment>
    );
};

export default (CovidDetailComp);