import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import "./GetOut.css"
import GetOutPack from './GetOutPack';
// import SpinnerMessage from './SpinnerMessage';
import Transit from './Transit'
import GeocodeManager from "../../modules/GeocodeManager"
import TransitManager from "../../modules/TransitManager"

class GetOutMain extends Component {

    state = {
        routes: [],
        safe: ''
    }

    findRoutes = () => {
        let city = this.props.activeUser.city
        let state = this.props.activeUser.state
        // console.log(state)
        GeocodeManager.getGeocode(city, state)
        .then((location) => {
            const lat = location.results[0].geometry.location.lat
            const long = location.results[0].geometry.location.lng
            console.log("lat", lat, long)
            TransitManager.getStations(lat, long, city)
            .then((stations) => console.log("stations", stations))
        })
    }


    render() {
        this.findRoutes()
        return (
            <div className="bgImage">
                {/* <div className="getout-main-container"> */}
                <div class="example1">
                    <h3>AVOID NATIONAL LANDMARKS AT ALL COSTS.</h3>
                </div>
                <GetOutPack {...this.props} />
                <Transit />
                {/* <SpinnerMessage addMessage={this.props.addMessage}
                activeUser={this.props.activeUser}
                safe={this.props.safe}
                markSafe={this.props.markSafe}
                markUnsafe={this.props.markUnsafe} /> */}
                {/* </div> */}
            </div>
        )
    }
}

export default withRouter(GetOutMain)