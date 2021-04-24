import { LitElement, html } from 'lit'

/**
 * The Game Scorebard.
 *
 * @score - The current score
 */
export class GameScoreboard extends LitElement {
  static get properties() {
    return {
      score: { type: Number },
    }
  }

  constructor() {
    super()
    this.score = 0
  }

  render() {
    return html`
      <section class="scoreboard">
        <div class="scoreboard__title">Score</div>
        <div class="scoreboard__score">${this.score}</div>
      </section>
    `
  }

  // Render template without shadow DOM.
  createRenderRoot() {
    return this;
  }

}

window.customElements.define('game-scoreboard', GameScoreboard)
