import React from "react";
import CanvasJSReact from '../../assets/chart/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const MonthlySales = ()=>{
    const LineChart = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title:{
            text: "Monthly Sales"
        },
        axisY: {
            includeZero: true
        },
        
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            //indexLabel: "{y}", //Shows y value on all Data Points
            
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            
            dataPoints: [
                { label:"Jan", y: 25 },
                { label:"Feb", y: 20 },
                { label:"Mar", y: 15 },
                { label:"Apr", y: 18 },
                { label:"May", y: 15 },
                { label:"Jun", y: 13 },
                { label:"Jul", y: 15 },
                { label:"Aug", y: 17 },
                { label:"Sep", y: 21 },
                { label:"Oct", y: 20 },
                { label:"Nov", y: 18 },
                { label:"Dec", y: 19 }
                
              
            ]
        }]
    }
    return (
		<div>
			<CanvasJSChart options = {LineChart} />
		
		</div>
		);
    }
    export default MonthlySales;
