import { PROD_URL, LOCAL_URL, PROD } from '../constants';

class Client {

    constructor() {
        this.url = process.env.NODE_ENV === PROD ? PROD_URL : LOCAL_URL;
    }

    async getMeals(callback) {
        let response = await fetch(`${this.url}/meals`);
        let data = await response.json();
        callback("meals", data.meals);
    }

    async getUserData(id, callback) {
        let response = await fetch(`${this.url}/getUserProfile?id=${id}`);
        let data = await response.json();
        callback("user", data.user);
    }

    async getUserSummary(id, callback) {
        let response = await fetch(`${this.url}/getUserSummary?id=${id}`);
        let data = await response.json();
        callback("summary", data.summary);
    }

    async getSocialData(callback) {
        let response = await fetch(`${this.url}/getSocialData`);
        let data = await response.json();
        callback("social", data.social);
    }

}

export default Client;