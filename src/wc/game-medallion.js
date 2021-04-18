import { LitElement, html } from 'lit-element'

/**
 * Choice Medallion.
 *
 * @type - choice type rock, paper, scissors
 */
export class GameMedallion extends LitElement {
  static get properties() {
    return {
      type: { type: String },
    }
  }

  constructor() {
    super()
    this.type = 'rock'
  }

  render() {
    return html`
      <button class="medallion medallion--${this.type}">
        <span class="medallion__inner">
          <img src="/src/images/icon-${this.type}.svg" alt="${this.type} Choice" class="medallion__icon">
        </span>
      </button>
    `
  }

  // Render template without shadow DOM.
  createRenderRoot() {
    return this;
  }

}

window.customElements.define('game-medallion', GameMedallion)
