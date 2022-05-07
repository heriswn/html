const bioTemplate = document.createElement("template");

bioTemplate.innerHTML = `
  <style>
    .bio {
        background-color: yellow;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        color: #333;
    }
  </style>
  <section>
    <div class="bio">
        <h2>Heri Setiawan</h2>
    </div>
  </section>
`;

class Bio extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: "closed" });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(bioTemplate.content);
  }
}

customElements.define("bio-component", Bio);
