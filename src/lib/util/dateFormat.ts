/**
 * Format a time string to ISO format
 * @param time - Time string (moment compatible date or empty string)
 * @returns ISO formatted date string or empty string
 */
export const formatTime = (time: string): string => {
  if (time === '') return time;
  const date = new Date(time);
  return date.toISOString();
};
