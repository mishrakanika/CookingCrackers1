function initXHR(x,value) {
	console.log(x);
	if (x == 'mealtype') {
		document.getElementById("mealtype").style.display = "block";
		document.getElementById("lists").style.display = "none";
		document.getElementById("gList").style.display = "none";
	}
	else if (x == 'lists') {
		//retrieveActiveListsFromServer('/json/lists.json');
		retrieveActiveListsFromServer('/' + value, 'lists');
		document.getElementById("mealtype").style.display = "none";
		document.getElementById("lists").style.display = "block";
		document.getElementById("gList").style.display = "none";		
	}
	else if (x == 'gList') {
		retrieveActiveListsFromServer('/app/list/' + value, 'gList');
		document.getElementById("mealtype").style.display = "none";
		document.getElementById("lists").style.display = "none";
		document.getElementById("gList").style.display = "block";
	}
	else {
		document.getElementById("mealtype").style.display = "block";
		document.getElementById("lists").style.display = "none";
		document.getElementById("gList").style.display = "none";
	}
}

// function initXHR2() {
// 	retrieveTransportationListsFromServer('/all/json');	
// }

// function retrieveActiveListsFromServer(url, operation) {
// 	var xmlhttp = new XMLHttpRequest();
// 	var lists;

// 	xmlhttp.onreadystatechange = function() {
// 		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
// 			var lists = JSON.parse(xmlhttp.responseText);
// 			console.log(lists);

// 			if (operation == 'lists') {
// 				populateListsView('lists', returnValues);
// 			}
// 			else if (operation == 'gList') {
// 				populateListItems('tasks', returnValues);				
// 			}
// 		}
// 	}
// 	xmlhttp.open("GET", url, true);
// 	xmlhttp.send();
// }

function retrieveActiveListsFromServer(url, operation) {
	var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		var returnValues = JSON.parse(xmlhttp.responseText);
		if (operation == "lists") {
			populateListsView('lists', returnValues);
		}
		else if (operation == "gList") {
			populateListItems('tasks', returnValues);				
		}
	}
}
xmlhttp.open("GET", url, true);
xmlhttp.send();
}

//DOM based function
function populateListsView(elementId, lists) {
	var element = document.getElementById(elementId);
	var newElement = "";
	newElement += "<div>";
    newElement += "<h1><u>"+lists[0].lists+"</u></h1>";
      
	for (var i = 0; i < lists.length; i++) {
		
		newElement += "<div>";
		newElement += "<div>";
		newElement += "<a href=\"javascript:initXHR('lists'," +  lists[i].listId + ")\">" + lists[i].name + "</a>";
		newElement += "</div>";
		newElement += "</div>";
	}
	element.innerHTML = newElement;
}

// function populateListsView(elementId, lists) {
// 	element = document.getElementById(elementId);
// 	var newElement = "<h3 class=\"panel-heading\">Meal Type</h3>";

// 	for (var i = 0; i < lists.length; i++) {
// 		newElement += "<div class=\"panel panel-default\">";
// 		newElement += "<h4 class=\"panel-heading\"><a href=\"javascript:init('lists')\">" + (i+1) + ". " + lists[i].name + "</a></h4>";
// 		newElement += "<div class=\"panel-body\">";
// 		newElement += "<p>" + lists[i].description  + "</p>";
// 		newElement += "</div>";
// 		newElement += "<table class=\"table\" style=\"font-size:10pt;\">";
// 		newElement += "<tbody>";
// 		newElement += "<tr>";
// 		newElement += "<td>Due: <span>" + lists[i].due + "</span></td>";
// 		newElement += "<td align=\"right\">Items: <span class=\"badge\">" + lists[i].items + "</span></td>";
// 		newElement += "</tr>";
// 		newElement += "</tbody>";
// 		newElement += "</table>";
// 		newElement += "</div>";
// 	}

// 	element.innerHTML = newElement;
// }

//DOM based function
function populateListItems(elementId, list) {
	var listItems = list.tasks;
	var element = document.getElementById(elementId);
	var newElement = "";

	for (var i = 0; i < listItems.length; i++) {
		newElement += "<tr>";
		newElement += "<td>" + listItems[i].description + "</td>";
		newElement += "<td><span class=\"badge\">" + listItems[i].shared + "</span></td>";
		newElement += "<td>";
		newElement += "<div class=\"input-group\">";
		newElement += "<span class=\"input-group-addon\" style=\"border-style:none;\">";
		newElement += "<input type=\"checkbox\">";
		newElement += "</span>";
		newElement += "</div>";
		newElement += "</td>";
		newElement += "</tr>";
	}

	element.innerHTML = newElement;	
}

//JQUERY based
// function populateListItems(elementId, list) {
// 	var listItems = list.tasks;
// 	var newElement = "";

// 	for (var i = 0; i < listItems.length; i++) {
// 		newElement += "<tr>";
// 		newElement += "<td>" + listItems[i].description + "</td>";
// 		newElement += "<td><span class=\"badge\">" + listItems[i].shared + "</span></td>";
// 		newElement += "<td>";
// 		newElement += "<div class=\"input-group\">";
// 		newElement += "<span class=\"input-group-addon\" style=\"border-style:none;\">";
// 		newElement += "<input type=\"checkbox\">";
// 		newElement += "</span>";
// 		newElement += "</div>";
// 		newElement += "</td>";
// 		newElement += "</tr>";
// 	}
// 	$("#" + elementId).append(newElement);
// }

// function retrieveTransportationListsFromServer(url) {
// 	var xmlhttp = new XMLHttpRequest();
// 	var lists;

// 	xmlhttp.onreadystatechange = function() {
// 		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
// 			var lists = JSON.parse(xmlhttp.responseText);
// 			console.log(lists);
// 			populateTransportView('transport', lists);
// 		}
// 	}
// 	xmlhttp.open("GET", url, true);
// 	xmlhttp.send();
// }

// function populateTransportView(elementId, lists) {
// 	element = document.getElementById(elementId);
// 	var newElement = "<h3 class=\"panel-heading\">Transportation Lists</h3>";

// 	for (var i = 0; i < lists.length; i++) {
// 		newElement += "<div class=\"panel panel-default\">";
// 		newElement += "<table class=\"table\" style=\"font-size:10pt;\">";
// 		newElement += "<tbody>";
// 		newElement += "<tr>";
// 		newElement += "<td>Vehicle Name: <span>" + lists[i].vehicle + "</span></td>";
// 		newElement += "<td align=\"right\">Speed: <span class=\"badge\">" + lists[i].speed + "</span></td>";
// 		newElement += "</tr>";
// 		newElement += "</tbody>";
// 		newElement += "</table>";
// 		newElement += "</div>";
// 	}

// 	element.innerHTML = newElement;
// }
