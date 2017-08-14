import {Game} from './game';

window.requestAnimFrame = (function(){
  return window.requestAnimationFrame	   ||
		 window.webkitRequestAnimationFrame ||
		 window.mozRequestAnimationFrame	||
		 function(callback) { window.setTimeout(callback, 1000 / 60); };
})();

loadGame();

function loadGame() {
	if(!document.getElementById("inputCanvas")) {
		window.setTimeout(loadGame, 100);
		return;
	}
	new Game();
}