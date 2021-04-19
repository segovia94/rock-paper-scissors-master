import { LitElement, html, css } from 'lit-element'

/**
 * Game Pick.
 */
export class GamePick extends LitElement {
  static get styles() {
    return css`
      :host {
        text-align: center;
      }

      div {
        margin-top: 1.5rem;
        letter-spacing: 0.15rem;
        line-height: 1.2;
        text-transform: uppercase;
      }
    `
  }

  render() {
    return html`
      <slot></slot>
      <div><slot name="title"></slot></div>
    `
  }
}

window.customElements.define('game-pick', GamePick)
