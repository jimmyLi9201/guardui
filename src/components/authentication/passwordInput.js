import Input from "../input.js";

export default class PasswordInput extends Input {

    constructor() {
        super();

        this.input.setAttribute('type', 'password');
        this.input.setAttribute('placeholder', this.getAttribute('placeholder') || '请输入密码');
    }
}

window.customElements.define('g-password-input', PasswordInput);