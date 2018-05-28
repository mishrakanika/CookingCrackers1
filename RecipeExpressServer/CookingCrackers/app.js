"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');
var ListModel_1 = require("./model/ListModel");
var TaskModel_1 = require("./model/TaskModel");
var RecipeModel_1 = require("./model/RecipeModel");
var RecipeCatalogModel_1 = require("./model/RecipeCatalogModel");
var fs = require('fs');
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.idGenerator = 100;
        this.Lists = new ListModel_1.ListModel();
        this.Tasks = new TaskModel_1.TaskModel();
        this.Recipes = new RecipeModel_1.RecipeModel();
        this.RecipesCatalog = new RecipeCatalogModel_1.RecipeCatalogModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.get('/app/list/:listId', function (req, res) {
            var id = req.params.listId;
            console.log('Query single list with id: ' + id);
            _this.Tasks.retrieveTasksDetails(res, { listId: id });
        });
        router.post('/app/list/:listId', function (req, res) {
            console.log(req.body);
            var id = req.params.listId;
            console.log('Query single list with id: ' + id);
            res.send("Received post for id:" + id);
        });
        router.get('/app/list/', function (req, res) {
            console.log('Query All list');
            _this.Lists.retrieveAllLists(res);
        });
        router.get('/', function (req, res) {
            console.log('Query All list');
            _this.Recipes.retrieveAllRecipes(res);
            //initXHR('lists');
        });
        router.post('/app/list/', function (req, res) {
            console.log(req.body);
            var jsonObj = req.body;
            jsonObj.listId = _this.idGenerator;
            _this.Lists.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(_this.idGenerator.toString());
            _this.idGenerator++;
        });
        router.get('/app/recipe/', function (req, res) {
            console.log('Query All Recipes');
            _this.Recipes.retrieveAllRecipes(res);
        });
        router.get('/app/recipe/:recipeID', function (req, res) {
            var id = req.params.recipeID;
            console.log('Query single recipe with id: ' + id);
            _this.Recipes.retrieveRecipeDetails(res, { rrecipeId: id });
        });
        router.get('/app/recipe/catalog', function (req, res) {
            console.log('Query All Recipe catalog');
            _this.RecipesCatalog.retrieveAllCatalog(res);
        });
        router.get('/app/recipe/catalog/:recipeCatalogue', function (req, res) {
            var id = req.params.recipeCatalog;
            console.log('Query single recipe with catalog: ' + id);
            _this.RecipesCatalog.retrieveCatalogDetails(res, { rcId: id });
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;
