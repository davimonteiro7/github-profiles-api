const clients = require('../services/userClients');

function userModel(clients) {
    this._clients = clients;
    this.user = {};
    this._clients.getUser('davimonteiro7', (err, req, res, obj) => {
        this.user = obj;
    })
    console.log(this.user);
    return this.user;   
}

userModel(clients);
//userModel.prototype.getUserByName = (name) => {
//    this.user = {};
//    this._clients.getUser(name, (err, req, res, obj) => {
//        this.user = obj;
//    })
//    console.log(this.user);
//    return this.user;       
//}
//
//
//module.exports = () => {
//    return userModel();
//};