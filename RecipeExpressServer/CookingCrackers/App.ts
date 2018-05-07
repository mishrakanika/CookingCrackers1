import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');

import {ListModel} from './model/ListModel';
import {TaskModel} from './model/TaskModel';
import {DataAccess} from './DataAccess';

var fs = require('fs');

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public Lists:ListModel;
  public Tasks:TaskModel;
  public idGenerator:number;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.idGenerator = 100;
    this.Lists = new ListModel();
    this.Tasks = new TaskModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(logger('dev'));
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    // router.get('/recipes/list/:listId/count', (req, res) => {
    //     var id = req.params.listId;
    //     console.log('Query single list with id: ' + id);
    //     this.Tasks.retrieveTasksCount(res, {listId: id});
    // });

    

    router.get('/recipes/list/:listId', (req, res) => {
        var id = req.params.listId;
        console.log('Query single list with id: ' + id);
        this.Tasks.retrieveTasksDetails(res, {listId: id});
    });

    router.post('/recipes/list/:listId', (req, res) => {
        console.log(req.body);
        var id = req.params.listId;
        console.log('Query single list with id: ' + id);
        res.send("Received post for id:"+ id);
    });



    router.get('/recipes/list/', (req, res) => {
        console.log('Query All list');
        this.Lists.retrieveAllLists(res);
    });

    router.post('/recipes/list/', (req, res) => {
        console.log(req.body);
        var jsonObj = req.body;
        jsonObj.listId = this.idGenerator;
        this.Lists.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });
        res.send(this.idGenerator.toString());
        this.idGenerator++;
    });

    router.get('/:filename', (req, res) => {
        //var filename = url.parse(req.url).pathname.slice(1);
    
        var filename = req.params.filename;

        if (filename === '') {
            filename = 'home.html';
        }
        
        console.log('filename: ' + filename);
        
        fs.readFile('pages/'+filename, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        res.end(data);
        });
    });


    router.get('/', (req, res) => {
        
        fs.readFile('pages/home.html', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        res.end(data);
        });
    });





    this.expressApp.use('/', router);

    // this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    // this.expressApp.use('/images', express.static(__dirname+'/img'));
    // this.expressApp.use('/', express.static(__dirname+'/pages'));
     //this.expressApp.use('/', express.static(./pages/home.html));
    
  }

}

export {App};