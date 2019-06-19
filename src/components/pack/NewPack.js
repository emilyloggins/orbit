import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { InputGroup, Input, Button } from 'reactstrap';
import './Pack.css'

class NewPack extends Component {
    state = {
        name: '',
        description: '',
    };
    // clearFields() {
    //     this.preventDefault();
    //     this.target.reset();
    // };
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
    submit = () => {
        const obj = {
            name: this.state.name,
            description: this.state.description
        }
        this.props.addPack(obj)
    };

    render() {
        return (
            <div className="new-pack-div">
                <p className="pack-blurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <h1 className="new-pack-header">NEW PACK</h1>
                <InputGroup className="new-pack-inputgroup">
                    <Input onChange={this.handleFieldChange} id="name" placeholder="Name"></Input>
                    <Input onChange={this.handleFieldChange} id="description" placeholder="Purpose"></Input>
                </InputGroup>
                <div className="main-btn-div">
                <Button onClick={this.submit.bind(this)} className="main-btn" size="lg">Add</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(NewPack)