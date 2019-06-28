import React, { Component } from 'react'

class PackedBags extends Component {

    redirect = () => {
        this.props.history.push('/packs')
    }

    render() {
        return (
            <React.Fragment >
                <h1>{this.props.pack.name}</h1>
            </React.Fragment>
        )
    }
}

export default PackedBags