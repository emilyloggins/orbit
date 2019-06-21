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
                <p className="pack-blurb">Welcome to your packs. This is the place to virtually assemble your survival arsenal. Pack one for you, a loved one, or even that guy you really hate from work. Trust us, when the dark ones arrive, you won’t wish their wrath on even your worst enemy. When they find you, they <em>will</em> probe you. And that comes with a lot more baggage than anything you could put in your pack.</p>
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