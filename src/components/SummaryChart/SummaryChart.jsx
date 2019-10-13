// MyBarChart.js
import React from 'react';
import {
    XYPlot,
    XAxis, // Shows the values on x axis
    YAxis, // Shows the values on y axis
    VerticalBarSeries,
    LabelSeries
} from 'react-vis';
class SummaryChart extends React.Component {
    render() {
        
        const data = [
            { "y": this.props.expenditure[0], "x": "Sun" },
            { "y": this.props.expenditure[1], "x": "Mon" },
            { "y": this.props.expenditure[2], "x": "Tues" },
            { "y": this.props.expenditure[3], "x": "Wed" },
            { "y": this.props.expenditure[4], "x": "Thu" },
            { "y": this.props.expenditure[5], "x": "Fri" },
            { "y": this.props.expenditure[6], "x": "Sat" }
        ];
        
        const chartWidth = 300;
        const chartHeight = 180;
        const chartDomain = [0, Math.max(...this.props.expenditure) + 20];
        return (
            <XYPlot 
                xType="ordinal" 
                width={chartWidth} 
                height={chartHeight} 
                yDomain={chartDomain}
                fill= "58C077"
            >
                <XAxis />
                <YAxis />
                <VerticalBarSeries
                    data={data}
                    barWidth={0.6}
                />
                <LabelSeries
                    data={data.map(obj => {
                        return { ...obj, label: "$" + obj.y.toString() }
                    })}
                    labelAnchorX="middle"
                    labelAnchorY="text-after-edge"
                />
            </XYPlot>
        );
    }
}

export default SummaryChart;