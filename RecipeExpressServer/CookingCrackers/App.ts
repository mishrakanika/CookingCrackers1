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
import {RecipeModel} from './model/RecipeModel';
import {RecipeCatalogModel} from './model/RecipeCatalogModel';

var fs = require('fs');

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public Lists:ListModel;
  public Tasks:TaskModel;
  public idGenerator:number;
  public Recipes:RecipeModel;
  public RecipesCatalog:RecipeCatalogModel;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.idGenerator = 100;
    this.Lists = new ListModel();
    this.Tasks = new TaskModel();
    this.Recipes = new RecipeModel();
    this.RecipesCatalog = new RecipeCatalogModel();
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


    

    router.get('/app/list/:listId', (req, res) => {
        var id = req.params.listId;
        console.log('Query single list with id: ' + id);
        this.Tasks.retrieveTasksDetails(res, {listId: id});
    });

    router.post('/app/list/:listId', (req, res) => {
        console.log(req.body);
        var id = req.params.listId;
        console.log('Query single list with id: ' + id);
        res.send("Received post for id:"+ id);
    });


   
    router.get('/app/list/', (req, res) => {
        console.log('Query All list');
        this.Lists.retrieveAllLists(res);
    });


    router.get('/', (req, res) => {
        console.log('Query All list');
        this.Recipes.retrieveAllRecipes(res);
       //initXHR('lists');
    });

    

    router.post('/app/list/', (req, res) => {
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


    router.get('/app/recipe/', (req, res) => {
        console.log('Query All Recipes');
        this.Recipes.retrieveAllRecipes(res);
    });

    router.get('/app/recipe/:recipeID', (req, res) => {
        var id = req.params.recipeID;
        console.log('Query single recipe with id: ' + id);
        this.Recipes.retrieveRecipeDetails(res, {rrecipeId: id});
    });
    
    router.get('/app/recipe/catalog', (req, res) => {
        console.log('Query All Recipe catalog');
        this.RecipesCatalog.retrieveAllCatalog(res);
    });


	router.get('/app/recipe/catalog/:recipeCatalogue', (req, res) => {
        var id = req.params.recipeCatalog;
        console.log('Query single recipe with catalog: ' + id);
        this.RecipesCatalog.retrieveCatalogDetails(res, {rcId: id});
    });



    
    this.expressApp.use('/', router);

    this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/pages'));
     
    
  }

}

export {App};