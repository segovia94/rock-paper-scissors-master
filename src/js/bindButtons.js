// Make a Choice
export const bindChoices = (game) => {
  const buttons = document.querySelectorAll('l-choices game-medallion')

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const choice = this.getAttribute('type')
      setTimeout(() => {
        game.setChoice(choice)
      }, 500)

      // Disable clicking again or another button.
      buttons.forEach(button => {
        button.disabled = true
      })
    })
  })
}

// Play Again
export const bindPlayAgain = (game) => {
  const resetButton = document.querySelector('game-message')
  resetButton.addEventListener('playAgain', () => {
    game.resetBoard()
  })
}
