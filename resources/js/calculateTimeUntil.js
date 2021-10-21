const calculateTimeUntil = (countdown) => {
  const currentDate = Date.now(); //get current date (no. milliseconds since Jan 1 1970 00:00:00 UTC)

  const timeUntil = Math.floor((countdown.date - currentDate) / 1000); //calculate time until countdown date, in seconds
  console.log(timeUntil);

  return timeUntil
}

export {calculateTimeUntil}

// Currently the countdown passed in takes the below FormData, but this may be changed later
// const Christmas = {
//   name: 'Christmas',
//   date: Date.parse('21 Dec 2021 00:00:00 GMT')
// }