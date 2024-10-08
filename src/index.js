const express=require('express');
const bodyParser= require('body-parser');

const{PORT}=require('./config/serverconfig.js');


const setupAndStartServer=async()=>
{
    //create the express object
    const app=express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT,()=>
    {
        console.log(`server started at ${PORT}`);
        console.log(process.env);
    });
};

setupAndStartServer(); 