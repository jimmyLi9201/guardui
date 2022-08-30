import Input from "../input.js";

export default class BaseInput extends Input {

    constructor() {
        super();

        this.input.style.width = this.container.style.width || '100%';
    }
}

window.customElements.define('g-base-input', BaseInput);
