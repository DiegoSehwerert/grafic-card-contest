class VideoPopup extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });


        document.addEventListener("showModalVideo", (event) => {

          });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = /*HTML*/ `
            <style>

            </style>
        `;
    }
}

customElements.define('video-popup-component', VideoPopup);
