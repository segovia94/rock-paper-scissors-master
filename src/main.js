import GameBoard from './js/GameBoard.js'
import { bindChoices, bindPlayAgain } from './js/bindButtons.js'
import modal from './js/modal.js'
import './wc/game-message.js'
import './wc/game-scoreboard.js'
import './wc/game-modal.js'
import './wc/game-medallion.js'
import './wc/game-pick.js'
import './wc/l-choices.js'
import './wc/l-results.js'

const game = new GameBoard(0)

// Bind the buttons.
bindChoices(game)
bindPlayAgain(game)

// Load the modal Window.
modal()
