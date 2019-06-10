import { Component } from 'react'
import { withRouter } from 'react-router'

class Landing extends Component {
    render() {
        return(
            <h1>Orbit</h1>
        )
    }
}

export default withRouter(Landing)