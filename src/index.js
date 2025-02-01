//Database config setup
const express = require('express');
const bodyParser = require('body-parser');
const portfinder = require("portfinder");

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');


const setupAndStartServer = async() => {
    //create the express object
    const app = express();

    //this is how we set up bodyparser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    })
}

setupAndStartServer();