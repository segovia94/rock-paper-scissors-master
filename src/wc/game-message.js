import { LitElement, html, css } from 'lit-element'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class GameMessage extends LitElement {
  static get styles() {
    return css`
      :host,
      *:before,
      *:after {
        box-sizing: border-box;
      }

      :host {
        box-sizing: border-box;
        width: 100%;
        text-align: center;
        color: #fff;
        font-family: "Barlow Semi Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: 600;
        line-height: 1.6;
        font-size: 1.125rem;
      }

      .status {
        margin-bottom: 0;
        text-transform: uppercase;
        font-size: 4rem;
        font-weight: 700;
      }

      .btn {
        appearance: button;
        display: inline-block;
        background-color: #fff;
        border: 2px solid #fff;
        border-radius: .6rem;
        color: hsl(229, 25%, 31%);
        text-transform: uppercase;
        padding: 1rem 4rem;
        letter-spacing: 0.15rem;
        cursor: pointer;
        font-size: 100%;
        font-family: "Barlow Semi Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }

      .btn:hover {
        background-color: $white;
        color: hsl(229, 25%, 31%);
      }
    `
  }

  static get properties() {
    return {
      message: { type: String },
    }
  }

  constructor() {
    super()
    this.message = 'You Lose'
  }

  render() {
    return html`
      <p class="status">${this.message}</p>
      <button class="btn" @click=${this._playAgain}>Play Again</button>
    `
  }

  _playAgain() {
    this.dispatchEvent(new Event('playAgain'));
  }
}

window.customElements.define('game-message', GameMessage)
