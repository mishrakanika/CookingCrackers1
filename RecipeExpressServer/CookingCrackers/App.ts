import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');


import {DataAccess} from './DataAccess';
import {RecipeModel} from './model/RecipeModel';
import {RecipeCatalogModel} from './model/RecipeCatalogModel';
import {RecipeCatalogDetailsModel} from './model/RecipeCatalogDetailsModel';

var fs = require('fs');

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public idGenerator:number;
  public Recipes:RecipeModel;
  public RecipesCatalog:RecipeCatalogModel;
  public RecipeCatalogDetails:RecipeCatalogDetailsModel;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.idGenerator = 100;
    this.Recipes = new RecipeModel();
    this.RecipesCatalog = new RecipeCatalogModel();
    this.RecipeCatalogDetails = new RecipeCatalogDetailsModel();
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

    router.all('/',(req, res, next) => {
        // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
   // res.setHeader('Access-Control-Allow-Credent;
    next();
      });

    router.post('/app/recipe/:recipeID', (req, res) => {
                // Website you wish to allow to connect
    
        
        var id = req.params.recipeID;
        console.log('Query changed single list with id: ' + id);

        console.log(res.header);
        res.send("Received post for id:"+ id);
    });


    router.get('/', (req, res) => {
        console.log('Query All list');
        this.Recipes.retrieveAllRecipes(res);
       //initXHR('lists');
    });

    

    router.post('/app/recipe/', (req, res) => {
        console.log(req.body);
        var jsonObj = req.body;
        jsonObj.rrecipeId = this.idGenerator;
        this.Recipes.model.create([jsonObj], (err) => {
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
        res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        var id = req.params.recipeID;
        console.log('Query single recipe with id: ' + id);
        this.Recipes.retrieveRecipeDetails(res, {rrecipeId: id});
    });
    
    router.get('/app/catalog', (req, res) => {
        console.log('Query All Recipe catalog');
        this.RecipesCatalog.retrieveAllCatalog(res);
    });


	router.get('/app/catalog/:recipeCatalogDetails', (req, res) => {
        var id = req.params.recipeCatalogDetails;
        console.log('Query single recipe with catalog: ' + id);
        this.RecipeCatalogDetails.retrieveRecipeCatalogDetails(res, {rcId: id});
    });



    
    this.expressApp.use('/', router);

    this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/pages'));
     
    
  }

}

export {App};