/**
 * Determine the winner of the game.
 *
 * @param {string} choice
 *   rock, paper, or scissors
 * @returns {{winner: number, computerChoice: (string)}}
 */
export default function getWinner (choice) {

  const choices = [
    'rock',
    'paper',
    'scissors'
  ]

  const computerChoice = choices[Math.floor(Math.random() * choices.length)]

  let winner = 1

  choices.forEach((type, index) => {
    if (type !== choice) {
      return
    }

    const nextKey = (index + 1 >= choices.length) ? 0 : index + 1

    if (computerChoice === choice) {
      winner = -1
    }
    else if (computerChoice === choices[nextKey]) {
      winner = 0
    }
  })

  return {
    winner,
    computerChoice
  }
}
