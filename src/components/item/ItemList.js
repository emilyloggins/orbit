import React, { Component } from 'react'
import FoodContainer from './itemCategories/FoodContainer'
import GearContainer from './itemCategories/GearContainer';
import ItemContainer from './ItemContainer'
import './Item.css'

class ItemList extends Component {

    render() {
        return (
            <div className="main-item-container">
                {/* <div className="category-header-container">
                    <h1 className="category-header">Food</h1>
                    <h1 className="category-header">Gear</h1>
                    <h1 className="category-header">Weapons</h1>
                    <h1 className="category-header">Misc</h1>
                </div> */}
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