

var Illumination = 1; // represents the area's illumination. Multiply by each character's 
					  // Awareness trait to generate their field of view.
					  // 0 = pitch black
					  // 1 = starlight
					  // 2 = moonlight
					  // 3 = (dim) torchlight
					  // 4 = sunset / sunrise
					  // 5 = noon

function DisplaySpeedAndAwareness() {
	document.getElementById('HeroSpeed').value = hero.attributes['Speed'];
	document.getElementById('HeroAwareness').value = hero.attributes['Awareness'];
}

function UpdateSpeed(speed) {
	
}

function UpdateAwareness(awareness) {

}
