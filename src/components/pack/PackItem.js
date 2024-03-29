import React, { Component } from 'react'
import { Card, Button, CardHeader, CardBody, CardText } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import './Pack.css'
import PackEditModal from './PackEditModal'
import PackManager from '../../modules/PackManager'
import PackItemHeader from './PackItemHeader'

class PackItem extends Component {

    state = {
        modalShow: false,
        name: '',
        purpose: '',
        handleClickedDeleteYes: this.handleClickedDeleteYes,
        handleClickedNo: this.handleClickedNo
    }


    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    componentDidMount() {
        PackManager.getPack(this.props.chosenPack).then(pack => {
            this.setState({
                name: pack.name,
                purpose: pack.purpose,
            });
        });
    }

    handleSave = () => {
        const newPack = {
            id: this.props.chosenPack,
            name: this.state.name,
            description: this.state.purpose
        }
        PackManager.editPack(newPack)
            .then(() => {
                PackManager.getPack(this.props.activeUser.id)
                    .then(packs => {
                        this.props.updateState(packs)
                        this.setState({ modalShow: false })
                    })
            })
    }

    handleDelete = (packId) => {
        PackManager.deletePack(packId)
            .then(() => {
                PackManager.getPack(this.props.activeUser.id)
                    .then(packs => {
                        this.props.updateState(packs)
                    })
            })
    }

    handleItemClick = (id) => {
        this.props.changeChosenPack(id)
        this.props.history.push("/items")
    }

    handleClickedDeleteYes = () => {
        this.props.removeItem(this.props.item.id);
    }

    handleClickedNo = () => {
        this.setState({ editName: this.state.editName, body: this.state.body, modalShow: false });
    }

    openModal = () => {
        this.setState({
            modalShow: true
        })
        this.props.changeChosenPack(this.props.item.id)
    }

    render() {

        return (
            <div className="pack-item-div" >
                <Card>
                    <PackEditModal header={"Edit Your Pack"} toggleModal={this.state.modalShow} handleClickYes={this.handleClickedDeleteYes} handleClickNo={this.handleClickedNo} chosenPack={this.props.chosenPack} updatePack={this.props.updatePack} handleSave={this.handleSave}
                        handleFieldChange={this.handleFieldChange} name={this.props.name} description={this.props.description} />
                    <CardHeader className="pack-title-header1" tag="h3">
                        <div className="pack-title-header2">
                            <PackItemHeader {...this.props} />
                        </div>
                        <div className="pack-icons-div">
                            <FaTrash className="pack-icon" onClick={() => this.handleDelete(this.props.item.id)} />
                            <FaEdit className="pack-icon" onClick={this.openModal} />
                        </div>
                    </CardHeader>
                    <CardBody>
                        <CardText>{this.props.description}</CardText>
                        <Button onClick={() => this.handleItemClick(this.props.item.id)} size="lg" className="main-btn">View Items</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default withRouter(PackItem)
