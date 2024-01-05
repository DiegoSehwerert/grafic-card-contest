class Gallery extends HTMLElement {
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
            :host{
              align-items:center;
              display:flex;
              flex-direction:column;
              width:50%;
            }

            .title{
              align-items:center;
              box-sizing: border-box;
              display:flex;
              justify-content:center;
              margin-bottom:1rem;
              width:100%;
            }

            .title_content{
              font-size:2rem;
            }

            .container{
              align-items:center;
              box-sizing: border-box;
              display:flex;
              flex-wrap: wrap;
              justify-content:space-evenly;
              gap:1rem;
            }
            .container_object{
              align-items:center;
              display:flex;
              justify-content:center;
              overflow: hidden;
              position: relative;
              width:18rem;
              height:18rem;

            }
            .container_object--image{
              height: auto;
              transition: 0.35s;
              width:100%;
              height:100%;
              object-fit: cover;
              transition:0.3s;
            }
            .container_object--container_inside{
              align-items:center;
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction:column;
              justify-content:center;
              position: absolute;
            }
            .container_object--container_inside--imageSmall{
              left: 0;
              opacity: 0; /* Inicialmente, las imágenes pequeñas no son visibles */
              top: 0;
              transition: 0.3s; 
              width:50%;
            }
            
            .container_object:hover .container_object--image {
              filter: brightness(70%);
              cursor: pointer;
            }
            .container_object:hover .container_object--container_inside--imageSmall{
              opacity:1;
              cursor: pointer;
            }
            .buttonImage{
              align-items:center;
              border: 2px solid #ffffff;
              display:flex;
              margin-top:2rem;
              opacity:0;
              text-decoration:none;
            }
            .buttonImage:visited {
              color: inherit;
            }
            .buttonImageContent{
              color:#ffffff;
              padding: 16px 24px;
            }
            .buttonImage:hover .buttonImageContent{
              cursor: pointer;
            }
            .container_object:hover .buttonImage{
              opacity:1;
              cursor: pointer;
            }

            .button{
              align-items:center;
              border: 2px solid #000000;
              display:flex;
              margin-top:2rem;
              text-decoration:none;
            }
            .button:visited {
              color: inherit;
            }
            .button_content{
              padding: 16px 24px;
            }
            .button:hover .button_content{
              cursor: pointer;
            }

          </style>
           <div class="title">
           <span class="title_content">Juegos Destacados</span>
       </div>
       <div class="container">
           ${this.products.map(product => this.renderProductCard(product)).join('')}
       </div>
       <a href="#" class="button">
           <span class="button_content">Ultimos Juegos</span>
       </a>
   `;
}

renderProductCard(product) {
   return /*HTML*/`
       <div class="container_object">
           <img src="${product.image}" class="container_object--image">
           <div class="container_object--container_inside">
               <img src="${product.smallImage}" class="container_object--container_inside--imageSmall">
               <a href="${product.link}" class="buttonImage">
                   <span class="buttonImageContent">Comprar</span>
               </a>
           </div>
       </div>
   `;
}
}

customElements.define('gallery-component', Gallery);

try {
const gallery = document.querySelector('gallery-component');

gallery.setProducts([
  { image: './source/images/ufc-51x1.jpg', smallImage: './source/images/ufc5-logo-reveal-white.png', link: './product.html' },
  { image: './source/images/ufc-51x1.jpg', smallImage: './source/images/ufc5-logo-reveal-white.png', link: './product.html' },
  { image: './source/images/ufc-51x1.jpg', smallImage: './source/images/ufc5-logo-reveal-white.png', link: './product.html' },
  { image: './source/images/ufc-51x1.jpg', smallImage: './source/images/ufc5-logo-reveal-white.png', link: './product.html' },
  { image: './source/images/ufc-51x1.jpg', smallImage: './source/images/ufc5-logo-reveal-white.png', link: './product.html' },
  { image: './source/images/bloodborne.webp', smallImage: './source/images/ufc5-logo-reveal-white.png', link: './product.html' },
  // Agrega más productos según sea necesario
]);
} catch (error) {
}


