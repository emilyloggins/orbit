import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'reactstrap'
import "./Landing.css"

class Landing extends Component {

    Register = () => {
        this.props.history.push("/register")
    }

    LogIn = () => {
        this.props.history.push("/login")
    }

    render() {
        let imgUrl = 'images/berlin.jpg'
        let styles = {
            root: {
                backgroundImage: 'url(' + imgUrl + ')',
                backgroundSize: 'cover',
                overflow: 'hidden',
            }
        }
        return (
            <div className="landing-div-main bgImage">
                <div className="welcome-card-div">
                    <h1 className="orbit-header-main">ORBIT</h1>
                    <p className="description-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <Button id="register-btn" className="landing-btn" color="secondary" size="lg" onClick={this.Register}>Register</Button>{' '}
                    <Button id="login-btn" className="landing-btn" color="secondary" size="lg" onClick={this.LogIn}>Log In</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(Landing)