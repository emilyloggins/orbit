import React, { Component } from 'react'
import FoodContainer from './itemCategories/FoodContainer'
import GearContainer from './itemCategories/GearContainer';
import ItemContainer from './ItemContainer'
import './Item.css'

class ItemList extends Component {

    render() {
        return (
            <div className="main-item-container">
                <ItemContainer chosenItems={this.props.chosenItem}
                    {...this.props} />
            </div>
        )
    }
}

export default ItemList