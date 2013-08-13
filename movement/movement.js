

var illumination = 0; // represents the area's illumination. Multiply by each character's 
					  // Awareness trait to generate their field of view.
					  // 0 = pitch black
					  // 1 = starlight
					  // 2 = moonlight
					  // 3 = (dim) torchlight
					  // 4 = sunset / sunrise
					  // 5 = noon

var mapRows = 6; // represent's # of map's rows.
var mapColumns = 6; // represents # of map's columns.

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
function Map(mapRows, mapColumns) {
	document.getElementById('MapRows').value = mapRows;
	document.getElementById('MapColumns').value = mapColumns;
/*	map[mapRows, mapColumns] = new array(); // probably junky code, use as reference only
	
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
	}
	*/
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