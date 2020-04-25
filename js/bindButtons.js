// Make a Choice
export const bindChoices = (game) => {
  const buttons = document.querySelectorAll('[data-choice]')

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const choice = this.getAttribute('data-choice')
      game.setChoice(choice)
    })
  })
}

// Play Again
export const bindPlayAgain = (game) => {
  const resetButton = document.querySelector('[data-reset]')
  resetButton.addEventListener('click', () => {
    game.resetBoard()
  })
}
