import {calculateTimeUntil} from './calculateTimeUntil.js';
import {convertSecondsToDays} from './convertSecondsToDays.js';


// ChristmasCountdown object for testing purposes
const Christmas = {
  name: 'Christmas',
  date: Date.parse('21 Dec 2021 00:00:00 GMT')
}


const clock = setInterval(() => {
  const secondsUntil = calculateTimeUntil(Christmas);
  const timeUntil = convertSecondsToDays(secondsUntil);

  // display clock in the DOM
  document.getElementById('clock').innerHTML = timeUntil.days + 'd ' + timeUntil.hours + 'h ' + timeUntil.mins + 'm ' + timeUntil.secs + 's';

  // show if the countdown has finished
  if (secondsUntil < 0) {
    clearInterval(clock);
    document.getElementById('clock').innerHTML = 'Countdown Complete';
  }
}, 1000);


