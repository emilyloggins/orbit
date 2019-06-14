import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from "../components/Home"
import Landing from "../components/welcome/Landing"
import PackMain from "../components/pack/PackMain"
import PackManager from "../modules/PackManager"
import PackItemManager from "../modules/PackItemManager"
import ItemManager from '../modules/ItemManager';
import ItemMain from '../components/item/ItemMain'

class ApplicationViews extends Component {

  state = {
    packItems: [],
    packs: [],
    items: [],
    chosenPack: ''
  }

  isAuthenticated = () => localStorage.getItem("user") !== null;

  // pack calls

  addPack = pack => {
    const newState = {};
    return PackManager.addPack(pack)
      .then(() => PackManager.getAllPacks())
      .then(packs => newState.packs = packs)
      .then((packs) => {
        this.props.history.push("/packs")
        this.setState(newState)
        //return tasks so it can be used in the form
        return packs;
      });
  };

  deletePack = id => {
    const newState = {};
    PackManager.deletePack(id)
      .then(PackManager.getAllPacks)
      .then(packs => (newState.packs = packs))
      .then(() => {
        this.props.history.push("/packs");
        this.setState(newState);
      });
  };

  // Join table db calls
  deleteJoin = id => {
    const newState = {};
    PackItemManager.deleteJoin(id)
      .then(PackItemManager.getAllJoins)
      .then(packItems => (newState.packItems = packItems))
      .then(() => {
        this.props.history.push("/packs");
        this.setState(newState);
      });
  };

  // item calls

  componentDidMount() {
    const newState = {};
    PackManager.getAllPacks()
      .then(packs => { newState.packs = packs })
      .then(() => this.setState(newState));
    PackItemManager.getAllJoins()
      .then(packItems => { newState.packItems = packItems })
      .then(() => this.setState(newState));
    ItemManager.getAllItems()
      .then(items => { newState.items = items })
      .then(() => this.setState(newState));
  }

//  end calls

changeChosenPack = (id) => {
  this.setState({ chosenPack: id })
}

  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/welcome" render={(props) => <Landing user={this.props.user} />} />
          <Route exact path="/home" render={props => {
            if (this.props.activeUser) {
              return <Home {...props}
                activeUser={this.props.activeUser}
                clearUser={this.props.clearUser} />
            } else {
              return <Redirect to="/welcome" />
            }
          }} />
          <Route path="/login" render={(props) =>
            <Login {...props} {...this.props}
            />}
          />
          <Route path="/register" render={(props) =>
            <Register {...props}
              setUser={this.props.setUser} />}
          />
          <Route path="/packs" render={props => {
            if (this.props.activeUser) {
              return <PackMain {...props}
                addPack={this.addPack}
                packs={this.state.packs}
                activeUser={this.props.activeUser}
                deletePack={this.deletePack}
                packItems={this.state.packItems}
                changeChosenPack={this.changeChosenPack} />
            } else {
              return <Redirect to="/welcome" />
            }
          }} />
          <Route path="/items" render={(props) =>
            <ItemMain {...props}
              items={this.state.items}
              packs={this.state.packs}
              packItems={this.state.packItems}
              activeUser={this.props.activeUser}
              chosenPack={this.state.chosenPack} />}
          />
        </Router>
      </div>
    );
  }
}

export default withRouter(ApplicationViews)

