import React, { Component } from 'react'
import PackList from "./PackList"
import PackItem from "./PackItem"
import NewPack from "./NewPack"
import { withRouter } from 'react-router-dom'
import './Pack.css'
import PackEditModal from './PackEditModal';

class PackMain extends Component {
    // set it to true in order to render form
    state = {
        newForm: false
    }

    removePack = (id) => {
        this.props.deletePack(id);
    }
    render() {
        return (
            <div className="pack-main-container bgImage">
                <NewPack addPack={this.props.addPack}/>
                <PackList 
                {...this.props}
                packs={this.props.packs}
                packItems={this.props.packItems}
                deletePack={this.props.deletePack}
                chosenPack={this.props.chosenPack}
                editPack={this.props.editPack} />
            </div>
        )
    }
}

export default withRouter(PackMain)