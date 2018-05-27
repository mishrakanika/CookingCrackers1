function initXHR(x,value) {
	console.log(x);
	if (x == 'home') {
		document.getElementById("home").style.display = "block";
		document.getElementById("lists").style.display = "none";
		document.getElementById("gList").style.display = "none";
		document.getElementById("recipes").style.display = "none";
	}
	else if (x == 'recipes') {
		//retrieveActiveListsFromServer('/json/lists.json');
		retrieveActiveListsFromServer('/', 'recipes');
		document.getElementById("home").style.display = "none";
		document.getElementById("recipes").style.display = "block";
		document.getElementById("lists").style.display = "none";
		document.getElementById("gList").style.display = "none";		
	}
	else if (x == 'lists') {
		//retrieveActiveListsFromServer('/json/lists.json');
		retrieveActiveListsFromServer('/', 'lists');
		document.getElementById("home").style.display = "none";
		document.getElementById("lists").style.display = "block";
		document.getElementById("gList").style.display = "none";
		document.getElementById("recipes").style.display = "none";		
	}
	else if (x == 'gList') {
		retrieveActiveListsFromServer('/app/list/' + value, 'gList');
		document.getElementById("home").style.display = "none";
		document.getElementById("lists").style.display = "none";
		document.getElementById("gList").style.display = "block";
		document.getElementById("recipes").style.display = "none";
	}
	else {
		document.getElementById("home").style.display = "block";
		document.getElementById("lists").style.display = "none";
		document.getElementById("gList").style.display = "none";
		document.getElementById("recipes").style.display = "none";
	}
}



// function retrieveActiveListsFromServer(url, operation) {
// 	var xmlhttp = new XMLHttpRequest();

// xmlhttp.onreadystatechange = function() {
// 	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
// 		var returnValues = JSON.parse(xmlhttp.responseText);
// 		if (operation == "lists") {
// 			populateListsView('lists', returnValues);
// 		}
// 		else if (operation == "gList") {
// 			populateListItems('gList', returnValues);				
// 		}
// 	}
// }
// xmlhttp.open("GET", url, true);
// xmlhttp.send();
// }


function retrieveActiveListsFromServer(url, operation) {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var returnValues = JSON.parse(xmlhttp.responseText);
			if (operation == "recipes") {
				populateListsView('recipes', returnValues);
			}
			else if (operation == "recipeDetails") {
				populateRecipeDetails('recipeDetails', returnValues);				
			}
			else if (operation == "recipeCategory") {
				populateListsView('recipeCategory', returnValues);				
			}
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}



//DOM based function
// function populateListsView(elementId, lists) {
// 	var element = document.getElementById(elementId);
// 	var newElement = "";
// 	newElement += "<div>";
//     //newElement += "<h1><u>"+lists[0].lists+"</u></h1>";
      
// 	for (var i = 0; i < lists.length; i++) {
		
// 		newElement += "<div>";
// 		newElement += "<div class=\"bold\">";
// 		newElement += "<a href=\"javascript:initXHR('gList'," +  lists[i].listId + ")\">" + lists[i].name + "</a>";
// 		newElement += "</div>";
// 		newElement += "</div>";
// 	}
// 	element.innerHTML = newElement;
// }


function populateListsView(elementId, recipes) {
	var element = document.getElementById(elementId);
	var newElement = "";
	newElement += "<div>";
    //newElement += "<h1><u>"+lists[0].lists+"</u></h1>";
      
	for (var i = 0; i < recipes.length; i++) {
		
		console.log("i:" + i + " description: " + recipes[i].rdescription);
		newElement += "<tr>";
		newElement += "<td class = \"bold\">" + recipes[i].rname + "</td><br/><br/>";
		newElement += "<td class = \"bold\">" + recipes[i].rdescription + "</td>";
		//newElement += "<td><span class=\"badge\">" + listItems[i].shared + "</span></td>";
		newElement += "<td>";
		newElement += "<div>";
		newElement += "<span style=\"border-style:none;\"><br/><br/>";
		//newElement += "<input type=\"checkbox\">";
		newElement += "</span>";
		newElement += "</div>";
		newElement += "</td>";
		newElement += "</tr>";	}
	element.innerHTML = newElement;
}

//DOM based function
function populateListItems(elementId, list) {
	var listItems = list.tasks;
	var element = document.getElementById(elementId);
	var newElement = "";

	for (var i = 0; i < listItems.length; i++) {
		console.log("i:" + i + " description: " + listItems[i].rdescription);
		newElement += "<tr>";
		newElement += "<td class = \"bold\">" + listItems[i].rname + "</td><br/><br/>";
		newElement += "<td class = \"bold\">" + listItems[i].rdescription + "</td>";
		//newElement += "<td><span class=\"badge\">" + listItems[i].shared + "</span></td>";
		newElement += "<td>";
		newElement += "<div>";
		newElement += "<span style=\"border-style:none;\"><br/><br/>";
		//newElement += "<input type=\"checkbox\">";
		newElement += "</span>";
		newElement += "</div>";
		newElement += "</td>";
		newElement += "</tr>";
	}

	element.innerHTML = newElement;	
}



