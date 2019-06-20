import React, { Component } from 'react'
import FoodContainer from './itemCategories/FoodContainer';
import GearContainer from './itemCategories/GearContainer';
import WeaponContainer from './itemCategories/WeaponContainer';
import MiscContainer from './itemCategories/MiscContainer';
import './Item.css'


class ItemContainer extends Component {

    render() {
        return (
            <div className="category-div-main">
                <div className="food-container">
                    <h1 className="item-header-quad">FOOD</h1>
                    {
                        this.props.chosenItems.map((item) => {
                            if (item.category === "Food") {
                                return (
                                    <FoodContainer key={item.id} food={item}
                                    {...this.props} />
                                )
                            }
                        })
                    }
                </div>
                <div className="gear-container">
                    <h1 className="item-header-quad">GEAR</h1>
                    {
                        this.props.chosenItems.map((item) => {
                            if (item.category === "Gear") {
                                return (
                                    <GearContainer key={item.id} gear={item}
                                    {...this.props} />
                                )
                            }
                        })
                    }
                </div>
                <div className="weapon-container">
                    <h1 className="item-header-quad">WEAPONS</h1>
                    {
                        this.props.chosenItems.map((item) => {
                            if (item.category === "Weapon") {
                                return (
                                    <WeaponContainer key={item.id} weapon={item}
                                    {...this.props} />
                                )
                            }
                        })
                    }
                </div>
                <div className="misc-container">
                    <h1 className="item-header-quad">MISC.</h1>
                    {
                        this.props.chosenItems.map((item) => {
                            if (item.category === "Misc") {
                                return (
                                    <MiscContainer key={item.id} misc={item}
                                    {...this.props} />
                                )
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ItemContainer