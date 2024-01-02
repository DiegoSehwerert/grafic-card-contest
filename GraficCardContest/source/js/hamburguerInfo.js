class Hamburguer extends HTMLElement {
  constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
      this.render();
  }

  render() {
      this.shadow.innerHTML = /*HTML*/ `
  <style>
    :host {
      position:relative;
    }     
    .hamburguer {
      position: relative;
    }
    .hamburguer button {
      background: none;
      border: none;
      cursor: pointer;
    }

    .hamburguer-menu-container{
     height:100vw;
     width:100vh;
    }
    .hamburguer-menu{
      background-color: white;
      max-width: 400px;
      min-width: 400px;
      height: 100%;
      transition: margin-left 0.6s;
    }

  </style>
    <div class="hamburguer">
      <button>
        <svg viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
          <g>
            <circle cx="14.143" cy="8" r="1.857"></circle>
            <circle cx="7.996" cy="8" r="1.857"></circle>
            <circle cx="1.857" cy="8" r="1.857"></circle>
          </g>
        </svg>
      </button>
    </div>
    <div class="hamburguer-menu-container">
      <div class="hamburguer-menu">
      <span> lorem ipsum <span>
      <span> lorem ipsum <span>
      <span> lorem ipsum <span>
      <span> lorem ipsum <span>
      <span> lorem ipsum <span>
      <span> lorem ipsum <span>
      <span> lorem ipsum <span>
      <span> lorem ipsum <span>
      <span> lorem ipsum <span>
      <span> lorem ipsum <span>
      <span> lorem ipsum <span>
      <span> lorem ipsum <span>
      </div>
    </div>
  `;
  }
}

customElements.define('hamburguer-component', Hamburguer);
