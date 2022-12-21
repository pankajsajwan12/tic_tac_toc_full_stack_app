 const express= require('express');
 const cors = require('cors')
 const cookieParser  = require('cookie-parser');

 const app = express();

 const {connection} = require('./config/mongodb');
 const {userRoutes} = require('./routes/user.routes');
 const {authentication} = require('./middlewares/authentication');
 const {ticTacToeRouter} = require('./routes/tic_tac_toe')

 require('dotenv').config();

 const port = process.env.port || 8090;

 app.use(express.json());
 app.use(cors());
 app.use(cookieParser());
 app.use("/", userRoutes);
 app.use(authentication);
 app.use("/", ticTacToeRouter)

 app.listen(port , async(req,res) => {
    try{
        await connection
        console.log(`App is connect  with mongodb`);
    }
  catch(err){
    console.log(`App is not connect with mongodb`);
    console.log(err);
  }
  console.log(`App is listing ${port}`);
 })