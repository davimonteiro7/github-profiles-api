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
                repos: await userModel.getRepos.then(repos => {
                    return repos.map(repo => ({
                        stars:repo.stargazers_count,
                        forks:repo.forks,
                        repo_name:repo.name
                        
                    })).sort((a, b) => {
                        return b.forks - a.forks || b.stars - a.stars;
                    }).splice(0,4);
                })
            }
            console.log(userWithRepos);
            res.json(userWithRepos)
        });
    });
}

