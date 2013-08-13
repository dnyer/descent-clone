/*Here we go! This is the javascript file for the Adventurers Character Creator page.*/



// update name function
var name = "";
function UpdateName(hero) {
	hero.name = document.getElementById('HeroName').value; // set hero's name to the value player entered in the heroname box
}

// update role function
var role="";
function UpdateRole(hero, role) {
	oldRole = hero.role.name;
	hero.role = Roles[role];
	if (oldRole == "None") { // if this is the first time role is selected
		hero.race = Races[Roles[role].race]; // assign hero the preferred race
		hero.qualities = Roles[role].qualities; // assign hero the preferred qualities
		ReadQualities(hero); // check the appropriate checkboxes
	}
	UpdateRequiredAttributes(hero, role); // updates the required attributes for the chosen role
	CalculateAttributes(hero);
	DisplayHero(hero);
}

// update race function
var race="";
function UpdateRace(hero) {
	hero.race = Races[document.getElementById('Race').value]; // assigns hero the race selected by the dropdown box
	CalculateAttributes(hero);
	DisplayHero(hero);
}

// updates the hero.qualities string based on checked qualities boxes
function UpdateQualities(hero) {
	if (document.getElementById("None").checked==true) { // if the "none" box is checked, set hero.qualities to "none"
		hero.qualities = "None";
	}
	else {		//otherwise set the qualities to blank		
		hero.qualities = "";
		for (quality in Qualities) { // for each quality in the list
			if (document.getElementById(quality).checked==true) { // if its box is checked
				if(hero.qualities != "") { // if string isn't blank
					hero.qualities += ", "; // add a comma space
				}
				hero.qualities += quality; // add the quality
			}
		}
	}
	if(hero.qualities == "") { // if the hero.qualities string is still blank
		hero.qualities = "None"; // set to none
	}
	CalculateAttributes(hero);
	DisplayHero(hero);
}

// updates the qualities checkboxes based on the hero.qualities string
function ReadQualities(hero) {
	for(quality in Qualities) { // clear all qualities
		document.getElementById(quality).checked = false;
		EnableQuality(quality);
	}
	hero.buildPoints = 9; // set buildPoints to full points
	qualitiesArray = hero.qualities.split(", "); //split up the qualities into an array
	for (i=0; i<qualitiesArray.length; i++) { // for each quality
		var quality = qualitiesArray[i]; // set var quality to the quality in the array
		document.getElementById(quality).checked = true; // check that box
		UpdateBuildPoints(hero, quality); // update the build points to reflect change
	}

}

// makes a quality checkbox able to be checked
function EnableQuality(quality) {
	document.getElementById(quality).disabled = false;
	document.getElementById(quality).parentNode.setAttribute("style", "color:black");
}

// makes a quality checkbox unable to be checked
function DisableQuality(quality) {
	document.getElementById(quality).disabled = true;
	document.getElementById(quality).parentNode.setAttribute("style", "color:#A0A0A0");
}

// update number of available build points when a box is checked or unchecked		
function UpdateBuildPoints(hero, id) {
	if(id != "None") { // if the id is something other than none
		document.getElementById("None").checked=false; // uncheck "none"
	}
	if (document.getElementById(id).checked) { // if it's been checked
		hero.buildPoints -= Qualities[id].cost; // subtract cost from buildpoints
	}
	else {
		hero.buildPoints += Qualities[id].cost; // otherwise add cost to buildpoints
	}
	for (quality in Qualities) { // for each quality
		if (document.getElementById(quality).checked == false) { // if it hasn't been checked
			if (Qualities[quality].cost <= hero.buildPoints) { // if its cost is less than or equal to number of available build points
				EnableQuality(quality); // make it clickable
			}
			else { // if player can't purchase that quality (not enough buildpoints)
				DisableQuality(quality); // make it unclickable, greyed out
			}
		}
	}
}


// when changing roles, update the required attributes hash with this function.
function UpdateRequiredAttributes(role) {
	for (attribute in requiredAttributes) { // for each attribute
		if (hero.role.requirements[attribute]) { // if the hero's chosen role has a requirement related to that attribute
			requiredAttributes[attribute] =  hero.role.requirements[attribute]; // set the requirement to that value
		}
		else {
			requiredAttributes[attribute] = 0; // otherwise set to 0 (to undo previous role choices)
		}
	}	
}

// each time player changes attributes, check that they are still fulfilling required attributes. if not, change color of that attribute to alert player they need to choose different attributes, race or role.
function CheckRequiredAttributes(hero) {
	for (attribute in requiredAttributes) {
		if (hero.attributes[attribute] < requiredAttributes[attribute]) { // if a hero's attribute is lower than the required amount
			document.getElementById(attribute).setAttribute("style", "color:red"); // set color of that attribute to red
		}
		else {document.getElementById(attribute).setAttribute("style", "color:black"); // otherwise set color to black
		}
	}
}

// uncheck all quantities
function ClearQualities(hero) {
	if(document.getElementById("None").checked) { // if the "none" checkbox has been selected
		for (quality in Qualities) {
			if (document.getElementById(quality).checked && quality != "None") { // if a quality has been checked and isn't "none"
				document.getElementById(quality).checked = false; // uncheck it
				hero.buildPoints += Qualities[quality].cost; // add its cost to the hero's buildpoints
			}
		}
	}
}

// updates the HTML page to reflect hero object's variables
function DisplayHero(hero) {
	document.getElementById('HeroName').value = hero.name;
	document.getElementById('Role').innerHTML = hero.role.name;
	document.getElementById('Race').value = hero.race.name;
	document.getElementById('Hero Qualities').innerHTML = hero.qualities;
	if (hero.flipped == false) { // if hero is unflipped, change the traits title and display of the hero's race ability to unflipped
		document.getElementById('Traits Title').innerHTML = "Side 1 Traits";
		document.getElementById('Ability').innerHTML = hero.race.unflipped.ability;
	}
	else { // otherwise change display of hero's race ability to flipped
		document.getElementById('Traits Title').innerHTML = "Side 2 Traits";
		document.getElementById('Ability').innerHTML = hero.race.flipped.ability;
	}
	document.getElementById('Build Points').innerHTML = hero.buildPoints; // display build points
	for(attribute in baseAttributes) { // for each attribute
		var displayArea = document.getElementById(attribute);
		displayArea.innerHTML = hero.attributes[attribute]; // put hero's attribute in the correct field
	}
	CheckRequiredAttributes(hero); // see if any of the required attributes are lacking, highlight them
}

// flips hero's state on button press
function Flip() {
	if (hero.flipped == true) {
		hero.flipped = false;
		document.getElementById('Flip').innerHTML = "Flip Me!";
	}
	else {
		hero.flipped = true;
		document.getElementById('Flip').innerHTML = "Unflip Me!";
	}
}


