import React, { Component } from 'react'

class MiscContainer extends Component {

    render() {
        return (
            <div>
                <div className="misc-container">
                    <p>{this.props.misc.name}</p>
                </div>
            </div>
        )
    }
}

export default MiscContainer