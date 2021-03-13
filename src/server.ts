import express = require("express");// Create a new express app instance 
import config from "./configure/config";
import 'reflect-metadata';
import { Container, Service } from 'typedi';
import Loader from "./loaders/ServiceRegistry" 
const app: express.Application = express();

app.get('/status', function (req, res) {

    const serviceInstance = Container.get(Loader);
    let msg =  serviceInstance.pingService.pongMessage();
    console.log(msg);
    res.send(msg);
});

app.listen(config.SERVER_PORT, function () {
        console.log('App is listening on port 3000!');
    });