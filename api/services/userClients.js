const clients = require('restify-clients');

class userClients {
    constructor(clients){
        this._client = clients.createJsonClient({
            url: `https://api.github.com`,
            version: '~1.0.0'
        });

    }
    getUser(username) {
        return new Promise((resolve, reject) => {
            this._client.get(`/users/${username}`, (err, req, res, data) => {
                if (err) {
                    return reject(err)
                }
                else {
                    return resolve(data);
                }
            });
        })    
    }
    
    getRepos(username){
        return new Promise((resolve, reject) => {
            this._client.get(`/users/${username}/repos`, (err, req, res, data) => {
                if (err) {
                    return reject(err)
                }
                else {
                    return resolve(data);
                }
            });
        })
    }
}

module.exports = () => {
    return new userClients(clients);
}
