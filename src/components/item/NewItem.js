import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class NewItem extends Component {

    removePack = (id) => {
        this.props.deletePack(id);
    }
    render() {
        return (
            <div>
                <h1>New Item</h1>
            </div>
        )
    }
}

export default withRouter(NewItem)