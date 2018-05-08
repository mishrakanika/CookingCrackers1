import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IListModel} from '../interfaces/IListModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class ListModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                name: String,
                //description: String,
                listId: Number,
                //due: String,
                //state: String,
                //owner: String
            }, {collection: 'lists'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IListModel>("Lists", this.schema);
    }

    public retrieveAllLists(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
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

    }
}
export {ListModel};