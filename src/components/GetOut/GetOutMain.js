import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import "./GetOut.css"
import GetOutPack from './GetOutPack';
import Transit from './Transit'
import GeocodeManager from "../../modules/GeocodeManager"
import TransitManager from "../../modules/TransitManager"

class GetOutMain extends Component {

    state = {
        stations: [],
        safe: ''
    }

    componentDidMount() {
        const newState = {}
        let city = this.props.activeUser.city
        let state = this.props.activeUser.state
        GeocodeManager.getGeocode(city, state)
        .then((location) => {
            const lat = location.results[0].geometry.location.lat
            const long = location.results[0].geometry.location.lng
            console.log("lat", lat, long)
            TransitManager.getStations(lat, long, city)
            .then(stations => { newState.stations = stations.Res.Stations.Stn })
            .then(() => this.setState(newState));
        })
    }


    render() {
        console.log("stations in state", this.state.stations)
        return (
            <div className="bgImage">
                <div className="example1">
                    <h3>AVOID NATIONAL LANDMARKS AT ALL COSTS.</h3>
                </div>
                <GetOutPack {...this.props} />
                <Transit stations={this.state.stations} />
            </div>
        )
    }
}

export default withRouter(GetOutMain)