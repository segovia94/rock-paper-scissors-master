export default function () {
  const modal = document.querySelector('game-modal')
  const btnRules = document.querySelector('[data-rules]')

  btnRules.addEventListener('click', () => {
    modal.setAttribute('open', true)
  })
}
