import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'reactstrap'
import "./Landing.css"
import ufo from '../../img/ufo1.png'
import orbit from '../../img/logo/OrbitLogo1.svg'

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
                    <div className="heading-blurb-container">
                     {/* <img src={orbit} className="ufo-icon" alt="ufo icon"></img> */}
                     <img src={orbit} className="orbit-header-main" alt="ufo icon"></img>
                    {/* <h1 className="orbit-header-main">ORBIT</h1> */}
                    <p className="description-main"><strong>It's a fact.</strong> The government of this country is covering up the existence of extraterrestrial life. You can keep brushing it under the rug, or you can take your future in your own hands, and get ready. <strong>Orbit</strong> is the go-to place to prepare for an invasion, share evidence with like-minded people, and find a way out of your city when they inevitably come. And oh, they most certainly will come. </p>
                    </div>
                    <div className="welcome-btn-container">
                    <Button id="register-btn" className="landing-btn" color="secondary" size="lg" onClick={this.Register}>Register</Button>{' '}
                    <Button id="login-btn" className="landing-btn" color="secondary" size="lg" onClick={this.LogIn}>Log In</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Landing)