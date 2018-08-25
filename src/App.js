import React, { Component } from 'react';
import './App.css';
import GameContainer from './components/GameContainer'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import WelcomeContainer from './components/WelcomeContainer'
import newGame from './actions/newGame'
import { connect } from 'react-redux'


class App extends Component {
  componentDidMount() {
    this.props.newGame()
  }

  render() {
    return (
      <Provider store={store}>
      <div className="App">
          <Route exact path="/" component={WelcomeContainer} />
          <Route exact path="/hangman" component={GameContainer} />
      </div>
      </Provider>
    );
  }
}

export default connect(null, {newGame} )(App);
