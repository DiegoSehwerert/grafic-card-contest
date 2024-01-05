class Sports extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.products = [];
  }

  connectedCallback() {
    this.render();
  }

  setProducts(products) {
    this.products = products;
    this.render();
  }

  render() {
    this.shadow.innerHTML = /*HTML*/`
      <style>
        :host {
          align-items: center;
          display: flex;
          flex-direction: column;
          width: 50%;
          gap:2rem;
        }

        .title {
          align-items: center;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
          width: 100%;
        }

        .container {
          align-items: center;
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          gap: 1rem;
          width:60vw;
          max-height: 100vh;
        }

        .container_object {
          align-items: center;
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          width: 20rem;
          transition: transform 0.5s ease-in-out;
        }

        .container_object--image img {
          width: 100%;
        }

        .container_text {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.9);
          padding: 1rem;
          width: 100%;
          height:20vh;
          gap:1rem;
        }
        .container_text h2,.container_text p{
          margin:0;
        }

        .container_object:hover {
          height: auto;
          transform: translateY(-30px);
        }

        .container_object:hover .container_object--image img {
          height: 100%;
        }

        .container_object:hover .container_text {
          z-index: 1;
        }

        .container_object:hover .container_text h2,
        .container_object:hover .container_text p {
          margin: 0;
        }

        .button {
          align-items: center;
          border: 2px solid #000000;
          display: flex;
          margin-top: 2rem;
          text-decoration: none;
        }

        .button:visited {
          color: inherit;
        }

        .button_content {
          padding: 16px 24px;
        }

        .button:hover .button_content {
          cursor: pointer;
        }
      </style>
      <div class="container">
        ${this.products.map(product => this.renderProductCard(product)).join('')}
      </div>
      <div class="container_button">
        <a href="#" class="button">
          <span class="button_content">Leer mas</span>
        </a>
      </div>
    `;
  }

  renderProductCard(product) {
    return /*HTML*/`
      <div class="container_object">
        <div class="container_object--image">
          <img src="${product.image}">
        </div>
        <div class="container_text">
          <h2 class="container_text--title">${product.title}</h2>
          <p class="container_text--description">${product.description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('sports-component', Sports);

try {
  const gallery = document.querySelector('sports-component');

  const productos = [
    { image: './source/images/news.jpg', title: 'Conoce pack de Expansion', description: 'El equipo de diseño de Maxis nos muestra los nuevos complejos de alquiler residencial para llevar la narrativa Sim a viviendas multiunidades', link: './product.html' },
    { image: './source/images/news.jpg', title: 'Actualizacion de las valoraciones de pilotos F! 23 (Septiembre)', description: 'El equipo de diseño de Maxis nos muestra los nuevos complejos de alquiler residencial para llevar la narrativa Sim a viviendas multiunidades.', link: './product.html' },
    { image: './source/images/news.jpg', title: 'Revelación de kit - Soldado oscuro Moff Gideon', description: 'El equipo de diseño de Maxis nos muestra los nuevos complejos de alquiler residencial para llevar la narrativa Sim a viviendas multiunidades', link: './product.html' },
    { image: './source/images/news.jpg', title: 'Conoce a fondo a Los Sims 4 Se alquila pack de Expansion', description: 'El equipo de diseño de Maxis nos muestra los nuevos complejos de alquiler residencial para llevar la narrativa Sim a viviendas multiunidades', link: './product.html' },
    { image: './source/images/news.jpg', title: 'Conoce a fondo a Los Sims 4 Se alquila pack de Expansion', description: 'Conoce a Terrance y Shelley, miembros del equipo de VisX de Tiburon, y su papel para ofrecer los graficos mas inmersivos y autenticos hasta la fecha para nuestro publico de EA SPORTS Madden NFL 24', link: './product.html' },
    { image: './source/images/news.jpg', title: 'Conoce a fondo a Los Sims 4 Se alquila pack de Expansion', description: 'El equipo de diseño de Maxis nos muestra los nuevos complejos de alquiler residencial para llevar la narrativa Sim a viviendas multiunidades', link: './product.html' },
    // Agrega más productos según sea necesario
  ];

  gallery.setProducts(productos);
} catch (error) {

}


