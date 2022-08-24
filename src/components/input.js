import GuardElement from "./element.js";

export default class Input extends GuardElement {

    input;

    constructor() {
        super();

        this.input = document.createElement('input');

        this.input.style.width = this.container.style.width || '380px';
        this.input.style.height = this.container.style.height || '44px';

        this.input.setAttribute('type', 'text');
        this.input.setAttribute('placeholder', this.getAttribute('placeholder'));

        this.container.append(this.input);
    }

    getText() {
        return this.input.value;
    }
}

window.customElements.define('g-input', Input);