import Input from "../input.js";

export default class AccountInput extends Input {

    constructor() {
        super();

        this.input.setAttribute('placeholder', this.getAttribute('placeholder') || '请输入帐号 / 邮箱 / 电话');
    }
}

window.customElements.define('g-account-input', AccountInput);