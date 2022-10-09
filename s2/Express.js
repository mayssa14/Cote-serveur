
import express from "express";

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 9090;


app.get('/',(req, res) => {
    res.status(200).json({message : 'Hello World!'});
})

app.get('/game/:name',(rep,res) => {
    res.status(200).json({message:'the name of this game is ${req.params.name}'});
})

/**
 * Run Server
 */

app.get("/secret", (req,res) => {
    res.status(404).json({message : "Unauthorized"});
});