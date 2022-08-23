import Button from "../button.js";

export default class LoginButton extends Button {
    constructor() {
        super();

        this.button.style.width = this.container.style.width || '380px';

        this.button.addEventListener('click', ()=> {
            const btn = document.getElementsByTagName('g-button');
            console.log(btn)
        });
    }

    getType() {
        return 'primary';
    }
}

window.customElements.define('g-login-button', LoginButton);