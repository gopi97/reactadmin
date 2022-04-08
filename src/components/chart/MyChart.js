import { AlignHorizontalLeft } from "@mui/icons-material";
import React from "react";
import CanvasJSReact from '../../assets/chart/canvasjs.react';


var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const MyChart = ()=>{

    const Splint = {
        animationEnabled: true,backgroundColor: "#b11cd9",
        height:150,
        width:600,
        title:{
            text: "New Orders",
            fontColor:"white",
            horizontalAlign:"left",
            fontSize:20,
            
        },
        axisX: {
            valueFormatString: "MMM",
            lineThickness: 0,
            tickLength: 0,
            labelFormatter: function(){
                return " ";
              }
        },
        axisY: {
            
            
            gridThickness: 0,
            lineThickness: 0,
            tickLength: 0,
            labelFormatter: function(){
                return " ";
              }
        },
        data: [{
            yValueFormatString: "$#,###",
            xValueFormatString: "MMMM",
            type: "spline",
            property:"0",
            dataPoints: [
                { x: new Date(2017, 0), y: 25060 },
                { x: new Date(2017, 1), y: 27980 },
                { x: new Date(2017, 2), y: 42800 },
                { x: new Date(2017, 3), y: 32400 },
                { x: new Date(2017, 4), y: 35260 },
                { x: new Date(2017, 5), y: 33900 },
                { x: new Date(2017, 6), y: 40000 },
                { x: new Date(2017, 7), y: 52500 },
               
            ]
        }]
    }
    return (
    <div>
        <CanvasJSChart options = {Splint}
            
        />
       
    </div>
    );
}


export default MyChart;