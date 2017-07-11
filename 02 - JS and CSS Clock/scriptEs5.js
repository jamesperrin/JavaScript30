var hoursHandIe = document.querySelector('.hour-hand');
var minsHandIe = document.querySelector('.min-hand');
var secondHandIe = document.querySelector('.second-hand');

function setDateIe() {
    var now = new Date();
    var hours = now.getHours();
    var mins = now.getMinutes();
    var seconds = now.getSeconds();

    var hoursDegrees = ((hours / 12) * 360) + 90; // Offset due to default 90deg setting
    var minsDegrees = ((mins / 60) * 360) + 90; // Offset due to default 90deg setting
    var secondsDegrees = ((seconds / 60) * 360) + 90; // Offset due to default 90deg setting

    hoursHandIe.style.transform = 'rotate(' + hoursDegrees + 'deg)';
    minsHandIe.style.transform = 'rotate(' + minsDegrees + 'deg)';
    secondHandIe.style.transform = 'rotate(' + secondsDegrees + 'deg)';
    //console.log(seconds);
    //console.log(hours + ":" + mins + ":" + seconds);
}

setInterval(setDateIe, 1000);
