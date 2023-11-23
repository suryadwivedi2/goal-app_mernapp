const express=require('express');
const bodyparser=require('body-parser');
require('dotenv').config();
const {errorhandler}=require('./middleware/errormiddleware')

const app=express();
const port=process.env.PORT;




const goalroutes=require('./routes/goalroutes');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/goals',goalroutes);
app.use(errorhandler);


app.listen(port,console.log(`Server Running On Port ${port}`))