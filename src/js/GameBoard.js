import getWinner from './getWinner.js'

const choicesBoard = document.querySelector('[data-choices]')
const resultBoard = document.querySelector('[data-results]')
const messageBox = document.querySelector('game-message')
const scoreBox = document.querySelector('[data-score]')
const pickPlayer = document.querySelector('[data-pick="player"]')
const pickPlayerMedallion = document.querySelector('[data-pick="player"] .medallion__icon')
const pickComputer = document.querySelector('[data-pick="computer"]')
const pickComputerMedallion = document.querySelector('[data-pick="computer"] .medallion__icon')

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
    pickPlayerMedallion.src = `/src/images/icon-${this.playerChoice}.svg`
    pickPlayerMedallion.alt = `You picked ${this.playerChoice}`
    pickPlayer.classList.add(`medallion--${this.playerChoice}`)

    // Update the Computer's Medallion pick.
    pickComputerMedallion.src = `/src/images/icon-${computerChoice}.svg`
    pickComputerMedallion.alt = `The House picks ${computerChoice}`

    // Switch the boards.
    choicesBoard.classList.add('u-hidden')
    resultBoard.classList.remove('u-hidden')

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
          pickComputer.classList.add(`medallion--winner`)
          scoreBox.textContent = this.score.toString()
          break
        case 1:
          this.score++
          messageBox.setAttribute('message', 'You Win')
          pickPlayer.classList.add(`medallion--winner`)
          scoreBox.textContent = this.score.toString()
          break
      }

      pickComputer.classList.add(`medallion--${computerChoice}`)
      pickComputer.classList.remove('medallion--placeholder')
      messageBox.classList.remove('u-hidden')
    }, 1000)
  }

  /**
   * Reset the board to play again.
   */
  resetBoard () {
    this.playerChoice = ''

    choicesBoard.classList.remove('u-hidden')
    resultBoard.classList.add('u-hidden')
    messageBox.classList.add('u-hidden')
    pickPlayer.classList.remove('medallion--scissors', 'medallion--rock', 'medallion--paper', 'medallion--winner')
    pickComputer.classList.remove('medallion--scissors', 'medallion--rock', 'medallion--paper', 'medallion--winner')
    pickComputer.classList.add('medallion--placeholder')
  }

}
