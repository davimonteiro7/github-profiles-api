class UserModel {
    constructor(userClient, username){
        this._userClient = userClient;
        this.getUser = this._userClient.getUser(username).then(user => user );
        this.getRepos = this._userClient.getRepos(username).then(repos => repos);
    }
}
module.exports = UserModel