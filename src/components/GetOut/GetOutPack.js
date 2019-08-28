import React, { Component } from 'react'
import {
    Card, CardBody,
    CardTitle, Button
} from 'reactstrap';
import PackedBags from './PackedBags'

class GetOutPack extends Component {

    redirect = () => {
        this.props.history.push('/packs')
    }
    render() {
        return (
            <div>
                <Card className="pack-card">
                    <CardBody>
                        <CardTitle className="packed-card-title">THESE ARE YOUR PACKED BAGS:</CardTitle>
                            {
                                this.props.packs.map((pack) => {
                                    if (pack.packed === true && pack.userId === this.props.activeUser.id) {
                                        return (
                                            <PackedBags pack={pack} key={pack.id} />
                                        )
                                    }
                                })
                            }
                        <Button onClick={this.redirect}>GO TO PACKS</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default GetOutPack