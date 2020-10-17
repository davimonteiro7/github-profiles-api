const assert = require('assert');
const clients = require('restify-clients');

const userName = 'davimonteiro7';

function userClients(){
    this._client = clients.createJsonClient({
        url: `https://api.github.com`,
        version: '~1.0.0'
    });
}
userClients.prototype.getUser = (username, callback) => {
    this_client.get(`/users/${username}`, callback);
} 

module.exports = userClients;