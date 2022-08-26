export default class GuardElement extends HTMLElement {

    // for now, we don't use shadow
    useShadow = false;

    shadow;
    container;

    constructor() {
        super();

        if (this.useShadow) {
            this.shadow = this.attachShadow( { mode: 'open' } );
            this.container = document.createElement('div');
        } else {
            this.container = this;
        }

        this.container.style.width = this.getAttribute('width');
        this.container.style.height = this.getAttribute('height');
        this.container.style.backgroundColor = this.getAttribute('backgroundColor');
        this.container.style.marginTop = this.getAttribute('marginTop');
        this.container.style.marginRight = this.getAttribute('marginRight');
        this.container.style.marginBottom = this.getAttribute('marginBottom');
        this.container.style.marginLeft = this.getAttribute('marginLeft');
        this.container.style.borderRadius = this.getAttribute('borderRadius');

        if (this.useShadow) {
            var template = document.createElement('template');
            var html = this.innerHTML.trim();
            template.innerHTML = html;
            const child = template.content.firstChild;
            if (child instanceof HTMLElement) {
                this.container.insertAdjacentHTML('afterbegin', this.innerHTML)
            }
            
            this.appendChild(this.container)
            this.shadow.appendChild(this.container);
        }
    }
}

window.customElements.define('g-element', GuardElement);
