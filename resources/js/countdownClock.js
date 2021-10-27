import {calculateTimeUntil} from './modules/calculateTimeUntil.js';
import {convertSecondsToDays} from './convertSecondsToDays.js';

// DOM elements for days, hours, mins and secs
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

// ChristmasCountdown object for testing purposes
const Christmas = {
  name: 'Christmas',
  date: '21 Dec 2021',
  time: '00:00:00'
}

// get seconds from now until countdown date
let secondsUntil = calculateTimeUntil(Christmas);

// initiate clock
const clock = setInterval(() => {
  const timeUntil = convertSecondsToDays(secondsUntil);

  // display clock in the DOM
  daysEl.innerHTML = timeUntil.days;
  hoursEl.innerHTML = timeUntil.hours;
  minsEl.innerHTML = timeUntil.mins;
  secsEl.innerHTML = timeUntil.secs;

  // remove one second
  secondsUntil -= 1;

  // display if the countdown has finished
  // if (secondsUntil < 0) {
  //   clearInterval(clock);
  //   document.getElementById('clock').innerHTML = 'Countdown Complete';
  // }
}, 1000);


