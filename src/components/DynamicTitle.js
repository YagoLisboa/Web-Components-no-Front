class DynamicTitle extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open"});

        // base do component
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = "Minha notícia";

        // estilo do component
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: red;
            }
        `
        // envio para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define("dynamic-title", DynamicTitle);