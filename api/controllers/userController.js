const userClient = require('../services/userClients')();
const UserModel = require('../models/userModel');

module.exports = (app) => {

    app.get('/',(req, res) => {
        res.render('index', {data: false});
    })
    
    app.get('/profile', (req, res) => {
        const username  = req.query.username;
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
            res.render('index', {data: userWithRepos});
        }).catch(err => {
            console.log('This username is not valid!');

            //const fakeDataUser = {
            //    username:'fake username',
            //    avatar:'https://avatars1.githubusercontent.com/u/60819461?s=460&u=d568c0a9672c4c0aa38a37a236be50daa8790c62&v=4',
            //    name:'fake',
            //    followers:3,
            //    num_repos:4,
            //    repos: [{
            //        stars:2,
            //        forks:4,
            //        repo_name: 'fake repo'
            //    }]
            //}
            //res.render('index', {data: fakeDataUser})
            res.render('index', {data: {
                validation: 'Please, enter a valid username!'
            }});
        });
    });
}
