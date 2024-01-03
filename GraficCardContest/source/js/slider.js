class Carousel extends HTMLElement {
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
            background-color: white;
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
            background-color: #111821;
            display: flex;
            flex: 1 0 100%;
            justify-content: center;
            width: 100%;
          }
          
          img {
            box-sizing: border-box; 
            width: 50%;
            object-fit: cover;
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
            <div class="slide">
              <img src="./source/images/bloodborne.webp" alt="bloodborne-the-board-game">
            </div>
            <div class="slide">
              <img src="./source/images/sekiro-shadows-die-twice-screen-01-ps4-eu-21jun18.webp" alt="sekiro">
            </div>
            <div class="slide">
              <img src="./source/images/Tom-Clancys-The-Division.jpg" alt="Tom-Clancys-The-Division">
            </div>
          </div>
        </div>

        `;
        const slidesContainer = this.shadow.getElementById("slides-container");
        const slide = this.shadow.querySelector(".slide");
        const prevButton = this.shadow.getElementById("slide-arrow-prev");
        const nextButton = this.shadow.getElementById("slide-arrow-next");
        
        let currentIndex = 0;
    
        const handleNextClick = () => {
          const slideWidth = slide.clientWidth;
          currentIndex = (currentIndex + 1) % slidesContainer.children.length;
          slidesContainer.scrollLeft = currentIndex * slideWidth;
        };
    
        const handlePrevClick = () => {
          const slideWidth = slide.clientWidth;
          currentIndex = (currentIndex - 1 + slidesContainer.children.length) % slidesContainer.children.length;
          slidesContainer.scrollLeft = currentIndex * slideWidth;
        };
    
        nextButton.addEventListener("click", handleNextClick);
        prevButton.addEventListener("click", handlePrevClick);
      }
    
      startAutoSlide() {
        setInterval(() => {
          const slidesContainer = this.shadow.getElementById("slides-container");
          const slide = this.shadow.querySelector(".slide");
          const slideWidth = slide.clientWidth;
          const totalSlides = slidesContainer.children.length;
    
          this.currentIndex = (this.currentIndex + 1) % totalSlides;
          slidesContainer.scrollLeft = this.currentIndex * slideWidth;
        }, 1000); // Change to 1000 milliseconds (1 second) for a 1-second interval
      }
  }


customElements.define('wc-carousel-lite', Carousel);
