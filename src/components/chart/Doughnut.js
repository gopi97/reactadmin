import React from 'react';
import CanvasJSReact from '../../assets/chart/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Doughnut=()=>{
    const Roundchart = {
        animationEnabled: true,
        title: {
            text: "Browser Usage",
            HorizontalAlign:"left"
        },
        subtitles: [{
            
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: false
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Firefox", y: 15 },
                { name: "Safari", y: 25 },
                { name: "Chrome", y: 40 },
              
            ]
        }]
    }
    return (
    <div>
        <CanvasJSChart options = {Roundchart} />
       </div>
    );
}
export default Doughnut;                             