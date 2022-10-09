import '../Models/Users.model.js';
import User from '../Models/Users.model.js';

var id = 0

const Users = []

export function update(req, res) {
    var user = Users.find((u => (u.id === req.body.id)))
    user.username = req.body.username
    user.password = req.body.password
    user.wallet = req.body.wallet
    res.status(200).json({username : user.username, wallet : user.wallet})
}

export function LogIn(req, res) {
    var user = Users.find(u => (u.username === req.body.username) && (u.password === req.body.password))
    res.status(200).json({username : user.username, wallet : user.wallet})
}

export function register(req, res) {
    var user = new User(++id, req.body.username, req.body.password, req.body.wallet)
    Users.push(user)
    res.status(200).json({username : user.username, wallet : user.wallet})
}

