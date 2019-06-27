import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { InputGroup, Input, Button } from 'reactstrap';
import './Pack.css'
import PackManager from '../../modules/PackManager'

class NewPack extends Component {
    state = {
        name: '',
        description: '',
    };

    cancelCourse() {
        document.querySelector("#name").value = "";
        document.querySelector("#description").value = "";
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
    submit = () => {
        const obj = {
            name: this.state.name,
            description: this.state.description,
            userId: this.props.activeUser.id,
            packed: false
        }
        this.props.addPack(obj)
            .then(() => {
                PackManager.getPack(this.props.activeUser.id)
                    .then(packs => {
                        this.props.updateState(packs)
                        this.cancelCourse()
                    })
            })
    };


    render() {
        return (
            <div className="new-pack-div">
                <p className="pack-blurb"><strong>Welcome to your packs.</strong> This is the place to virtually assemble your survival arsenal. Pack one for you, a loved one, or even that guy you really hate from work. Prepare now, because when they find you, they <em>will</em> probe you. And being probed comes with a lot more baggage than anything you could put in your pack. Trust us.</p>
                <h1 className="new-pack-header">NEW PACK</h1>
                <InputGroup className="new-pack-inputgroup">
                    <Input onChange={this.handleFieldChange} ref="name" id="name" placeholder="Name"></Input>
                    <Input onChange={this.handleFieldChange} ref="description" id="description" placeholder="Purpose"></Input>
                </InputGroup>
                <div className="main-btn-div">
                    <Button onClick={this.submit.bind(this)} className="main-btn" size="lg">Add</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(NewPack)