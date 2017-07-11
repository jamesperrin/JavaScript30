const hoursHand = document.querySelector('.hour-hand');
const minsHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
    const now = new Date();
    const hours = now.getHours();
    const mins = now.getMinutes();
    const seconds = now.getSeconds();

    const hoursDegrees = ((hours / 12) * 360) + 90; // Offset due to default 90deg setting
    const minsDegrees = ((mins / 60) * 360) + 90; // Offset due to default 90deg setting
    const secondsDegrees = ((seconds / 60) * 360) + 90; // Offset due to default 90deg setting

    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    //console.log(hours + ":" + mins + ":" + seconds);
}

setInterval(setDate, 1000);
