export const getDayofWeek = (date) => {
  const transformedDate = new Date(date * 1000);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];
  return days[transformedDate.getDay()];
}
