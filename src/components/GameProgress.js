import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { showGuess, wrongGuessCount, wrongGuessLimit, isWinner, gameFinished } from '../lib/game'

export class GameProgress extends PureComponent {
    


  componentDidUpdate(){
    if (this.wrongGuessCount() >= 6) return this.props.gameFinished()
    if (this.isWinner()) return this.props.isWinner()
  }
  
  render() {
    const { guesses } = this.props
    return(
      <div>
      <p> {this.wrongGuessCount()} </p>
      <p>  {guesses.join(", ")} </p>
      </div>
    )
  }
}

const mapStateToProps = ( { guesses, word }) => {
  return {
    guesses,
    word,
  }
}

export default connect(mapStateToProps, { gameFinished, wrongGuessLimit, wrongGuessCount, showGuess, isWinner })(GameProgress)