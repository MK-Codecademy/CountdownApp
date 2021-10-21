const calculateTimeUntil = (countdown) => {
  const currentDate = Date.now(); //get current date (no. milliseconds since Jan 1 1970 00:00:00 UTC)

  const timeUntil = Math.floor((countdown.date - currentDate) / 1000); //calculate time until countdown date, in seconds
  console.log(timeUntil);

  return timeUntil
}



// ChristmasCountdown object for testing purposes
const Christmas = {
  name: 'Christmas',
  date: Date.parse('21 Oct 2021 11:48:00 GMT')
}

calculateTimeUntil(Christmas)