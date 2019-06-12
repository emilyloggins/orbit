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
                            <>
                                <PackItem key={item.id} name={item.name} description={item.description} />
                            </>
                        )
                    })
                }
                </div>
            </div>

        )
    }
}

export default withRouter(PackList)

// {
//     this.props.news.map(item => {
//       if (item.userId === this.props.activeUser.id) {
//         return (
//           <>
//             {/* <FirstNewsItem key={this.findFirst.id} article={this.findFirst} /> */ }
//             <NewsItem key={ item.id } article={ item } { ...this.props }
//               deleteNews={ this.props.deleteNews } />
//           </>
//         )
//       } else if (!item) {
//         return <BlankCard />
//       }
//     })
//   }