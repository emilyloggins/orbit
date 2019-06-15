import React, { Component } from 'react'
import PackItemManager from '../../modules/PackItemManager'

class ItemContainer extends Component {

    render() {
        return (
            <h1 onClick={this.props.getJoinTableItems}>{this.props.item.name}</h1>
        )
    }
}

export default ItemContainer