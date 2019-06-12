import React, { Component } from 'react'
import PackList from "./PackList"
import PackItem from "./PackItem"
import NewPack from "./NewPack"
import { withRouter } from 'react-router-dom'
import './Pack.css'

class PackMain extends Component {
    // set it to true in order to render form
    state = {
        newForm: false
    }

    render() {
        return (
            <div className="pack-main-container">
                <NewPack addPack={this.props.addPack}/>
                <PackList 
                {...this.props}
                packs={this.props.packs} />
            </div>
        )
    }
}

export default withRouter(PackMain)