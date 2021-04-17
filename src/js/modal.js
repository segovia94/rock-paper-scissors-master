export default function () {
  const modal = document.querySelector('.modal')
  const modalClose = document.querySelector('.modal__close')
  const btnRules = document.querySelector('[data-rules]')

  btnRules.addEventListener('click', () => {
    modal.classList.add('modal--open')
  })

  modalClose.addEventListener('click', (event) => {
    modal.classList.remove('modal--open')
  })
}
