import modal from './modal.js'

// Load the modal Window
modal()

let state = {
  step: 1,
  score: 0,
  playerChoice: '',
}

const choicesBoard = document.querySelector('[data-choices]')
const resultBoard = document.querySelector('[data-results]')
const messageBox = document.querySelector('[data-message]')
const messageStatus = document.querySelector('[data-message-status]')
const scoreBox = document.querySelector('[data-score]')
const pickPlayer = document.querySelector('[data-pick="player"]')
const pickPlayerMedallion = document.querySelector('[data-pick="player"] .medallion__icon')
const pickComputer = document.querySelector('[data-pick="computer"]')
const pickComputerMedallion = document.querySelector('[data-pick="computer"] .medallion__icon')

const getWinner = (choice) => {

  const choices = [
    'rock',
    'paper',
    'scissors'
  ]

  const computerChoice = choices[Math.floor(Math.random() * choices.length)]

  let winner = 1

  choices.forEach((type, index) => {
    if (type !== choice) return

    const nextKey = (index + 1 >= choices.length) ? 0 : index + 1

    if (computerChoice === choice) {
      winner = -1
    } else if (computerChoice === choices[nextKey]) {
      winner = 0
    }
  })

  return {
    winner,
    computerChoice
  }
}

const updateBoard = (options) => {
  state = { ...state, ...options }

  pickPlayerMedallion.src = `/images/icon-${state.playerChoice}.svg`
  pickPlayerMedallion.alt = `You picked ${state.playerChoice}`
  pickPlayer.classList.add(`medallion--${state.playerChoice}`)

  // Switch the boards.
  choicesBoard.classList.add('u-hidden')
  resultBoard.classList.remove('u-hidden')

  // Get the winner.
  const { winner, computerChoice } = getWinner(state.playerChoice)

  pickComputerMedallion.src = `/images/icon-${computerChoice}.svg`
  pickComputerMedallion.alt = `The House picks ${computerChoice}`

  setTimeout(() => {
    // Set the success message.
    switch (winner) {
      case -1:
        messageStatus.textContent = `It's a Tie`
        break
      case 0:
        messageStatus.textContent = 'You Lose'
        pickComputer.classList.add(`medallion--winner`)
        break
      case 1:
        messageStatus.textContent = 'You Win'
        pickPlayer.classList.add(`medallion--winner`)
        state.score++
        scoreBox.textContent = state.score
        break
    }

    pickComputer.classList.add(`medallion--${computerChoice}`)
    pickComputer.classList.remove('medallion--placeholder')
    messageBox.classList.remove('u-hidden')
  }, 1000)
}

const setChoice = (choice) => {
  updateBoard({ playerChoice: choice })
}

const resetBoard = () => {
  state = {
    ...state,
    step: 1,
    playerChoice: '',
  }

  choicesBoard.classList.remove('u-hidden')
  resultBoard.classList.add('u-hidden')
  messageBox.classList.add('u-hidden')
  pickPlayer.classList.remove('medallion--scissors', 'medallion--rock', 'medallion--paper', 'medallion--winner')
  pickComputer.classList.remove('medallion--scissors', 'medallion--rock', 'medallion--paper', 'medallion--winner')
  pickComputer.classList.add('medallion--placeholder')
}

// Make a Choice
const buttons = document.querySelectorAll('[data-choice]')

buttons.forEach(button => {
  button.addEventListener('click', function () {
    const choice = this.getAttribute('data-choice')
    setChoice(choice)
  })
})

// Play Again
const resetButton = document.querySelector('[data-reset]')
resetButton.addEventListener('click', () => {
  resetBoard()
})