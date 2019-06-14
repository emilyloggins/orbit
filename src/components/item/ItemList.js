import React, { Component } from 'react'
import PackItemManager from '../../modules/PackItemManager'
import ItemContainer from './ItemContainer'

class ItemList extends Component {

    PackReturn = () => {
        this.props.history.push('packs')
    }
    getJoinTable = (id) => {
        PackItemManager.getJoinByPackId(id)
            .then((item) => console.log(item))
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