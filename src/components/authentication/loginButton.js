import Button from "../button.js";

export default class LoginButton extends Button {
    constructor() {
        super();

        this.button.style.width = this.container.style.width || '380px';
        this.button.style.height = this.container.style.height || '42px';
        if (this.button.innerText === undefined || this.button.innerText.length === 0) {
            this.button.innerText = '登录'
        }

        this.button.onclick = ()=> {
            const [accountInput] = document.getElementsByTagName('g-account-input');
            const [passwordInput] = document.getElementsByTagName('g-password-input');
            if (accountInput !== undefined && passwordInput !== undefined) {
                const account = accountInput.getText();
                const password = passwordInput.getText();

                // TODO login
            }
        };
    }

    getType() {
        return 'primary';
    }
}

window.customElements.define('g-login-button', LoginButton);