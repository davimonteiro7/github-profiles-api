const userClient = require('../services/userClients')();
const UserModel = require('../models/userModel');


module.exports = (app) => {
    app.get('/user/:username', (req, res) => {
        const username  = req.params.username;
        const userModel = new UserModel(userClient, username);
        
        
        userModel.getUser.then(async user => {
            var userWithRepos = {
                username: user.login,
                avatar: user.avatar_url,
                name: user.name,
                followers: user.followers,
                num_repos: user.public_repos,
                repos: await userModel.getRepos.then(repos => repos)

            }
            console.log(userWithRepos);
            res.json(userWithRepos)
        });
    });
}

