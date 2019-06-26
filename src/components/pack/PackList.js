import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PackItem from "./PackItem"
import './Pack.css'


class PackList extends Component {
    render() {
        return (
            <div className="pack-list-div">
                <h1 className="pack-list-header">YOUR PACKS</h1>
                <div className="scrolling-pack-div">
                    {
                        this.props.packs.map(item => {
                            this.props.packItems.filter(join => {
                                // console.log("ITEM", item, "JOIN", join)
                                if (item.id === join.packId && join.userId === this.props.activeUser.id) {
                                    console.log("THIS ONE", item)
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