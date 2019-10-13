import React, { Component } from 'react';
import * as d3 from "d3";

class SummaryChart extends Component {
    componentDidMount() {
        this.drawChart();
    }

    drawChart = () => {
        const { summary } = this.props;
        if (summary) {
            const svg = d3.select("body")
                .append("svg")
                .attr("width", 700)
                .attr("height", 300)
                .style("margin-left", 100);

            svg.selectAll("rect")
                .data(summary.data)
                .enter()
                .append("rect")
                .attr("x", (d, i) => i * 70)
                .attr("y", (d, i) => 300 - 10 * d)
                .attr("width", 65)
                .attr("height", (d, i) => d * 10)
                .attr("fill", "green")
        }

    }

    render() {
        return <div id={"#" + this.props.id}></div>
    }
}

export default SummaryChart;