//=============================================
// javascript30 Version ES5
//=============================================
function transitionEndEventName() {
    var i,
        undefined,
        el = document.createElement('div'),
        transitions = {
            'transition': 'transitionend',
            'OTransition': 'otransitionend', // oTransitionEnd in very old Opera
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        };

    for (i in transitions) {
        if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
            return transitions[i];
        }
    }

    //TODO: throw 'TransitionEnd event is not supported in this browser'; 
}


function removeTransition(e) {
	alert("BOOM");
	console.log(e);
	if (e.propertyName !== 'transform') return; // Skip if it's not transformed
	console.log(e.propertyName);
	this.classList.remove('playing');
};

function playSound(e) {
	// body
	//console.log(e.keyCode);
	var keyCode = e.keyCode;
	//console.log(keyCode);

	var audio = document.querySelector('audio[data-key2=a' + keyCode + ']');
	//console.log(audio);

	if (!audio) return; // Stops the function from running all together;
	audio.classList.add('key');

	var key = document.querySelector('audio.key[data-key2=a' + keyCode + ']');
	//console.log(key);
	playAudio = new Audio(key.src);
	playAudio.timeupdate = 0; // Rewind to the start
	playAudio.play();
	key.classList.add('playing');
};

var keys = document.querySelectorAll('.key');
//console.log(keys);

// for (var i = 0; i < keys.length; i++) {
//     keys[i].addEventListener(transitionEndEventName(), removeTransition, false);
// }

for (var i = 0; i < keys.length; i++) {
	keys[i].addEventListener('transitionend', function (e) {
		alert("BOOM");
		console.log(e);
		if (e.propertyName !== 'transform') return; // Skip if it's not transformed
		console.log(e.propertyName);
		this.classList.remove('playing');
	}, false);
}

// for (var i = 0; i < keys.length; i++) {
//     (function () {
//         //console.log(keys[i]);
//         keys[i].addEventListener('transitionend', removeTransition);
//     }());
// }

window.addEventListener('keydown', playSound);
