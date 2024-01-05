class VideoPopup extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });


        document.addEventListener("showModalVideo", (event) => {
            this.classList.add("active");
            this.handleActive(event);
          });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = /*HTML*/ `
            <style>
                :host {
                    display: none;
                    justify-content: center;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    z-index: 1000;
                }

                :host(.active) {
                    display: flex;
                }

                #popup-content {
                    width: 70%;
                    height: 70%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .video-container {
                    width: 80%;
                    height: 80%;
                    position: relative;
                }

                .close-button {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: none;
                    border: none;
                    color: #fff;
                    font-size: 1.5rem;
                    cursor: pointer;
                }
            </style>
            <div id="popup-content">
                <div class="video-container">
                    <button class="close-button" id="close-button">&times;</button>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/0BAI1mxaACw?si=75Zje4GFRhAvvsAy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        `;

        // Agregar evento al botón de cerrar
        const closeButton = this.shadow.getElementById("close-button");
        closeButton.addEventListener("click", () => {
            this.remove(); // Cierra el componente emergente al hacer clic en el botón de cerrar
        });
    }

    handleActive() {
        this.classList.add("active"); // Agrega la clase "active" al host
    }
}

customElements.define('video-popup-component', VideoPopup);
