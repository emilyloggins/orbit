import React, { Component } from 'react'
import TransitModal from './TransitModal'
import './GetOut.css'


export default class Station extends Component {
    state = {
        modalShow: false,
        handleClickedNo: this.handleClickedNo
    }

    handleClickedNo = () => {
        this.setState({ editName: this.state.editName, body: this.state.body, modalShow: false });
    }

    openModal = () => {
        this.setState({
            modalShow: true
        })
    }

    render() {
        return (
            <div>
                <TransitModal header={this.props.station.name} toggleModal={this.state.modalShow} handleClickNo={this.handleClickedNo} station={this.props.station} />
                <p className="station-name" onClick={this.openModal}>{this.props.station.name}</p>
            </div>
        )
    }
}