import React, { Component } from 'react'

class ItemContainer extends Component {

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

export default ItemContainer