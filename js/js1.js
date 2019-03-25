autoSlider();
var left = 0;
var timer;

function autoSlider (){
	timer = setTimeout (function (){
		var polosa = document.getElementById('polosa');
		left = left - 900;
		if (left < -5400) {
			left = 0;
			clearTimeout(timer);
		}
		polosa.style.left = left + 'px';
		autoSlider();
	}, 3000);
}