import React, { Component } from "react";
import { Line } from 'react-chartjs-2';

const Chart = require('chart.js');

class Chart extends Component {
    constructor() {
        super(props);
        this.state = {

        }
    }

    constructor(props) {
        super(props)
        this.state = {
            data: chartData()
        }
    }

    render() {
        return (
            <div className="chart">
                <Bar
                    data={data}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}


export default Chart