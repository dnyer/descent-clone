

var illumination = 0; // represents the area's illumination. Multiply by each character's 
					  // Awareness trait to generate their field of view.
					  // 0 = pitch black
					  // 1 = starlight
					  // 2 = moonlight
					  // 3 = (dim) torchlight
					  // 4 = sunset / sunrise
					  // 5 = noon

var mapRows = 255; // represent's # of map's rows.
var mapColumns = 255; // represents # of map's columns.
var MapData = 
  "################################################################\n"
+ "#@          #                                #                 #\n"
+ "#           #                                #                 #\n"
+ "##########  #                                |                 #\n"
+ "#        #  #                                |                 #\n"
+ "#        #  #                                #                 #\n"
+ "#        #  #                                #                 #\n"
+ "#####   ##--##################--##############                 #\n"
+ "#                                            #                 #\n"
+ "#                                            #                 #\n"
+ "#--############################--####################--#########\n"
+ "#                    |        #  #        |                    #\n"
+ "#                    |        #  #        |                    #\n"
+ "#               ######       ##  ##       ######               #\n"
+ "#              ##    ##     ##    ##     ##    ##              #\n"
+ "#             ##      #######      #######      ##             #\n"
+ "#             #                                  #             #\n"
+ "#             #                                  #             #\n"
+ "#             #                                  #             #\n"
+ "################                                #######--#######\n"
+ "#              ##                              ##              #\n"
+ "#               ##                            ##               #\n"
+ "################################################################\n";

function DisplaySpeedAndAwareness() {
	document.getElementById('HeroSpeed').value = hero.attributes['Speed'];
	document.getElementById('HeroAwareness').value = hero.attributes['Awareness'];
}

function UpdateSpeed(hero) {
	hero.attributes['Speed'] = document.getElementById('HeroSpeed').value;
	console.log('Speed of ' + hero.attributes['Speed'] + '\n');

}

function UpdateAwareness(hero) {
	hero.attributes['Awareness'] = document.getElementById('HeroAwareness').value;
	console.log('Awareness of ' + hero.attributes['Awareness'] + '\n');
}

function ChangeIllumination() {
	illumination = document.getElementById('Illumination').value;
}

function ChangeMapRows() {
	if (document.getElementById('MapRows').value < 1) {
		mapRows = 1;
	}
	else {
		mapRows = document.getElementById('MapRows').value;
	}
	Map(mapRows, mapColumns);
}

function ChangeMapColumns() {
	if (document.getElementById('MapColumns').value < 1) {
		mapColumns = 1;
	}
	else {
		mapColumns = document.getElementById('MapColumns').value;
	}
	Map(mapRows, mapColumns);
}

//in progress
var visibility = {
	BLACK:0,
	FOGGED:1,
	VISIBLE:2
};

var map = new Array();
function Map(mapRows, mapColumns) {
	document.getElementById('MapRows').value = mapRows;
	document.getElementById('MapColumns').value = mapColumns;
	map = createArray(mapRows, mapColumns);
	$('#Map').empty();
	for (var i=0; i<mapRows; i++) {
		var row = document.createElement('tr');
		
		document.getElementById('Map').appendChild(row);
		for (var j=0; j<mapColumns; j++) {
			map[i,j] = new Object();
			map[i,j].xvalue = i;
			map[i,j].yvalue= j;
			map[i,j].wall = false;
			map[i,j].region = 0;
			map[i,j].visibility=visibility.VISIBLE;
			var cell = document.createElement('td');
			cell.id = "map_" + i + "_" + j;
			var tile = document.createElement("img");
			if(((i + j) %2) == 0) {
				cell.bgcolor = "white";
				tile.src = 'white tile.png';
			} else {
				cell.bgcolor = "grey";
				tile.src = 'grey tile.png';
			}
			tile.style.display = "block";			

			cell.onclick = function(event) {
				console.log(this.id);
			}

			row.appendChild(cell);
			cell.appendChild(tile);			
		}
	}
			
/*			if ((i+j) % 2 == 0 ) {
				var tile = document.createElement("img");
				tile.value = '(' + map[i,j].xvalue + ', ' + map[i,j].yvalue + ')';
				tile.src = 'grey tile.png';
				tile.style.cssFloat="none";
				tile.style.width=64;
				tile.style.height=64;
				tile.onclick = function(event) {
					console.log(tile.value);
				};
				document.getElementById('Map').appendChild(tile);
			}
			else {
				var tile = document.createElement("img");
				tile.src = 'white tile.png';
				tile.style.cssFloat="none";
				tile.style.width=64;
				tile.style.height=64;
				tile.value = '(' + map[i,j].xvalue + ', ' + map[i,j].yvalue + ')';
				tile.onclick = function(event) {
					console.log(tile.value);
				};
			document.getElementById('Map').appendChild(tile);
		//	console.log("(" + map[i,j].xvalue + ", " + map[i,j].yvalue + ")");
			}
	//	console.log("\n");
		for (square in map) {
			if ((square.xvalue + square.yvalue) % 2 == 0) {
				var tile = document.createElement("img");
				tile.src = 'white tile.png';
				tile.value = '(' + square.xvalue + ', ' + square.yvalue + ')';
				tile.onclick = function(event) {
					console.log(tile.value);
				}
				document.getElementById('Map').appendChild(tile);
			}
			else {
				var tile = document.createElement("img");
				tile.src = 'grey tile.png';
				tile.value = '(' + square.xvalue + ', ' + square.yvalue + ')';
				tile.onclick = function(event) {
				console.log(tile.value);
				}
				document.getElementById('Map').appendChild(tile);
			}
		}
		var br = document.createElement('br');
		document.getElementById('Map').appendChild(br);
	}

	map[mapRows, mapColumns] = new array(); // probably junky code, use as reference only
	
	var mapElement = document.getElementById('Map').innerHTML;
	var tileId = 0;
	var whiteTile = document.createElement("div");
		whiteTile.style.width = "64px";
		whiteTile.style.height = "64px";
		whiteTile.style.background="white";
	var greyTile = document.createElement("div");
		greyTile.style.width = "64px";
		greyTile.style.width = "64px";
		greyTile.style.background="grey";
	for (var i=0; i<mapRows; i++) {
		for (var j=0; j<mapColumns; j++) {
			if (tileId % 2 == 0) {
				mapElement.append(whiteTile);
				whiteTile.setAttribute("id", tileId);
			}
			else {
				mapElement.append(greyTile);
				greyTile.setAttribute("id", tileId);
			}
			tileId++;
		}
	mapElement.append(br);	
	}*/ //this is all crap. start over.
}


// A way to generate n-dimensional arrays. May want to use to create the 2d map array that refers to tile objects. picked up from http://bit.ly/14Ixo1h
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}