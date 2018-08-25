import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import newGame from '../actions/newGame'

class NewGame extends PureComponent {

  reset() {
    this.props.newGame()
  }

  render() {
    return(
      <button className="button" onClick={this.reset.bind(this)}>New Game</button>
    )
  }
}


export default connect(null, { newGame })(NewGame)