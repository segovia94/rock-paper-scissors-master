import GameBoard from './js/GameBoard.js'
import { bindChoices, bindPlayAgain } from './js/bindButtons.js'
import modal from './js/modal.js'
import './wc/game-message.js'

const game = new GameBoard(0)

// Bind the buttons.
bindChoices(game)
bindPlayAgain(game)

// Load the modal Window.
modal()
