import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PackItem from "./PackItem"
import PackManager from "../../modules/PackManager"
import './Pack.css'


class PackList extends Component {
    state = {
        packs: []
    }

    componentDidMount() {
        const newState = {};
        PackManager.getPack(this.props.activeUser.id)
            .then(packs => { newState.packs = packs })
            .then(() => this.setState(newState));
    }

    render() {
        return (
            <div className="pack-list-div">
                <h1 className="pack-list-header">YOUR PACKS</h1>
                <div className="scrolling-pack-div">
                    {
                        this.props.userPacks.map(item => {
                            if (this.props.packs === []) {
                                return (
                                    <h2>You have no packs.</h2>
                                )
                            } else {
                                return (
                                    <PackItem
                                        {...this.props}
                                        packItems={this.props.packItems}
                                        packs={this.props.packs}
                                        key={item.id}
                                        item={item}
                                        name={item.name}
                                        packed={item.packed}
                                        description={item.description}
                                        deletePack={this.props.deletePack}
                                        getJoinTableItems={this.props.getJoinTableItems} />
                                )
                            }
                        })
                    }
                </div>
            </div>

        )
    }
}

export default withRouter(PackList)


// console.log("join", item)
// if (this.props.packItems.map(join)) {
//     return (
//         <PackItem
//             {...this.props}
//             packItems={this.props.packItems}
//             packs={this.props.packs}
//             key={item.id}
//             item={item}
//             name={item.name}
//             packed={item.packed}
//             description={item.description}
//             deletePack={this.props.deletePack}
//             getJoinTableItems={this.props.getJoinTableItems} />
//     )
// } else {
//     return (
//         <h2>You have no packs.</h2>
//     )
// }