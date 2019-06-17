import React, { Component } from 'react'

class FoodContainer extends Component {

    render() {
        return (
            <div>
                <div className="food-container">
                    <p>{this.props.item.name}</p>
                </div>
            </div>
        )
    }
}

export default FoodContainer