class Header extends HTMLElement {
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
          display: flex;
          justify-content: space-between; /* Para separar los elementos en el contenedor */
          align-items: center; /* Para centrar verticalmente los elementos en el contenedor */
          padding: 10px; /* Añadí un poco de espacio alrededor para mejorar la apariencia */
        }
        nav{
          display:flex;
          justify-content: Space-evenly;
        }
        span{
          color: Blue;
        }
        
        .hamburguer,
        .web-title {
          display: flex;
          align-items: center; /* Para centrar verticalmente los elementos en su contenedor */
          justify-content: center;
        }

        .web-title {
          padding:1rem;
        }

      </style>
      <nav>
        <div class="hamburguer">
          <slot name="hamburguer-component"></slot>
        </div>
        <div class="web-title">
          <span>Titulo de la pagina Web</span>
        </div>
        <div class="index-list">
          <slot name="index-component"></slot>
        </div>
      </nav>
    `;
  }
}

customElements.define('header-component', Header);
