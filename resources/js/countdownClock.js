import {calculateTimeUntil} from './calculateTimeUntil.js';
import {convertSecondsToDays} from './convertSecondsToDays.js';


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
  document.getElementById('clock').innerHTML = timeUntil.days + 'd ' + timeUntil.hours + 'h ' + timeUntil.mins + 'm ' + timeUntil.secs + 's';

  // remove one second
  secondsUntil -= 1;

  // display if the countdown has finished
  if (secondsUntil < 0) {
    clearInterval(clock);
    document.getElementById('clock').innerHTML = 'Countdown Complete';
  }
}, 1000);


