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
                                    <FoodContainer food={item}/>
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
                                    <GearContainer gear={item}/>
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
                                    <WeaponContainer weapon={item}/>
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
                                    <MiscContainer misc={item}/>
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