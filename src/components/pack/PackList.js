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
                        })
                    }
                </div>
            </div>

        )
    }
}

export default withRouter(PackList)

