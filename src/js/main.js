import GameBoard from './GameBoard.js'
import { bindChoices, bindPlayAgain } from './bindButtons.js'
import modal from './modal.js'

const game = new GameBoard(0)

// Bind the buttons.
bindChoices(game)
bindPlayAgain(game)

// Load the modal Window.
modal()
