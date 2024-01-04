class Index extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML += /*html*/ `
            <style>
               .container {
                    overflow: hidden;
                    background-color:inherit;
                    font-family: Arial;
                }

                .container a {
                    float: left;
                    font-size: 16px;
                    color: #000000;
                    text-align: center;
                    padding: 14px 16px;
                    text-decoration: none;
                }

                .dropdown {
                    float: left;
                    overflow: hidden;
                }

                .dropdown .dropbtn {
                    font-size: 16px;    
                    border: none;
                    outline: none;
                    color: #000000;
                    padding: 14px 16px;
                    background-color: inherit;
                }

                .container a:hover, .dropdown:hover .dropbtn {
                    background-color: red;
                }

                .dropdown-content {
                    display: none;
                    position: absolute;
                    background-color: #f9f9f9;
                    min-width: 160px;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    z-index: 1;
                }
                
                .dropdown-content-container {
                  display:flex
                }

                .dropdown-content a {
                    float: none;
                    color: black;
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;
                    text-align: left;
                }

                .dropdown-content a:hover {
                    background-color: #ddd;
                }

                .dropdown:hover .dropdown-content {
                    display: block;
                }
            </style>
            <div class="container">
            <div class="dropdown">
              <button class="dropbtn">Juegos</button>
              <div class="dropdown-content">
                <div class="dropdown-content-container">
                  <div class="content-container">
                    <p>Explorar juegos</p>
                    <a href="#">Ultimos juegos</a>
                    <a href="#">Proximamente</a>
                    <a href="#">Juegos gratuitos</a>
                    <a href="#">EA SPORT</a>
                    <a href="#">EA Originals</a>
                    <a href="#">Biblioteca de juegos</a>
                    <a href="#">Ofertas de la EA app</a>
                  </div>
                  <div class="content-container">
                    <p>Plataformas</p>
                    <a href="#">PC</a>
                    <a href="#">PlayStation 5</a>
                    <a href="#">XboxSeries X</a>
                    <a href="#">Nintendo Switch</a>
                    <a href="#">Moviles</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Experiencias </button>
                <div class="dropdown-content">
                  <a href="#">Ea Play</a>
                  <a href="#">Ea App</a>
                  <a href="#">Juego competitivo</a>
                  <a href="#">Ea Play Live</a>
                  <a href="#">Pruebas de juego</a>
                </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">Acerca de</button>
              <div class="dropdown-content">
                <a href="#">Compañia</a>
                <a href="#">Estudios de EA</a>
                <a href="#">Trabajar en EA</a>
                <a href="#">Nuestra tecnologia</a>
                <a href="#">EA Partners</a>
                <a href="#">Noticias</a>
                <a href="#">EA por dentro</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">Compromisos</button>
              <div class="dropdown-content">
                <a href="#">Nuestros Compromisos</a>
                <a href="#">Juego positivo</a>
                <a href="#">Diversidad e inclusion</a>
                <a href="#">Impacto Social</a>
                <a href="#">Empleados y cultura</a>
                <a href="#">Medioambiente</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">Recursos</button>
              <div class="dropdown-content">
                <a href="#">Ayudas</a>
                <a href="#">Foros</a>
                <a href="#">Herram. parentales y de juegos</a>
                <a href="#">Accesibilidad</a>
                <a href="#">Prensa</a>
                <a href="#">Inversores</a>
              </div>
            </div>
        `;
    }
}

customElements.define('index-component', Index);
