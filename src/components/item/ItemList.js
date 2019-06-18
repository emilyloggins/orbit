import React, { Component } from 'react'
import FoodContainer from './itemCategories/FoodContainer'
import GearContainer from './itemCategories/GearContainer';
import ItemContainer from './ItemContainer'
import './Item.css'

class ItemList extends Component {

    render() {
        return (
            <div className="main-item-container">
                <ItemContainer {...this.props} />
            </div>
        )
    }
}



// let currentItems = this.props.chosenItems.map((item) => {
//     return (
//         <ItemContainer
//             item={item}
//             key={item.id}
//             category={item.category} />
//     )
// })

export default ItemList