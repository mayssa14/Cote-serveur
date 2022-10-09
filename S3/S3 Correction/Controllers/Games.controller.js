import '../Models/Games.model.js';
import Game from '../Models/Games.model.js';

var id = 0;

const games = []

export function displayAll(req, res) {
    res.status(200).json(games);
}

export function getDetails(req, res) {
    var game = games.find((u => (u.id === req.body.id)))
    res.status(200).json({entity: game});
}

export function addGame(req, res) {
    var game = new Game(++id, req.body.title, req.body.description, req.body.price, req.body.quantity)
    Games.push(game)
    res.status(200).json({entity: game})
}

export function updateGame(req, res) {
    var game = games.find((u => (u.id === req.body.id)))
    game.title = req.body.title
    game.description = req.body.description
    game.price = req.body.price
    game.quantity = req.body.quantity
    res.status(200).json({entity: game})
}