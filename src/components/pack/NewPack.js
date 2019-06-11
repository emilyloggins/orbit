import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { InputGroup, InputGroupText, InputGroupAddon, Input, Button } from 'reactstrap';
import './Pack.css'



class NewPack extends Component {
    render() {
        return (
            <div className="new-pack-div">
                <p className="pack-blurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <h1>New Pack</h1>
                <InputGroup className="new-pack-inputgroup">
                    <Input id="name-input" placeholder="Name"></Input>
                    <Input id="description-input" placeholder="Purpose"></Input>
                </InputGroup>
                <Button className="main-btn" size="lg">Add</Button>{' '}
            </div>
        )
    }
}

export default withRouter(NewPack)