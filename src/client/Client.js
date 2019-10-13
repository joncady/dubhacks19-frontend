class Client {

    constructor(url) {
        this.url = url;
    }

    async getMeals(callback) {
        let response = await fetch(`${this.url}/meals`);
        let data = await response.json();
        callback(data);
    }

    async login(callback, data) {
        let response = await fetch(`${this.url}/login`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        let userData  = await response.json();
        console.log(userData);
    }

}

export default Client;