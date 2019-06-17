import React, { Component } from 'react'

class GearContainer extends Component {

    render() {
        return (
            <div>
                <div className="gear-container">
                    <p>{this.props.item.name}</p>
                </div>
            </div>
        )
    }
}

export default GearContainer