"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var ListModel = /** @class */ (function () {
    function ListModel() {
        this.createSchema();
        this.createModel();
    }
    ListModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            name: String,
            //description: String,
            listId: Number
        }, { collection: 'lists' });
    };
    ListModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Lists", this.schema);
    };
    ListModel.prototype.retrieveAllLists = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
        // function retrieveActiveListsFromServer(url, operation) {
        //     var xmlhttp = new XMLHttpRequest();
        //     var lists;
        //     xmlhttp.onreadystatechange = function() {
        //         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        //             var returnValues = JSON.parse(xmlhttp.responseText);
        //             console.log(lists);
        //             if (operation == 'lists') {
        //                 populateListsView('lists', returnValues);
        //             }
        //             else if (operation == 'gList') {
        //                 populateListItems('tasks', returnValues);				
        //             }
        //         }
        //     }
        //     xmlhttp.open("GET", url, true);
        //     xmlhttp.send();
        // }
        // function populateListsView(elementId, lists) {
        //    var element = document.getElementById(elementId);
        //     var newElement = "<h3 class=\"panel-heading\">Meal Type</h3>";
        //     for (var i = 0; i < lists.length; i++) {
        //         newElement += "<div class=\"panel panel-default\">";
        //         newElement += "<h4 class=\"panel-heading\"><a href=\"javascript:init('gList')\">" + (i+1) + ". " + lists[i].name + "</a></h4>";
        //         newElement += "<div class=\"panel-body\">";
        //         newElement += "<p>" + lists[i].description  + "</p>";
        //         newElement += "</div>";
        //         newElement += "<table class=\"table\" style=\"font-size:10pt;\">";
        //         newElement += "<tbody>";
        //         newElement += "<tr>";
        //         newElement += "<td>Due: <span>" + lists[i].due + "</span></td>";
        //         newElement += "<td align=\"right\">Items: <span class=\"badge\">" + lists[i].items + "</span></td>";
        //         newElement += "</tr>";
        //         newElement += "</tbody>";
        //         newElement += "</table>";
        //         newElement += "</div>";
        //     }
        //     element.innerHTML = newElement;
        // }
        // function populateListItems(elementId, list) {
        //     var listItems = list.tasks;
        //     var newElement = "";
        //     for (var i = 0; i < listItems.length; i++) {
        //         newElement += "<tr>";
        //         newElement += "<td>" + listItems[i].description + "</td>";
        //         newElement += "<td><span class=\"badge\">" + listItems[i].shared + "</span></td>";
        //         newElement += "<td>";
        //         newElement += "<div class=\"input-group\">";
        //         newElement += "<span class=\"input-group-addon\" style=\"border-style:none;\">";
        //         newElement += "<input type=\"checkbox\">";
        //         newElement += "</span>";
        //         newElement += "</div>";
        //         newElement += "</td>";
        //         newElement += "</tr>";
        //     }
        //     $("#" + elementId).append(newElement);
        // }
    };
    return ListModel;
}());
exports.ListModel = ListModel;
