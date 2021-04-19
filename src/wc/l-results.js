import { LitElement, html, css } from 'lit-element'

/**
 * Layout Results
 */
export class LResults extends LitElement {
  static get styles() {
    return css`
      :host {
        display: grid;
        grid-template-columns: 42% 16% 42%; /* Makes each Medallion 42% wide. */
        row-gap: 5vh;
        flex-grow: 1;
        margin-top: 5vh;
        animation: fade-in .5s 1;
      }

      slot[name=player]::slotted(*) {
        grid-column: 1 / 2;
      }

      slot[name=computer]::slotted(*) {
        grid-column: 3 / 4;
      }

      slot[name=message]::slotted(*) {
        grid-column: 1 / 4;
        grid-row: 2 / 3;
      }
    `
  }

  render() {
    return html`
      <slot name="player"></slot>
      <slot name="computer"></slot>
      <slot name="message"></slot>
    `
  }

}

window.customElements.define('l-results', LResults)
