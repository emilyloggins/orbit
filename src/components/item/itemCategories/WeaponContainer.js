import React, { Component } from 'react'

class WeaponContainer extends Component {

    render() {
        return (
            <div>
                <div className="weapon-container">
                    <p>{this.props.weapon.name}</p>
                </div>
            </div>
        )
    }
}

export default WeaponContainer