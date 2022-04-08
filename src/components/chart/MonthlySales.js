import React from "react";
import CanvasJSReact from '../../assets/chart/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const MonthlySales = ()=>{
    const LineChart = {
        animationEnabled: true,
        theme: "d81b60", //"light1", "dark1", "dark2"
        height:150,
        width:600,
        backgroundColor:"#d81b60",

        title:{
            text: "Monthly Sales",
            fontSize:20,
            fontColor:"white",
            horizontalAlign:"left",
            
        },
        axisY: {
            includeZero: true,
            gridThickness: 0,
            lineThickness: 0,
            tickLength: 0,
            backgroundColor:"#d81b60",
            FontColor: "white",
            labelFormatter: function(){
                return " ";
              },
              
        },
    
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            //indexLabel: "{y}", //Shows y value on all Data Points
            padding: 0,
            width:5,
            labelFontColor:"white",
           
            indexLabelFontColor: "#5A5757",
            // indexLabelPlacement: "outside",
            backgroundColor:"#d81b60",
            color:"#e91e63",
            labelFontColor:"white",
            
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
