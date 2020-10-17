const userModel = require('../models/userModel');
const client = require('../services/user-client');

module.exports = (app) =>{
    app.get('/get-user', (req, res) => {
        const userName  = req.body.name;
        
        const userModel = new app.models.userModel(client);
        userModel.getUserByName(userName, () => {

        });
    });
}

