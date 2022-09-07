import Guard from "../../guard.js";
import LoadingButton from "../loadingButton.js";

export default class RegisterButton extends LoadingButton {
    constructor() {
        super();

        if (this.button.innerText === undefined || this.button.innerText.length === 0) {
            this.button.textContent = '注册'
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
}

window.customElements.define('g-register-button', RegisterButton);