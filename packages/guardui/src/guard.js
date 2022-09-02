import { get } from './ajax.js'
import JSEncrypt from './jsencrypt.js';
import Message from './message.js';

export default class Guard {
    
    options;

    appId;
    host;
    config;

    isGettingConfig = true;

    listeners = [];
    eventHandlers = {};

    message;
    accentColor = '#396AFF';

    constructor(options) {
        if (!Guard.instance) {
            Guard.instance = this;
            this.message = new Message();
        }
        if (options) {
            Guard.instance.options = options;
            Guard.instance.appId = options.appId;
        }
        return Guard.instance;
    }

    static async initialize(options) {
        const guard = new Guard(options);
        guard.isGettingConfig = true;

        guard.host = options.host || 'authing.cn'

        try {
            const response = await get(`https://core.${guard.host}/api/v2/applications/${options.appId}/public-config`);
            guard.config = response.data;

            guard.listeners.forEach(listener => {
                listener.configCallback(guard);
            })
            // guard.listeners = [];
        } catch (err) {
            console.log(err);
        }
        
        guard.isGettingConfig = false;
        return guard;
    }

    static getInstance(listener) {
        const guard = new Guard();
        if (listener) {
            guard.listeners.push(listener);
        }
        return guard;
    }

    on(channel, handler) {
        if (handler) {
            const array = this.eventHandlers[channel] || [];
            array.push(handler);
            this.eventHandlers[channel] = array;
        }
    }

    dispatchEvent(channel, code, message, data) {
        const handlers = this.eventHandlers[channel];
        if (handlers !== undefined) {
            handlers.forEach((handler)=>{
                if (handler) {
                    try {
                        handler(code, message, data);
                    } catch (err) {}
                }
            });
        }
    }

    getAccentColor() {
        return this.accentColor;
    }

    setAccentColor(accent) {
        this.accentColor = accent;
        this.listeners.forEach(listener => {
            if (listener) {
                try {
                    listener.renderCallback(this);
                } catch (err) {}
            }
        })
    }

    async loginByAccount(account, password) {
        // Note we cannot use window.crypto.subtle APIs because we used PKCS1Padding
        // but window.crypto.subtle only supports OAEP padding
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(this.config.publicKey);
        const encrypted = encrypt.encrypt(password);
        const body = {account: account, password: encrypted};
        return await this.post(`https://${this.config.identifier}.${this.host}/api/v2/login/account`, body);
    }

    post(url, body) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('post', url, true);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.setRequestHeader('x-authing-userpool-id', this.config.userPoolId);
            xhr.setRequestHeader('x-authing-app-id', this.appId);
            xhr.send(JSON.stringify(body));
    
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== 4 || xhr.status === 0) return
    
                if (xhr.status >= 200 && xhr.status < 300) {
                    const responseData = JSON.parse(xhr.response);
                    resolve(responseData);
                } else {
                    reject({code: xhr.status, message: `request failed with status code ${xhr.status}\nurl: ${url}`});
                }
            }
        });
    }
}
