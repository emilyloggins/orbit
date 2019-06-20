import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import SightingLog from './SightingLog'
import Chart from './Chart'
import './Sighting.css'

class SightingsMain extends Component {
  render () {
    return (
      <div className="sighting-main-container bgImage">
        <div className="sighting-log-container">
          <SightingLog { ...this.props } activeUser={ this.props.activeUser } />
        </div>
        <div className="sighting-chart-container">
          <Chart { ...this.props } activeUser={ this.props.activeUser } />
        </div>
      </div>
    );
  }
}

export default withRouter(SightingsMain)