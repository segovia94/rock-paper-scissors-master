import getWinner from './getWinner.js'

const choicesBoard = document.querySelector('[data-choices]')
const resultBoard = document.querySelector('[data-results]')
const messageBox = document.querySelector('game-message')
const scoreBox = document.querySelector('game-scoreboard')
const pickPlayer = document.querySelector('[data-pick="player"]')
const pickComputer = document.querySelector('[data-pick="computer"]')
const buttons = document.querySelectorAll('game-medallion')

/**
 * The GameBoard.
 */
export default class GameBoard {
  /**
   * The cumulated score.
   *
   * @type {number}
   */
  score = 0

  /**
   * The player's choice (rock, paper, or scissors)
   *
   * @type {string}
   */
  playerChoice = ''

  /**
   * Set initial score for the game.
   *
   * @param {number} initialScore
   */
  constructor (initialScore) {
    this.score = initialScore
  }

  /**
   * Update the choice and advance the game.
   *
   * @param {string} choice
   *   rock, paper, or scissors.
   */
  setChoice (choice) {
    this.playerChoice = choice
    this.updateBoard()
  }

  /**
   * Update the DOM in the game board.
   */
  updateBoard () {
    // Get the winner.
    const { winner, computerChoice } = getWinner(this.playerChoice)

    // Update the Player's Medallion pick.
    pickPlayer.setAttribute('type', this.playerChoice)

    // Switch the boards.
    choicesBoard.hidden = true
    resultBoard.hidden = false

    // Wait a second to build anticipation.
    setTimeout(() => {
      // Set the success message.
      switch (winner) {
        case -1:
          messageBox.setAttribute('message', `It's a Tie`)
          break
        case 0:
          this.score--
          messageBox.setAttribute('message', 'You Lose')
          pickComputer.setAttribute('winner', true)
          scoreBox.setAttribute('score', this.score)
          break
        case 1:
          this.score++
          messageBox.setAttribute('message', 'You Win')
          pickPlayer.setAttribute('winner', true)
          scoreBox.setAttribute('score', this.score)
          break
      }

      // Update the Computer's Medallion pick.
      pickComputer.setAttribute('type', computerChoice)
      messageBox.hidden = false
    }, 1000)
  }

  /**
   * Reset the board to play again.
   */
  resetBoard () {
    this.playerChoice = ''

    choicesBoard.hidden = false
    resultBoard.hidden = true
    messageBox.hidden = true

    const removeAttr = ['type', 'winner']
    removeAttr.forEach(attribute => {
      pickPlayer.removeAttribute(attribute)
      pickComputer.removeAttribute(attribute)
    });

    buttons.forEach(button => {
      button.disabled = false
    })
  }

}
