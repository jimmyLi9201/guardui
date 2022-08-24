import GuardElement from "./element.js";

export default class LayoutElement extends GuardElement {

    constructor() {
        super();

        this.container.style.display = 'flex';
        this.container.style.padding = this.getAttribute('padding');
        this.container.style.justifyContent = this.getAttribute('justifyContent');
        this.container.style.alignItems = this.getAttribute('alignItems');
    }
}

window.customElements.define('g-layout', LayoutElement);
