"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');
var ListModel_1 = require("./model/ListModel");
var TaskModel_1 = require("./model/TaskModel");
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
        // router.get('/recipes/list/:listId/count', (req, res) => {
        //     var id = req.params.listId;
        //     console.log('Query single list with id: ' + id);
        //     this.Tasks.retrieveTasksCount(res, {listId: id});
        // });
        router.get('/recipes/list/:listId', function (req, res) {
            var id = req.params.listId;
            console.log('Query single list with id: ' + id);
            _this.Tasks.retrieveTasksDetails(res, { listId: id });
        });
        router.post('/recipes/list/:listId', function (req, res) {
            console.log(req.body);
            var id = req.params.listId;
            console.log('Query single list with id: ' + id);
            res.send("Received post for id:" + id);
        });
        router.get('/recipes/list/', function (req, res) {
            console.log('Query All list');
            _this.Lists.retrieveAllLists(res);
        });
        router.post('/recipes/list/', function (req, res) {
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
        router.get('/:filename', function (req, res) {
            //var filename = url.parse(req.url).pathname.slice(1);
            var filename = req.params.filename;
            if (filename === '') {
                filename = 'home.html';
            }
            console.log('filename: ' + filename);
            fs.readFile('pages/' + filename, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                res.end(data);
            });
        });
        router.get('/', function (req, res) {
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
    };
    return App;
}());
exports.App = App;
