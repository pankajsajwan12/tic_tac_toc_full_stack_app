const {Router} = require('express');

 const ticTacToeRouter = Router();

 ticTacToeRouter.get("/", (req,res) => {
    res.send("Welcome to our game");
 })

 module.exports = {
   ticTacToeRouter
 }