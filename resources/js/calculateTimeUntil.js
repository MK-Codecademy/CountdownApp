const calculateTimeUntil = (countdown) => {
  const currentDate = Date.now(); //get unix timestamp for current date/time)
  const countdownDate = Date.parse(countdown.date + ' ' + countdown.time) //get unix timestamp for countdown date/time

  const timeUntil = Math.floor((countdownDate - currentDate) / 1000); //calculate time (in seconds) until countdown date

  return timeUntil
}

export {calculateTimeUntil}