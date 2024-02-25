class CardNews extends HTMLElement {
    constructor() {
        super();
        
        const shadow = this.attachShadow({ mode: "open"});
        // shadow.innerHTML = "<h1>Hello World!</h1>";
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const author = document.createElement("span");
        author.textContent = "By " + (this.getAttribute("author") || "Anonym");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "./assets/foto-default.webp";
        newsImage.alt = "Foto da Notícia";
        cardRight.appendChild(newsImage);


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 720px;
                border: 1px solid gray;
                box-shadow: 10px 10px 26px 0px rgba(0,0,0,0.76);
                -webkit-box-shadow: 10px 10px 26px 0px rgba(0,0,0,0.76);
                -moz-box-shadow: 10px 10px 26px 0px rgba(0,0,0,0.76);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card_left > span {
                font-weight: 400;
            }
            
            .card_left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            .card_left > p {
                color: rgb(70,70,70);   
            }
            
            .card_right > img {
                width: 180px;
                margin: 5px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        `
        return style;
    }
}

customElements.define("card-news", CardNews);