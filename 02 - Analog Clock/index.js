let secondsHand = document.querySelector(".second");
let minsHand = document.querySelector(".minute");
let hoursHand = document.querySelector(".hour");

let digitalFlip = document.querySelector(".digitalFlip");
let analogFlip = document.querySelector('.analogFlip');

let digitalTime = document.querySelector(".digitalTime");

function setTime() {
  let d = new Date();
  let seconds = d.getSeconds();
  let secondsDegrees = (seconds / 60) * 360 + 90;
  if (secondsDegrees === 444) {
    secondsDegrees = 84;
    secondsHand.style.transition = "none";
    setTimeout(() => {
      secondsHand.style.transition = "all 0.08s linear";
    }, 2000);
  }
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  let mins = d.getMinutes();
  let minsDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  let hours = d.getHours();
  let hoursDegrees = (hours / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

  let digitalTimeToken = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
  digitalTime.innerHTML = digitalTimeToken;
}

const flipClock = (mode) => {
    if (mode === 'digital') {
        digitalFlip.classList.add("scale-up-center");
        digitalFlip.style.display = 'flex';
        analogFlip.style.display = 'none';
        setTimeout(()=>{
            digitalFlip.classList.remove("scale-up-center");
        },1000)
    }
    
    if (mode === 'analog') {
        analogFlip.classList.add("scale-up-center");
        analogFlip.style.display = "flex";
        digitalFlip.style.display = "none";
        setTimeout(() => {
            analogFlip.classList.remove("scale-up-center");
        }, 1000);
    }
}

let interval = setInterval(setTime, 1000);
