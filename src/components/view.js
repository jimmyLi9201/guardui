export default class GView extends HTMLElement {

    shadow;
    container;

    constructor() {
        super();

        this.shadow = this.attachShadow( { mode: 'open' } );

        this.container = document.createElement('div');
        this.container.style.display = 'block-inline'
        this.container.style.width = this.getAttribute('width');
        this.container.style.height = this.getAttribute('height');
        this.container.style.backgroundColor = this.getAttribute('backgroundColor');

        this.container.style.marginTop = this.getAttribute('marginTop');
        this.container.style.marginRight = this.getAttribute('marginRight');
        this.container.style.marginBottom = this.getAttribute('marginBottom');
        this.container.style.marginLeft = this.getAttribute('marginLeft');

        this.shadow.appendChild(this.container);
    }
}

window.customElements.define('g-view', GView);
