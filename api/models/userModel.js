class UserModel {
    constructor(userClient){
        this._userClient = userClient;
        this.user = 
        this.userRepos;
    }

    getUser(username){
        return this._userClient.getUserByUserame(username);
    }

    getRepos(){
    }
}

module.exports = UserModel