/* const calculateTimeUntil = (countdown) => {
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
const daysEl = document.getElementsByClassName('days');
const hoursEl = document.getElementsByClassName('hours');
const minsEl = document.getElementsByClassName('minutes');
const secsEl = document.getElementsByClassName('seconds');

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
  for (let i = 0; i < daysEl.length; i++) {
    daysEl[i].innerHTML = timeUntil.days;
    hoursEl[i].innerHTML = timeUntil.hours;
    minsEl[i].innerHTML = timeUntil.mins;
    secsEl[i].innerHTML = timeUntil.secs;
  }

  // remove one second
  secondsUntil -= 1;

  // display if the countdown has finished
  if (secondsUntil < 0) {
     clearInterval(clock);
     document.getElementById('clock').innerHTML = 'Countdown Complete';
  }
}, 1000);
 */