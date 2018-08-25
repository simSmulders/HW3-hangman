import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import NewGame from './newGame'
import GameProgress from './GameProgress'

class GameContainer extends PureComponent {
  gameStatus(props) {
    const { isWinner } = this.props

    if (isWinner === null) return (
      <div className="gameProgress">
        <GameProgress />
      </div>
    )

    if (!isWinner) return (
      <div className="gameOver">
        <p>Game Over, try again!</p>
      </div>
    )

    if (isWinner) return (
      <div className="winner">
        <p>Winner!</p>
      </div>
    )
  }


  render() {
    return(
      <div className="game wrapper">
        <header>
        </header>
        <main>
          { this.gameStatus() }
          <br/>
          <NewGame />
        </main>
      </div>
    )
  }
}

const mapStateToProps = ( { isWinner } ) => {
  return {
    isWinner
  }
}
export default connect(mapStateToProps)(GameContainer)

// import * as React from 'react'
// import { connect } from 'react-redux'
// import Game from './Game'
// import { newGame, makeGuess } from '../actions/newGame'
// import { randomWord, showGuess } from '../lib/game'

// class GameContainer extends React.PureComponent {
//     componentDidMount() {
        
//     }

//     render() {
//         return <Game />
//     }
    
// }

// const mapStateToProps = (state) => {
//     console.log('GameContainer is third in line')
//     return {}
// }

// export default connect(mapStateToProps)(GameContainer)

