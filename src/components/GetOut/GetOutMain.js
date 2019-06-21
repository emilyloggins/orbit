import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import "./GetOut.css"
import GetOutPack from './GetOutPack';
// import SpinnerMessage from './SpinnerMessage';

class GetOutMain extends Component {

    state = {
        routes: [],
        safe: ''
    }

    render() {
        return (
            <div className="bgImage">
                {/* <div className="getout-main-container"> */}
                    <div class="example1">
                        <h3>AVOID NATIONAL LANDMARKS AT ALL COSTS.</h3>
                    </div>
                    <GetOutPack />
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