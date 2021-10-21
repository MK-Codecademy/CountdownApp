const convertSecondsToDays = (seconds) => {
  // define number of seconds in a minute/hour/day
  const oneMin = 60;
  const oneHour = oneMin * 60;
  const oneDay = oneHour * 24;

  // convert number of seconds to number of whole days, hours, minutes and seconds
  const days = Math.floor(seconds / oneDay);
  const hours = Math.floor(seconds % oneDay / oneHour);
  const mins = Math.floor(seconds % oneHour / oneMin);
  const secs = Math.floor(seconds % oneMin);

  return [days, hours, mins, secs];
}
