import * as React from 'react'
import { Link, Route } from 'react-router-dom'
import GameContainer from './GameContainer'

export default function Welcome(props) {
    return (<div>
        <h1>Welcome</h1>
          <p> Let's play hangman!</p>
          <Link to={"/hangman"}>Start playing!</Link>
          <Route exact path="/components/GameContainer" component={GameContainer} />
          
          
        {console.log('Game component last')}
    </div>)
}