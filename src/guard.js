import { request } from './ajax.js'

export default class Guard {
    
    options;
    config;

    constructor(options) {
        this.options = options;
    }

    static async initialize(options) {
        const guard = new Guard(options);
        const host = options.host || 'https://core.authing.cn';
        try {
            const response = await request(`${host}/api/v2/applications/${options.appId}/public-config`);
            guard.config = response.data;
        } catch (err) {
            console.log(err);
        }
        
        return guard;
    }
}