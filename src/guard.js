import { request } from './ajax.js'

export default class Guard {
    
    options;
    config;

    isGettingConfig = true;

    listeners = [];

    constructor(options) {
        if (!Guard.instance) {
            this.options = options;
            Guard.instance = this;
        }
        return Guard.instance
    }

    static async initialize(options) {
        const guard = new Guard(options);
        guard.isGettingConfig = true;

        const host = options.host || 'https://core.authing.cn';
        try {
            const response = await request(`${host}/api/v2/applications/${options.appId}/public-config`);
            guard.config = response.data;

            guard.listeners.forEach(listener => {
                listener.fire(guard);
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
        guard.listeners.push(listener);
        return guard;
    }
}