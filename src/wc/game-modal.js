import { LitElement, html } from 'lit'

/**
 * Modal window for the Rules.
 */
export class GameModal extends LitElement {
  static get properties() {
    return {
      open: { type: Boolean },
    }
  }

  constructor() {
    super()
    this.open = false
  }

  render() {
    return html`
      <aside class="modal ${this.open ? 'modal--open': ''}">
        <div class="modal__inner">
          <h1 class="modal__title">Rules</h1>
          <img src="/src/images/image-rules.svg" alt="Rules" class="modal__graphic">
          <button class="modal__close">
            <img src="/src/images/icon-close.svg" alt="Close the Modal" @click=${this._closeModal}>
          </button>
        </div>
      </aside>
    `
  }

  _closeModal() {
    this.removeAttribute('open')
  }

  // Render template without shadow DOM.
  createRenderRoot() {
    return this;
  }

}

window.customElements.define('game-modal', GameModal)
