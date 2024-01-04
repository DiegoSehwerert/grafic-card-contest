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
    this.shadow.innerHTML = `
      <style>
        .tabs {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tab button {
          height: 2.2rem;
          padding: 0 2rem;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }

        .tab.active {
          background-color: rgb(41, 182, 182);
        }

        .tab button p {
          color: hsl(183.09, 97.77%, 35.1%);
        }

        .tab.active button p {
          color: white;
        }

        .tab-content {
          display: none;
        }

        .tab-content.active {
          display: flex;
        }

        .card {
          text-align: center;
          width: 100%;
        }

        .card img {
          max-width: 100%;
          height: auto;
        }
      </style>

      <div class="tabs">
        ${this.tabsData.map((tab, index) => `
          <div class="tab" data-index="${index}">
            <button>
              <p>${tab.tabTitle}</p>
            </button>
          </div>
        `).join('')}
      </div>

      <form>
        ${this.tabsData.map((tab, index) => `
          <div class="tab-content ${index === 0 ? 'active' : ''}" data-index="${index}">
            <div class="card">
              <img src="${tab.image}" alt="Image ${index}">
              <h2>${tab.title}</h2>
              <p>${tab.description}</p>
            </div>
          </div>
        `).join('')}
      </form>
    `;

    const allTabs = this.shadow.querySelectorAll('.tab');
    const tabContents = this.shadow.querySelectorAll('.tab-content');

    allTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        allTabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        tabContents.forEach((tabContent) => {
          tabContent.classList.remove('active');
        });

        tabContents[index].classList.add('active');
      });
    });
  }
}

// Ejemplo de uso:
const tabsData = [
  {
    image: './source/images/bloodborne.webp',
    tabTitle: "no",
    title: 'Título para la pestaña General',
    description: 'Descripción para la pestaña General',
  },
  {
    image: './source/images/bloodborne.webp',
    tabTitle: "no",
    title: 'Título para la pestaña Imágenes',
    description: 'Descripción para la pestaña Imágenes',
  },
  {
    image: './source/images/bloodborne.webp',
    tabTitle: "no",
    title: 'Título para la pestaña Imágenes',
    description: 'Descripción para la pestaña X',
  },
  {
    image: './source/images/bloodborne.webp',
    tabTitle: "no",
    title: 'Título para la pestaña No',
    description: 'Descripción para la pestaña c',
  },
  // Puedes añadir más objetos para más pestañas según sea necesario
];

customElements.define('tabs-component', Tabs);

// Crear una instancia del componente y pasar los datos de las pestañas
const tabsComponent = document.createElement('tabs-component');
tabsComponent.tabsData = tabsData;
document.body.appendChild(tabsComponent);
