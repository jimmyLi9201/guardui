import Guard from "../../guard.js";
import Button from "../button.js";

export default class LoginButton extends Button {
    constructor() {
        super();

        this.button.style.width = this.container.style.width || '100%';
        this.button.style.height = this.container.style.height || '42px';
        this.button.style.fontSize = this.getAttribute('fontSize') || '16px';
        this.button.style.padding = this.getAttribute('padding') || '0px';
        if (this.button.innerText === undefined || this.button.innerText.length === 0) {
            this.button.innerText = '登录'
        }

        this.button.onclick = async ()=> {
            const [accountInput] = this.getRootNode().firstChild.getElementsByTagName('g-account-input');
            const [passwordInput] = this.getRootNode().firstChild.getElementsByTagName('g-password-input');
            const [errorText] = this.getRootNode().firstChild.getElementsByTagName('g-error-text');
            if (errorText !== undefined) {
                errorText.setError('');
            }

            if (accountInput !== undefined && passwordInput !== undefined) {
                const account = accountInput.getText();
                const password = passwordInput.getText();

                const guard = Guard.getInstance();
                const res = await guard.loginByAccount(account, password);
                if (res.code === 200) {
                    guard.dispatchEvent('login', 200, res.message, res.data);
                } else {
                    if (errorText !== undefined) {
                        errorText.setError(res.message);
                    }
                    guard.dispatchEvent('login', res.code, res.message, null);
                }
            }
        };
    }

    getType() {
        return 'primary';
    }
}

window.customElements.define('g-login-button', LoginButton);