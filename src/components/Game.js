import * as React from 'react'
import { randomWord } from '../lib/game';

export default function Game(props) {
    return (<div>
        <h1> Hangman </h1>
        {console.log('Game component last')}
        
        <label>Word to guess : </label>
        <div>{randomWord()}</div>
    </div>)
}