import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import NewItem from "./NewItem"
import ItemList from "./ItemList"

class ItemMain extends Component {

    render() {
        return (
            <div className="pack-main-container bgImage">
                <NewItem />
                <ItemList 
                {...this.props}
                packs={this.state.packs}
                activeUser={this.props.activeUser}
                packItems={this.state.packItems}
                items={this.state.items}  
                />
            </div>
        )
    }
}

export default withRouter(ItemMain)