			// the base attributes every character begins with. Treat this hash as a constant. Populate hero objects with this hash.

			var baseAttributes = new Object();
			function CreateBaseAttributes() {
				baseAttributes['Might']=2;
				baseAttributes['Will']=2;
				baseAttributes['Awareness']=2;
				baseAttributes['Lore']=2;
				baseAttributes['Health']=4;
				baseAttributes['Stamina']=2;
				baseAttributes['Defense']=1;
				baseAttributes['Speed']=4;
			}
			
			// the minimum required attributes for a hero to exist. When updating attributes, compare against hero's attributes. If hero's attributes < any value in this hash, prevent player from creating character.
			var requiredAttributes = new Object();
			function CreateRequiredAttributes() {
				requiredAttributes['Might']=0;
				requiredAttributes['Will']=0;
				requiredAttributes['Awareness']=0;
				requiredAttributes['Lore']=0;
				requiredAttributes['Health']=0;
				requiredAttributes['Stamina']=0;
				requiredAttributes['Defense']=0;
				requiredAttributes['Speed']=0;
			}
			
			// when changing roles, update the required attributes hash with this function.
			function UpdateRequiredAttributes(role) {
				for (attribute in requiredAttributes) {
					if (hero.role.requirements[attribute]) {
						requiredAttributes[attribute] = hero.role.requirements[attribute];
					}
					else {
						requiredAttributes[attribute] = 0;
					}
					console.log(attribute + " " + requiredAttributes[attribute]); //debugging stuff
				}	
			}
			
			// each time player changes attributes, check that they are still fulfilling required attributes. if not, throw error.
			function CheckRequiredAttributes() {
				
			}
			
			
			
			// a function to generate roles
			var Roles = new Object();
			function CreateRoles() {
			
				Roles["None"] = new Object();
				Roles["None"].name = "None";
				Roles["None"].race = "Human";
				Roles["None"].qualities = "None";
				Roles["None"].requirements = new Object();
				
				// create a fighter role of object type Roles
				Roles["Fighter"] = new Object();
				Roles["Fighter"].name = "Fighter";
				Roles["Fighter"].race = "Orc"; // preferred race
				Roles["Fighter"].qualities = "Strong, Nimble, Good Will"; // preferred qualities
				Roles["Fighter"].requirements = new Object(); // create a requirements hash
				Roles["Fighter"].requirements["Might"] = 3;
				Roles["Fighter"].requirements["Will"] = 2;

				Roles["Barbarian"] = new Object();
				Roles["Barbarian"].name = "Barbarian";
				Roles["Barbarian"].race = "Centaur"; 
				Roles["Barbarian"].qualities = "Tough, Quick"; 
				Roles["Barbarian"].requirements = new Object(); 
				Roles["Barbarian"].requirements["Might"] = 3;
				Roles["Barbarian"].requirements["Health"] = 4;
			
				Roles["Ranger"] = new Object();
				Roles["Ranger"].name = "Ranger";
				Roles["Ranger"].race = "Elf";
				Roles["Ranger"].qualities = "Swift, Great Defense, Good Health"
				Roles["Ranger"].requirements = new Object();
				Roles["Ranger"].requirements["Speed"] = 4;
				Roles["Ranger"].requirements["Awareness"] = 3;
			
				Roles["Thief"] = new Object();
				Roles["Thief"].name = "Thief";
				Roles["Thief"].race = "Halfling";
				Roles["Thief"].qualities = "Agile, Great Awareness, Good Will";
				Roles["Thief"].requirements = new Object();
				Roles["Thief"].requirements["Defense"] = 2;
				Roles["Thief"].requirements["Awareness"] = 2;
			
				Roles["Sorcerer"] = new Object();
				Roles["Sorcerer"].name = "Sorcerer";
				Roles["Sorcerer"].race = "Tiefling";
				Roles["Sorcerer"].qualities = "Brilliant, Nimble";
				Roles["Sorcerer"].requirements = new Object();
				Roles["Sorcerer"].requirements["Lore"] = 3;
				Roles["Sorcerer"].requirements["Stamina"] = 2;
			
				Roles["Summoner"] = new Object();
				Roles["Summoner"].name = "Summoner";
				Roles["Summoner"].race = "Pixie";
				Roles["Summoner"].qualities = "Mystical, Alert, Good Health";
				Roles["Summoner"].requirements = new Object();
				Roles["Summoner"].requirements["Awareness"] = 3;
				Roles["Summoner"].requirements["Health"] = 2;
			
				Roles["Sage"] = new Object();
				Roles["Sage"].name = "Sage";
				Roles["Sage"].race = "Human";
				Roles["Sage"].qualities = "Inspired, Nimble";
				Roles["Sage"].requirements = new Object();
				Roles["Sage"].requirements["Will"] = 3;
				Roles["Sage"].requirements["Lore"] = 2;
			
				Roles["Paladin"] = new Object();
				Roles["Paladin"].name = "Paladin";
				Roles["Paladin"].race = "Dwarf";
				Roles["Paladin"].qualities = "Inspired, Rugged";
				Roles["Paladin"].requirements = new Object();
				Roles["Paladin"].requirements["Will"] = 3;
				Roles["Paladin"].requirements["Might"] = 2;
			}
					
			// a function to generate races
			var Races = new Object();
			function CreateRaces() {
				
				// create a human race of object type Races
				Races["Human"] = new Object();
				Races["Human"].name = "Human";
				Races["Human"].unflipped = new Object();
				Races["Human"].unflipped.modifier = new Object();
				Races["Human"].unflipped.modifier["Will"] = +1;
				Races["Human"].unflipped.ability = "Flip to reroll 1 or more dice in 1 attack or test.";
				Races["Human"].flipped = new Object();
				Races["Human"].flipped.modifier = new Object();
				Races["Human"].flipped.ability = "Add 1 to all tests.";
								
				Races["Centaur"] = new Object();
				Races["Centaur"].name = "Centaur";
				Races["Centaur"].unflipped = new Object();
				Races["Centaur"].unflipped.modifier = new Object();
				Races["Centaur"].unflipped.modifier["Speed"] = +1;
				Races["Centaur"].unflipped.modifier["Health"] = +1;
				Races["Centaur"].unflipped.modifier["Defense"] = -1;
				Races["Centaur"].unflipped.ability = "Flip as an action to move up to your speed, then make 1 melee attack.";
				Races["Centaur"].flipped = new Object();
				Races["Centaur"].flipped.modifier = new Object();
				Races["Centaur"].flipped.modifier["Speed"] = +1;
				Races["Centaur"].flipped.modifier["Health"] = +1;
				Races["Centaur"].flipped.modifier["Defense"] = -1;
				Races["Centaur"].flipped.ability = "Flip after resting instead of regaining fatigue.";
				
				Races["Elf"] = new Object();
				Races["Elf"].name = "Elf";
				Races["Elf"].unflipped = new Object();
				Races["Elf"].unflipped.modifier = new Object();
				Races["Elf"].unflipped.modifier["Speed"] = +1;
				Races["Elf"].unflipped.modifier["Awareness"] = +1;
				Races["Elf"].unflipped.modifier["Might"] = -1;
				Races["Elf"].unflipped.ability = "Flip to reroll your attack roll.";
				Races["Elf"].flipped = new Object();
				Races["Elf"].flipped.modifier = new Object();
				Races["Elf"].flipped.modifier["Speed"] = +1;
				Races["Elf"].flipped.modifier["Might"] = -1;
				Races["Elf"].flipped.ability = "Add 1 to all attack rolls.";
				
				Races["Dwarf"] = new Object();
				Races["Dwarf"].name = "Dwarf";
				Races["Dwarf"].unflipped = new Object();
				Races["Dwarf"].unflipped.modifier = new Object();
				Races["Dwarf"].unflipped.modifier["Health"] = +1;
				Races["Dwarf"].unflipped.modifier["Will"] = +1;
				Races["Dwarf"].unflipped.modifier["Speed"] = -1;
				Races["Dwarf"].unflipped.ability = "Flip when you would gain a condition to discard that condition.";
				Races["Dwarf"].flipped = new Object();
				Races["Dwarf"].flipped.modifier = new Object();
				Races["Dwarf"].flipped.modifier["Might"] = +1;
				Races["Dwarf"].flipped.modifier["Stamina"] = +1;
				Races["Dwarf"].flipped.modifier["Speed"] = -1;
				Races["Dwarf"].flipped.ability = "+1 to armor.";
				
				Races["Halfling"] = new Object();
				Races["Halfling"].name = "Halfling";
				Races["Halfling"].unflipped = new Object();
				Races["Halfling"].unflipped.modifier = new Object();
				Races["Halfling"].unflipped.modifier["Defense"] = +1;
				Races["Halfling"].unflipped.modifier["Awareness"] = +1;
				Races["Halfling"].unflipped.modifier["Health"] = -1;
				Races["Halfling"].unflipped.ability = "Flip to reroll one attack that targets you. Add the defense die if it was not already included.";
				Races["Halfling"].flipped = new Object();
				Races["Halfling"].flipped.modifier = new Object();
				Races["Halfling"].flipped.modifier["Defense"] = +2;
				Races["Halfling"].flipped.modifier["Awareness"] = +1;
				Races["Halfling"].flipped.modifier["Health"] = -1;
				Races["Halfling"].flipped.modifier["Might"] = -1;
				Races["Halfling"].flipped.ability = "";
				
				Races["Pixie"] = new Object();
				Races["Pixie"].name = "Pixie";
				Races["Pixie"].unflipped = new Object();
				Races["Pixie"].unflipped.modifier = new Object();
				Races["Pixie"].unflipped.modifier["Speed"] = ", Fly";
				Races["Pixie"].unflipped.modifier["Stamina"] = +1;
				Races["Pixie"].unflipped.modifier["Health"] = -1;
				Races["Pixie"].unflipped.ability = "Flip as a move to teleport up to twice your speed.";
				Races["Pixie"].flipped = new Object();
				Races["Pixie"].flipped.modifier = new Object();
				Races["Pixie"].flipped.modifier["Speed"] = ", Fly";
				Races["Pixie"].flipped.modifier["Defense"] = +1;
				Races["Pixie"].flipped.modifier["Health"] = -1;
				Races["Pixie"].flipped.ability = "";
				
				Races["Orc"] = new Object();
				Races["Orc"].name = "Orc";
				Races["Orc"].unflipped = new Object();
				Races["Orc"].unflipped.modifier = new Object();
				Races["Orc"].unflipped.modifier["Health"] = +1;
				Races["Orc"].unflipped.modifier["Might"] = +1;
				Races["Orc"].unflipped.modifier["Lore"] = -1;
				Races["Orc"].unflipped.ability = "Flip after rolling an attack to gain +&#9733; and +&#10084;&#10084;";
				Races["Orc"].flipped = new Object();
				Races["Orc"].flipped.modifier = new Object();
				Races["Orc"].flipped.modifier["Health"] = +1;
				Races["Orc"].flipped.modifier["Might"] = +1;
				Races["Orc"].flipped.modifier["Lore"] = -1;
				Races["Orc"].flipped.modifier["Will"] = -1;
				Races["Orc"].flipped.ability = "Add +&#10084; to all attack rolls.";
				
				Races["Tiefling"] = new Object();
				Races["Tiefling"].name = "Tiefling";
				Races["Tiefling"].unflipped = new Object();
				Races["Tiefling"].unflipped.modifier = new Object();
				Races["Tiefling"].unflipped.modifier["Lore"] = +1;
				Races["Tiefling"].unflipped.modifier["Will"] = +1;
				Races["Tiefling"].unflipped.modifier["Health"] = -3;
				Races["Tiefling"].unflipped.ability = "Flip when you would be killed, then heal all wounds and regain all fatigue.";
				Races["Tiefling"].flipped = new Object();
				Races["Tiefling"].flipped.modifier = new Object();
				Races["Tiefling"].flipped.modifier["Will"] = +1;
				Races["Tiefling"].flipped.modifier["Stamina"] = +1;
				Races["Tiefling"].flipped.modifier["Health"] = -2;
				Races["Tiefling"].flipped.ability = "Add +&#9733; to all attack rolls that do not roll an &#10005;.";
			}
	
			// a function to generate qualities
			var Qualities = new Object();	 
			function CreateQualities() {		
				
				Qualities["None"] = new Object();
				Qualities["None"].name = "None";
				Qualities["None"].cost = 0;
				Qualities["None"].attributes = new Object();
				
				// create 1 and 3 point qualities (good and great [attribute])
				for (var attribute in baseAttributes) {
					Qualities["Good " + attribute] = new Object();
					Qualities["Good " + attribute].name = "Good " + attribute;
					Qualities["Good " + attribute].cost = 1;
					Qualities["Good " + attribute].attributes = new Object();
					Qualities["Good " + attribute].attributes[attribute] = 	
								baseAttributes[attribute] + 1;			

					Qualities["Great " + attribute] = new Object();
					Qualities["Great " + attribute].name = "Great " + attribute;
					Qualities["Great " + attribute].cost = 3;
					Qualities["Great " + attribute].attributes = new Object();
					Qualities["Great " + attribute].attributes[attribute] =
								 baseAttributes[attribute] + 2;			
				}
				// create 4 point qualities 
				Qualities["Rugged"] = new Object();
				Qualities["Rugged"].name = "Rugged";
				Qualities["Rugged"].cost = 4;
				Qualities["Rugged"].attributes = new Object();
				Qualities["Rugged"].attributes["Health"] = 6;
				Qualities["Rugged"].attributes["Might"] = 3;
				Qualities["Rugged"].attributes["Stamina"] = 3;
				
				Qualities["Strong"] = new Object();
				Qualities["Strong"].name = "Strong";
				Qualities["Strong"].cost = 4;
				Qualities["Strong"].attributes = new Object();
				Qualities["Strong"].attributes["Health"] = 5;
				Qualities["Strong"].attributes["Might"] = 4;
				Qualities["Strong"].attributes["Stamina"] = 3;
				
				Qualities["Quick"] = new Object();
				Qualities["Quick"].name = "Quick";
				Qualities["Quick"].cost = 4;
				Qualities["Quick"].attributes = new Object();
				Qualities["Quick"].attributes["Speed"] = 6;
				Qualities["Quick"].attributes["Awareness"] = 3;
				Qualities["Quick"].attributes["Defense"] = 2;
				
				Qualities["Alert"] = new Object();
				Qualities["Alert"].name = "Alert";
				Qualities["Alert"].cost = 4;
				Qualities["Alert"].attributes = new Object();
				Qualities["Alert"].attributes["Speed"] = 5;
				Qualities["Alert"].attributes["Awareness"] = 4;
				Qualities["Alert"].attributes["Defense"] = 2;
				
				Qualities["Nimble"] = new Object();
				Qualities["Nimble"].name = "Nimble";
				Qualities["Nimble"].cost = 4;
				Qualities["Nimble"].attributes = new Object();
				Qualities["Nimble"].attributes["Speed"] = 5;
				Qualities["Nimble"].attributes["Awareness"] = 3;
				Qualities["Nimble"].attributes["Defense"] = 3;
				
				Qualities["Stubborn"] = new Object();
				Qualities["Stubborn"].name = "Stubborn";
				Qualities["Stubborn"].cost = 4;
				Qualities["Stubborn"].attributes = new Object();
				Qualities["Stubborn"].attributes["Will"] = 4;
				Qualities["Stubborn"].attributes["Lore"] = 3;
				Qualities["Stubborn"].attributes["Stamina"] = 3;
				
				Qualities["Educated"] = new Object();
				Qualities["Educated"].name = "Educated";
				Qualities["Educated"].cost = 4;
				Qualities["Educated"].attributes = new Object();
				Qualities["Educated"].attributes["Lore"] = 4;
				Qualities["Educated"].attributes["Will"] = 3;
				Qualities["Educated"].attributes["Stamina"] = 3;
				
				Qualities["Mystical"] = new Object();
				Qualities["Mystical"].name = "Mystical";
				Qualities["Mystical"].cost = 4;
				Qualities["Mystical"].attributes = new Object();
				Qualities["Mystical"].attributes["Stamina"] = 4;
				Qualities["Mystical"].attributes["Will"] = 3;
				Qualities["Mystical"].attributes["Lore"] = 3;
								
				// create 5 point qualities
				Qualities["Brilliant"] = new Object();
				Qualities["Brilliant"].name = "Brilliant";
				Qualities["Brilliant"].cost = 5;
				Qualities["Brilliant"].attributes = new Object();
				Qualities["Brilliant"].attributes["Lore"] = 4;
				Qualities["Brilliant"].attributes["Stamina"] = 4;
				
				Qualities["Tough"] = new Object();
				Qualities["Tough"].name = "Tough";
				Qualities["Tough"].cost = 5;
				Qualities["Tough"].attributes = new Object();
				Qualities["Tough"].attributes["Health"] = 6;
				Qualities["Tough"].attributes["Might"] = 4;
				
				Qualities["Swift"] = new Object();
				Qualities["Swift"].name = "Swift";
				Qualities["Swift"].cost = 5;
				Qualities["Swift"].attributes = new Object();
				Qualities["Swift"].attributes["Speed"] = 6;
				Qualities["Swift"].attributes["Awareness"] = 4;
				
				Qualities["Wary"] = new Object();
				Qualities["Wary"].name = "Wary";
				Qualities["Wary"].cost = 5;
				Qualities["Wary"].attributes = new Object();
				Qualities["Wary"].attributes["Defense"] = 3;
				Qualities["Wary"].attributes["Awareness"] = 4;
				
				Qualities["Agile"] = new Object();
				Qualities["Agile"].name = "Agile";
				Qualities["Agile"].cost = 5;
				Qualities["Agile"].attributes = new Object();
				Qualities["Agile"].attributes["Speed"] = 6;
				Qualities["Agile"].attributes["Defense"] = 3;
				
				Qualities["Inspired"] = new Object();
				Qualities["Inspired"].name = "Inspired";
				Qualities["Inspired"].cost = 5;
				Qualities["Inspired"].attributes = new Object();
				Qualities["Inspired"].attributes["Stamina"] = 4;
				Qualities["Inspired"].attributes["Will"] = 4;
				
				Qualities["Wise"] = new Object();
				Qualities["Wise"].name = "Wise";
				Qualities["Wise"].cost = 5;
				Qualities["Wise"].attributes = new Object();
				Qualities["Wise"].attributes["Lore"] = 4;
				Qualities["Wise"].attributes["Will"] = 4;
				
			}

			function Initialize() {
				CreateBaseAttributes();
				CreateRequiredAttributes();
				CreateRoles();
				CreateRaces();
				CreateQualities();

			}
			
			// create a class Hero, accepts name and role to start
			function Hero(name, role) {
  			     
  			     this.name = name;
  			     this.role = Roles[role]; // assigns it a role object
  			     this.race = Races[Roles[role].race]; // assigns it a race object
				 this.qualities = Roles[role].qualities; // assigns it a qualities string (comma separated)
				 this.buildPoints = 9; // nine build points to spend
				 this.attributes = new Object();
				 this.flipped = false; // flipped state of the hero object
				 UpdateAttributes(this); // this function will be used to update attributes each time player does something. Called once during character creation to update attributes initially.
			}
			
			//update attributes function
			var qualitiesArray = new Array();
			function UpdateAttributes(hero) {
				qualitiesArray = hero.qualities.split(", ");
				for(attribute in baseAttributes) {
					hero.attributes[attribute]=baseAttributes[attribute];
					for (i=0; i<qualitiesArray.length; i++) {
					    var quality = qualitiesArray[i];
						if (Qualities[quality].attributes[attribute] > hero.attributes[attribute]) {
							hero.attributes[attribute] = Qualities[quality].attributes[attribute];
						}
					}
					if (hero.flipped == true) {
						if (hero.race.flipped.modifier[attribute]) {
							hero.attributes[attribute] += hero.race.flipped.modifier[attribute];
						}
					}
					else {
						if (hero.race.unflipped.modifier[attribute]) {
							hero.attributes[attribute] += hero.race.unflipped.modifier[attribute];
						}
					}	
				}	
			}
			
			//update name function
			var name = "";
			function UpdateName(hero) {
				hero.name = document.getElementById('HeroName').value;
			}
			
			//update role function
			var role="";
			function UpdateRole(hero, role) {
				oldRole = hero.role.name;
				hero.role = Roles[role];
				if (oldRole == "None") {
					hero.race = Races[Roles[role].race];
					hero.qualities = Roles[role].qualities;
					ReadQualities(hero);
				}
				UpdateAttributes(hero);
				UpdateRequiredAttributes(hero, role);
				DisplayHero(hero);
			}
			
			//update race function
			var race="";
			function UpdateRace(hero) {
				hero.race = Races[document.getElementById('Race').value];
				UpdateAttributes(hero);
				DisplayHero(hero);
			}
			
			function ReadQualities(hero) {
				for(quality in Qualities) { // clear all qualities
					document.getElementById(quality).checked = false;
					EnableQuality(quality);
				}
				hero.buildPoints = 9;
				qualitiesArray = hero.qualities.split(", ");
				for (i=0; i<qualitiesArray.length; i++) {
				    var quality = qualitiesArray[i];
				    document.getElementById(quality).checked = true;
				    UpdateBuildPoints(hero, quality);
				}

			}
			
			function EnableQuality(quality) {
				document.getElementById(quality).disabled = false;
				document.getElementById(quality).parentNode.setAttribute("style", "color:black");
			}
			
			function DisableQuality(quality) {
				document.getElementById(quality).disabled = true;
				document.getElementById(quality).parentNode.setAttribute("style", "color:#A0A0A0");
			}
						
			function UpdateBuildPoints(hero, id) {
				if(id != "None") {
					document.getElementById("None").checked=false;
				}
				if (document.getElementById(id).checked) {
					hero.buildPoints -= Qualities[id].cost;
				}
				else {
					hero.buildPoints += Qualities[id].cost;
				}
				for (quality in Qualities) {
					if (document.getElementById(quality).checked == false) {
						if (Qualities[quality].cost <= hero.buildPoints) {
							EnableQuality(quality);
						}
						else {
							DisableQuality(quality);
						}
					}
				}
				console.log(hero.buildPoints + " buildpoints remaining");
			}
			function PrintQuality(id) {
				console.log(document.getElementById(id).checked);
				
			}
			function UpdateQualities(hero) {
				if (document.getElementById("None").checked==true) {
					hero.qualities = "None";
				}
				else {				
					hero.qualities = "";
					for (quality in Qualities) {
						if (document.getElementById(quality).checked==true) {
							if(hero.qualities != "") {
								hero.qualities += ", ";
							}
							hero.qualities += quality;
						}
					}
				}
				if(hero.qualities == "") {
					hero.qualities = "None";
				}
				UpdateAttributes(hero);
				DisplayHero(hero);
			}
				//need to figure out how to uncheck "none" when it's the only checked box and you check a different trait
				// make "None" a button!
			function ClearQualities(hero) {
				if(document.getElementById("None").checked) {
					for (quality in Qualities) {
						console.log(quality);
						if (document.getElementById(quality).checked && quality != "None") {
							document.getElementById(quality).checked = false;
							hero.buildPoints += Qualities[quality].cost;
						}
					}
				}
			}
			
			//todo: make displayhero also update the qualities checkboxes from the qualities string.
			function DisplayHero(hero) {
				document.getElementById('HeroName').value = hero.name;
				document.getElementById('Role').innerHTML = hero.role.name;
				document.getElementById('Race').value = hero.race.name;
				document.getElementById('Qualities').innerHTML = hero.qualities;
				if (hero.flipped == false) {
					document.getElementById('Traits Title').innerHTML = "Side 1 Traits";
					document.getElementById('Ability').innerHTML = hero.race.unflipped.ability;
				}
				else {
					document.getElementById('Traits Title').innerHTML = "Side 2 Traits";
					document.getElementById('Ability').innerHTML = hero.race.flipped.ability;
				}
				for(attribute in baseAttributes) {
					var displayArea = document.getElementById(attribute);
					displayArea.innerHTML = hero.attributes[attribute];
				}
			}
			
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
			

