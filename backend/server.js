
const express = require('express');
const bodyparser = require('body-parser');
const colors = require('colors');
require('dotenv').config();
const { errorhandler } = require('./middleware/errormiddleware')
const connectDb = require('./config/db')

connectDb();

const app = express();
const port = process.env.PORT;


const goalroutes = require('./routes/goalroutes');
const userroutes = require('./routes/userroutes');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/goals', goalroutes);
app.use('/api/users', userroutes);
app.use(errorhandler);


app.listen(port, console.log(`Server Running On Port ${port}`))


