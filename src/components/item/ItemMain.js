import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import NewItem from './NewItem'
import { Button } from 'reactstrap'
import { FaChevronCircleLeft } from 'react-icons/fa'
import ItemList from './ItemList'

class ItemMain extends Component {

    PackReturn = () => {
        this.props.history.push('packs')
    }
    render() {
        return(
            <div>
            <Button onClick={this.PackReturn} color="secondary" size="lg"><FaChevronCircleLeft />Back to Packs</Button>
            <h1>Blurb about adding items to your packs</h1>
            <NewItem />
            <ItemList 
                items={this.props.items}
                packs={this.props.packs}
                packItems={this.props.packItems}
                activeUser={this.props.activeUser}
                chosenPack={this.props.chosenPack} />
            </div>
        )
    }
}

export default withRouter(ItemMain)