const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectDB = require("./database/db");
const noteRoute = require('./route/note.route');
// create an instance of express
const app = express();
// middlewares
app.use(express.json());

connectDB();

app.get('/',(req,res)=>{
    res.send('Homepage');
});

app.use('/api/v1',noteRoute);

const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is listening on localhost:${port}`);
})
