import axios from 'axios' //Плагин
import config from '../config/apiConfig' //Объект конфигурации


/**
 * /counries - array of countries
 * /cities - array of cities
 * /prices/cheap - array
 */
class Api {
    constructor(config) {
        this.url = config.url;
    }

    async countries() {
        try {
            const response = await axios.get(`${this.url}/countries`);
            return response;
        } catch (err) {
            console.log(err)
            return Promise.reject(err);
        }
    }

    async cities() {
        try {
            const response = await axios.get(`${this.url}/cities`);
            return response;
        } catch (err) {
            console.log(err)
            return Promise.reject(err);
        }
    }

    async prices(params) {
        try {
            const response = await axios.get(`${this.url}/prices/cheap`, {
                params
            });
            return response;
        } catch (err) {
            console.log(err)
            return Promise.reject(err);
        }
    }

    async airlines() {
        try {
            const response = await axios.get(`${this.url}/airlines`);
            return response;
        } catch (err) {
            console.log(err)
            return Promise.reject(err);
        }
    }
}

const api = new Api(config);

export default api;
