import React, { Component } from 'react'
import PackItemManager from '../../modules/PackItemManager'
import { Button } from 'reactstrap'
import ItemContainer from './ItemContainer'

class ItemList extends Component {

    PackReturn = () => {
        this.props.history.push('packs')
    }
    getJoinTable = () => {
        // PackItemManager.getJoinByPackId(id)
        //     .then((item) => console.log(item))
        console.log(this.props.items.name)
    }
    render() {
        return (
            <div>
                {
                    this.props.items.map(item => {
                        return (
                            <>
                                <ItemContainer
                                    {...this.props}
                                    packItems={this.props.packItems}
                                    key={item.id}
                                    item={item}
                                    name={item.name} />
                            </>
                        )
                    })
                }
            </div>
        )
    }
}

export default ItemList