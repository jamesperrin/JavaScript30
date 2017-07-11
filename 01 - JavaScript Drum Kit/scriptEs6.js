//=============================================
// javascript30 Version ES6
//=============================================
function removeTransition(e) {
    //console.log(e);
    if (e.propertyName !== 'transform') return; // Skip if it's not transformed
    //console.log(e.propertyName);
    this.classList.remove('playing');
};

function playSound(e) {
    // body
    //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //console.log(audio);

    if (!audio) return; // Stops the function from running all together;

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    //console.log(key);

    audio.currentTime = 0; // Rewind to the start
    audio.play();
    key.classList.add('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
