const calculateTimeUntil = (countdown) => {
  const currentDate = Date.now(); //get unix timestamp for current date/time)
  const countdownDate = Date.parse(countdown.date + ' ' + countdown.time) //get unix timestamp for countdown date/time

  const timeUntil = Math.floor((countdownDate - currentDate) / 1000); //calculate time (in seconds) until countdown date

  return timeUntil
}

const convertSecondsToDays = (seconds) => {
  // define number of seconds in a minute/hour/day
  const oneMin = 60;
  const oneHour = oneMin * 60;
  const oneDay = oneHour * 24;

  // convert number of seconds to number of whole days, hours, minutes and seconds
  let days = Math.floor(seconds / oneDay);
  let hours = Math.floor(seconds % oneDay / oneHour);
  let mins = Math.floor(seconds % oneHour / oneMin);
  let secs = Math.floor(seconds % oneMin);

  // convert to double digits
  days = (days < 10 ? '0' : '') + days;
  hours = (hours < 10 ? '0' : '') + hours;
  mins = (mins < 10 ? '0' : '') + mins;
  secs = (secs < 10 ? '0' : '') + secs;

  return {days: days, hours: hours, mins: mins, secs: secs};
}

// DOM elements for days, hours, mins and secs
const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

// ChristmasCountdown object for testing purposes
const Christmas = {
  name: 'Christmas',
  date: '21 Dec 2021',
  time: '00:00:00'
}

// get seconds from now until countdown date
let secondsUntil = calculateTimeUntil(Christmas);

// flipping animation using greensock
function animateFlip(element, value) {

  element.querySelector('.top-back span').innerText = value;
  element.querySelector('.bottom-back span').innerText = value;


  gsap.to(element.querySelector('.top'), 0.7, {
      rotationX: '-180deg',
      transformPerspective: 300,
      ease: Quart.easeOut,
      onComplete: function() {
          element.querySelector('.top').innerText = value; 
          element.querySelector('.bottom').innerText = value; 
          gsap.set(element.querySelector('.top'), {rotationX: 0});
      }
  });

  gsap.to(element.querySelector('.top-back'), 0.7, {
      rotationX: 0,
      transformPerspective: 300,
      ease: Quart.easeOut,
      clearProps: 'all'
  });

}

// initiate clock
function init() {
  const clock = setInterval(() => {
    const timeUntil = convertSecondsToDays(secondsUntil);
  
    // display clock in the DOM
    animateFlip(days, timeUntil.days);
    animateFlip(hours, timeUntil.hours);
    animateFlip(minutes, timeUntil.mins);
    animateFlip(seconds, timeUntil.secs);
  
    // remove one second
    secondsUntil -= 1;
  
    // display if the countdown has finished
    if (secondsUntil < 0) {
       clearInterval(clock);
       document.getElementById('clock').innerHTML = 'Countdown Complete';
    }
  }, 1000);
}

init();
