import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import NewItem from './NewItem'
import { Button } from 'reactstrap'
import { FaChevronCircleLeft } from 'react-icons/fa'
import ItemList from './ItemList'
import PackItemManager from '../../modules/PackItemManager'
import ItemManager from '../../modules/ItemManager'
import './Item.css'

class ItemMain extends Component {

    state = {
        chosenItems: [],
    }

    componentDidMount() {
        this.setState({ chosenItems: [] })
        PackItemManager.getJoinByPackId(this.props.chosenPack)
            .then(objects => {
                const itemsArray = []
                objects.map(item => {
                    ItemManager.getItem(item.id)
                        .then(i => {
                            itemsArray.push(i)
                        })
                        .then(() => this.setState({ chosenItems: itemsArray }))
                })
            })
    }

    updateChosenItemsArray = (id) => {
        const itemsArray = this.state.chosenItems;
        ItemManager.getItem(id)
            .then(i => {
                itemsArray.push(i)
            })
            .then(() => this.setState({ chosenItems: itemsArray }))
    }

    PackReturn = () => {
        this.props.history.push('packs')
    }

    render() {

        let currentPack = this.props.packs.filter((pack) => {
            if (pack.id === this.props.chosenPack) {
                return pack.name
            }
        })

        return (
            <div className="item-main-container bgImage">
                <Button onClick={this.PackReturn} className="main-btn" color="secondary" size="lg"><FaChevronCircleLeft />Back to Packs</Button>
                <NewItem
                    chosenItems={this.props.chosenItems}
                    chosenPack={this.props.chosenPack}
                    packs={this.props.packs}
                    currentPackName={currentPack}
                    addJoin={this.props.addJoin}
                    addItem={this.props.addItem}
                    changeChosenPack={this.props.changeChosenPack}
                    getJoinTableItems={this.props.getJoinTableItems}
                    updateChosenItemsArray={this.updateChosenItemsArray} />
                <ItemList
                    {...this.props}
                    items={this.props.items}
                    packs={this.props.packs}
                    packItems={this.props.packItems}
                    activeUser={this.props.activeUser}
                    chosenPack={this.props.chosenPack}
                    chosenItems={this.state.chosenItems}
                    changeChosenItems={this.props.changeChosenItems}
                    getJoinTableItems={this.props.getJoinTableItems}
                    deleteJoin={this.props.deleteJoin}
                    updateChosenItemsArray={this.updateChosenItemsArray} />
            </div>
        )
    }
}

export default withRouter(ItemMain)