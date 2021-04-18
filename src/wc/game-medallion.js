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
      static: { type: Boolean },
      winner: { type: Boolean }
    }
  }

  constructor() {
    super()
    this.type = ''
    this.static = false
    this.winner = false
  }

  inner() {
    return html`
      <span class="medallion__inner">
        <img src="/src/images/icon-${this.type}.svg" alt="${this.type} Choice" class="medallion__icon">
      </span>
    `
  }

  render() {
    return this.static ?
      html`
        <div class="medallion medallion--${this.type ? this.type : 'placeholder'} medallion--disable-interactions ${this.winner ? 'medallion--winner' : ''}">
          ${this.type ? this.inner() : html`<span class="medallion__inner"></span>`}
        </div>
      `:
      html`
        <button class="medallion medallion--${this.type}">
          ${this.inner()}
        </button>
      `
  }

  // Render template without shadow DOM.
  createRenderRoot() {
    return this;
  }

}

window.customElements.define('game-medallion', GameMedallion)
