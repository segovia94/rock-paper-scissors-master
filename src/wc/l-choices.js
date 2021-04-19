import { LitElement, html, css } from 'lit-element'

/**
 * Layout Choices
 */
export class LChoices extends LitElement {
  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 29% 13% 16% 13% 29%; /* Makes each Medallion 42% wide. */
        row-gap: 7%;
        align-self: center;
        flex-grow: 1;
        background: url("/src/images/bg-triangle.svg") no-repeat center 60%;
        background-size: 55%;
      }

      slot[name=rock]::slotted(*) {
        grid-column: 2 / 5;
        grid-row: 2 / 3;
      }

      slot[name=paper]::slotted(*) {
        grid-column: 1 / 3;
      }

      slot[name=scissors]::slotted(*) {
        grid-column: 4 / 6;
      }

    `
  }

  render() {
    return html`
      <slot name="rock"></slot>
      <slot name="paper"></slot>
      <slot name="scissors"></slot>
    `
  }

}

window.customElements.define('l-choices', LChoices)
