class GameCarouse extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.sliderInterval = null; // Almacena el ID del intervalo para que puedas detenerlo más tarde
  }

  connectedCallback() {
    this.render();
    this.initializeSlider();
  }

  initializeSlider() {
    const slidesContainer = this.shadow.getElementById("slides-container");
    const slide = this.shadow.querySelector(".slide");
    const prevButton = this.shadow.getElementById("slide-arrow-prev");
    const nextButton = this.shadow.getElementById("slide-arrow-next");
    const indicatorWrapper = this.shadow.getElementById("indicator-wrapper");
    const video = this.shadow.querySelector(".slideVid");

    let currentIndex = 0;

    const handleNextClick = () => {
      const slideWidth = slide.clientWidth;
      currentIndex = (currentIndex + 1) % slidesContainer.children.length;
      slidesContainer.scrollLeft = currentIndex * slideWidth;
      updateIndicators();
    };

    this.sliderInterval = setInterval(handleNextClick, 4000);

    const handlePrevClick = () => {
      const slideWidth = slide.clientWidth;
      currentIndex = (currentIndex - 1 + slidesContainer.children.length) % slidesContainer.children.length;
      slidesContainer.scrollLeft = currentIndex * slideWidth;
      updateIndicators();
    };

    const updateIndicators = () => {
      const indicators = Array.from(indicatorWrapper.children);
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
      });
    };

    // Crear indicadores
    for (let i = 0; i < slidesContainer.children.length; i++) {
      const indicator = document.createElement("div");
      indicator.classList.add("indicator");
      indicator.addEventListener("click", () => {
        currentIndex = i;
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft = currentIndex * slideWidth;
        updateIndicators();
      });
      indicatorWrapper.appendChild(indicator);
    }

    // Marcar el primer indicador como activo al cargar la página
    updateIndicators();

    nextButton.addEventListener("click", handleNextClick);
    prevButton.addEventListener("click", handlePrevClick);

    // Agregar controlador de eventos al video
    video.addEventListener("click", (event) => {
      event.target.closest('.filter-button') 
        document.dispatchEvent(new CustomEvent('showModalVideo'));
    });
  }



  render() {
    this.shadow.innerHTML = /*HTML*/`
        <style> 
          .slider-wrapper {
            margin-top: 1rem;
            position: relative;
            overflow: hidden;
          }
          
          .slides-container {
            height: 100%;
            width: 100%;
            display: flex;
            overflow: scroll;
            scroll-behavior: smooth;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .slides-container::-webkit-scrollbar { 
            width: 0;
            height: 0;
          }
          
          .slide-arrow {
            position: absolute;
            display: flex;
            top: 0;
            bottom: 0;
            margin: auto;
            height: 4rem;
            background: none;
            border: none;
            width: 2rem;
            font-size: 3rem;
            padding: 0;
            cursor: pointer;
            opacity: 0.5;
            transition: opacity 100ms;
          }
          
          .slide-arrow:hover{
            opacity: 1;
          }
          
          #slide-arrow-prev {
            left: 0;
            padding-left: 0.25rem;
            border-radius: 0 2rem 2rem 0;
          }
          
          #slide-arrow-next {
            right: 0;
            padding-left: 0.75rem;
            border-radius: 2rem 0 0 2rem;
          }
          
          .slide {
            align-items: center;
            background-color:#f3f3f3;
            display: flex;
            flex: 1 0 100%;
            flex-direction:column;
            justify-content: center;
            width: 100%;
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
              padding: 0.1rem 5rem;
            }
          
          img {
            box-sizing: border-box; 
            width: 50%;
            object-fit: cover;
          }

          .indicator-wrapper {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
          }

          .indicator {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #999;
            margin: 0 5px;
            cursor: pointer;
          }

          .indicator.active {
            background-color: #333;
          }
      
        </style>
        <div class="slider-wrapper">
          <button class="slide-arrow" id="slide-arrow-prev">
            &#8249;
          </button>
          <button class="slide-arrow" id="slide-arrow-next">
            &#8250;
          </button>
          <div class="slides-container" id="slides-container">
            <div class="slide slideVid">
              <img src="./source/images/sekiro-video.avif" alt="Tom-Clancys-The-Division">
            </div>
            <div class="slide">
              <img src="./source/images/Sekiro_04.jpg" alt="bloodborne-the-board-game">
            </div>
            <div class="slide">
              <img src="./source/images/Sekiro_24.jpg" alt="Tom-Clancys-The-Division">
            </div>
            <div class="slide">
              <img src="./source/images/Sekiro-screenshots_27.jpg" alt="Tom-Clancys-The-Division">
            </div>
            <div class="slide">
              <img src="./source/images/sekiro-shadows-die-twice-screen-01-ps4-eu-21jun18.webp" alt="Tom-Clancys-The-Division">
            </div>
          </div>
          <div class="indicator-wrapper" id="indicator-wrapper"></div>
        </div>
        `;
      }
    }
    
customElements.define('game-slider-component', GameCarouse);
