class Header extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadow.innerHTML = /*HTML*/`
    <style>
     
    </style>
    <div class="top-bar">
      
      <div class="web-nav">
        <div class="hamburguer">
          <slot name="hamburguer"></slot>
        </div>
        <div class="show-mainpage-title">
          <img class="eapl-local-nav__shelf-logo" src="https://media.contentapi.ea.com/content/dam/eacom/common/ea-wordmark-network-nav-coral.svg" alt="Página de inicio de Electronic Arts">
        </div>
        <div class="list-element">
          <span>Juegos</span>
          <div class="compressed-arrow">
          </div>
        </div>
          <div class="list-element">
          <span>Mas experiencias</span>
          <div class="compressed-arrow">
          </div>
        </div>
        <div class="list-element">
          <span>Acerca de</span>
          <div class="compressed-arrow">
          </div>
        </div>
      </div>
    </div>
    `;
    }
  }
  
  customElements.define('header-component', Header);
  