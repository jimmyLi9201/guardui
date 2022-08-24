import LayoutElement from "./layout.js";

export default class HLayoutElement extends LayoutElement {

    constructor() {
        super();

        this.container.style.flexDirection = 'row';
    }
}

window.customElements.define('g-h-layout', HLayoutElement);
