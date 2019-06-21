import React, { Component } from 'react'
import { FaCheck } from 'react-icons/fa'
import './Pack.css'

class PackItemHeader extends Component {

    render() {
        if (this.props.packed === true) {
            return (
                <h3 className="pack-title-text"><FaCheck className="checkmark" />{this.props.name}</h3>
            )
        } else {
            return (
                <h3 className="pack-title-text">{this.props.name}</h3>
            )
        }
    }
}

export default PackItemHeader