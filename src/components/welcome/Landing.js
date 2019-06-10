import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Landing extends Component {
    render() {
        return(
            <h1>Welcome!</h1>
        )
    }
}

export default withRouter(Landing)