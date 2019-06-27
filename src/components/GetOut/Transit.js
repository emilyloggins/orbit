import React, { Component } from 'react'
import { Button, Fade } from 'reactstrap';
import './GetOut.css'
import { FaExclamationTriangle } from 'react-icons/fa'
import Station from './Station'


class Transit extends Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: false };
        this.toggle = this.toggle.bind(this);
    }
    
    render() {
        return (
            <div>
                <Button className="fade-btn" color="danger" size="lg" onClick={this.toggle}>VIEW TRANSPORTATION OPTIONS</Button>
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3 transit-blurb">
                <FaExclamationTriangle />
                    {
                        this.props.stations.map(station => {
                            return (
                                <Station key={station.id}
                                station={station} />
                            )
                        })
                    }
                </Fade>
            </div>
        )
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
}

export default Transit