class User {
    constructor(id, username, password, wallet) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.wallet = wallet;
    }
    getUsername() {
        return this.username
    }

    getPassword() {
        return this.password
    }

    getwallet() {
        return this.wallet
    }

}




export default User;