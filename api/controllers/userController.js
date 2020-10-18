const userClient = require('../services/userClients')();
const UserModel = require('../models/userModel');


module.exports = (app) => {
    app.get('/user/:username', (req, res) => {
        const username  = req.params.username;
        const userModel = new UserModel(userClient);

        userModel.getUser(username).then(user => {
            res.json(user);
        });
    });
}

