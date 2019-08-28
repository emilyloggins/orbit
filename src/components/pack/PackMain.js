import React, { Component } from 'react'
import PackList from "./PackList"
import NewPack from "./NewPack"
import { withRouter } from 'react-router-dom'
import './Pack.css'
import PackManager from "../../modules/PackManager"


class PackMain extends Component {
    // set it to true in order to render form
    state = {
        newForm: false,
        userPacks: []
    }

    componentDidMount() {
        const newState = {};
        PackManager.getPack(this.props.activeUser.id)
            .then(packs => { newState.userPacks = packs })
            .then(() => this.setState(newState));
    }

    updateState = (userPacks) => {
        this.setState({ userPacks: userPacks })
    }

    removePack = (id) => {
        this.props.deletePack(id);
    }
    render() {
        return (
            <div className="pack-main-container bgImage">
                <NewPack addPack={this.props.addPack}
                    activeUser={this.props.activeUser}
                    userPacks={this.state.userPacks}
                    updateState={this.updateState} />
                <PackList
                    {...this.props}
                    userPacks={this.state.userPacks}
                    packItems={this.props.packItems}
                    deletePack={this.props.deletePack}
                    chosenPack={this.props.chosenPack}
                    updateState={this.updateState}
                    getJoinTableItems={this.props.getJoinTableItems} />
            </div>
        )
    }
}

export default withRouter(PackMain)