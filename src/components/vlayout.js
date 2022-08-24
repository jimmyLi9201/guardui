import LayoutElement from "./layout.js";

export default class VLayoutElement extends LayoutElement {

    constructor() {
        super();

        this.container.style.flexDirection = 'column';
    }
}

window.customElements.define('g-v-layout', VLayoutElement);
