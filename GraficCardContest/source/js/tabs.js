class Tabs extends HTMLElement {
  constructor(tabsData) {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.tabsData = tabsData || [];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = /*HTML*/`
        <style>
          :host{
            width:100%;
          }

          section {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .tab-container {
            width: 100%;
            max-width: 80vw;
            min-height: 30vh;
          }

          .tabs {
            display: flex;
            overflow: scroll;
          }

          .tabs::-webkit-scrollbar { 
            width: 0;
            height: 0;
          }

          .tabs button {
            width: 100%;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            text-transform: uppercase;
            background: none;
            color: #000000;
            opacity: 0.6;
          }

          .tabs button.active,
          .tabs button:hover {
            opacity: 1;
          }

          .tab-content {
            align-items:center;
            display:flex;
            justify-content:center;
            max-width: 80vw;
            margin-top:2rem;
          }

          .hidden {
            display: none;
          }

          a {
            color: #fc7904;
            text-decoration: none;
          }
        </style>
        <section>
          <h1>Ultimas noticias</h1>
            <div class="tab-container">
              <!--  Tab Buttons  -->
            <div class="tabs">
              <button class="tab active">Noticias</button>
              <button class="tab">Sports</button>
              <button class="tab">Star Wars</button>
            </div>
              <!-- Tab Content  -->
            <div class="tab-content">
              <slot name="news"></slot>
            </div>
            <div class="tab-content hidden">
              <slot name="sports"></slot>
            </div>
            <div class="tab-content hidden">
              <slot name="star-wars"></slot>
            </div>
        </section>     
      `;
      
    const tabs = this.shadow.querySelectorAll(".tab");
    const tabContent = this.shadow.querySelectorAll(".tab-content");

    tabs.forEach((tab, i) => {
      tab.addEventListener("click", function () {
        tabs.forEach(tab => tab.classList.remove("active"));
        this.classList.add("active");
        tabContent.forEach(content => content.classList.add("hidden"));
        tabContent[i].classList.remove("hidden");
      });
    });
  }

}

customElements.define('tabs-component', Tabs);
