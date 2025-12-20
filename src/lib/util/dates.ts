/**
 * Format a date string to YYYY-MM format
 * @param date - Date string or Date object
 * @returns Formatted date string in YYYY-MM format, or empty string if invalid
 */
export const formatYearMonth = (date: string | Date): string => {
  if (!date) return '';

  try {
    const d = typeof date === 'string' ? new Date(date) : date;

    // Check if date is valid
    if (isNaN(d.getTime())) {
      const dateStr = typeof date === 'string' ? date : date.toString();
      console.warn(`Invalid date provided to formatYearMonth: ${dateStr}`);
      return '';
    }

    const year = d.getUTCFullYear();
    const month = String(d.getUTCMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
  } catch (error) {
    const dateStr = typeof date === 'string' ? date : date.toString();
    console.warn(`Error formatting date: ${dateStr}`, error);
    return '';
  }
};

/**
 * Format a date range for display
 * @param start - Start date string
 * @param end - End date string (optional, empty string means ongoing)
 * @returns Formatted date range string
 */
export const formatDateRange = (start: string, end: string): string => {
  if (!start) return '';
  const startFormatted = formatYearMonth(start);
  if (!startFormatted) {
    console.warn(`Invalid start date: ${String(start)}`);
    return '';
  }
  const endFormatted = end ? formatYearMonth(end) : 'present';
  if (end && !endFormatted) {
    console.warn(`Invalid end date: ${String(end)}`);
  }
  return `${startFormatted} to ${endFormatted}`;
};

/**
 * Validate a date string
 * @param dateString - Date string to validate
 * @returns True if the date is valid
 */
const isValidDate = (dateString: string): boolean => {
  if (!dateString) return false;
  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

/**
 * Calculate duration between two dates in milliseconds
 * @param start - Start date string
 * @param end - End date string (optional, defaults to now)
 * @returns Duration in milliseconds, or 0 if dates are invalid
 */
export const calculateDuration = (start: string, end: string): number => {
  if (!isValidDate(start)) {
    console.warn(`Invalid start date for calculateDuration: ${String(start)}`);
    return 0;
  }

  const startDate = new Date(start);
  const endDate = end && isValidDate(end) ? new Date(end) : new Date();

  if (isNaN(endDate.getTime())) {
    console.warn(`Invalid end date for calculateDuration: ${String(end)}`);
    return 0;
  }

  const duration = endDate.getTime() - startDate.getTime();

  if (duration < 0) {
    console.warn(
      `End date (${end || 'now'}) is before start date (${String(start)})`
    );
    return 0;
  }

  return duration;
};

/**
 * Add durations in ISO 8601 format
 * @param duration1 - First duration in ISO 8601 format
 * @param duration2 - Second duration in ISO 8601 format
 * @returns Combined duration in ISO 8601 format
 */
export const addDurations = (duration1: string, duration2: string): string => {
  if (!duration1 || !duration2) {
    console.warn('Empty duration provided to addDurations');
    return duration1 || duration2 || 'PT0S';
  }
  const ms1 = parseDuration(duration1);
  const ms2 = parseDuration(duration2);
  return formatDuration(ms1 + ms2);
};

/**
 * Parse ISO 8601 duration to milliseconds
 * @param duration - Duration string in ISO 8601 format (e.g., "P1Y2M3DT4H5M6S")
 * @returns Duration in milliseconds, or 0 if invalid
 */
export const parseDuration = (duration: string): number => {
  if (!duration || typeof duration !== 'string') {
    console.warn(`Invalid duration string: ${duration}`);
    return 0;
  }

  // Simple parser for ISO 8601 duration format (PT###S or P#Y#M#DT#H#M#S)
  const regex =
    /P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?/;
  const matches = duration.match(regex);

  if (!matches) {
    console.warn(`Invalid ISO 8601 duration format: ${duration}`);
    return 0;
  }

  const [
    ,
    years = '0',
    months = '0',
    days = '0',
    hours = '0',
    minutes = '0',
    seconds = '0',
  ] = matches;

  const msPerYear = 365.25 * 24 * 60 * 60 * 1000;
  const msPerMonth = 30.44 * 24 * 60 * 60 * 1000;
  const msPerDay = 24 * 60 * 60 * 1000;
  const msPerHour = 60 * 60 * 1000;
  const msPerMinute = 60 * 1000;
  const msPerSecond = 1000;

  return (
    parseFloat(years) * msPerYear +
    parseFloat(months) * msPerMonth +
    parseFloat(days) * msPerDay +
    parseFloat(hours) * msPerHour +
    parseFloat(minutes) * msPerMinute +
    parseFloat(seconds) * msPerSecond
  );
};

/**
 * Format milliseconds to ISO 8601 duration format
 * @param milliseconds - Duration in milliseconds
 * @returns Duration string in ISO 8601 format
 */
export const formatDuration = (milliseconds: number): string => {
  if (typeof milliseconds !== 'number' || isNaN(milliseconds)) {
    console.warn(`Invalid milliseconds value: ${milliseconds}`);
    return 'PT0S';
  }

  if (milliseconds < 0) {
    console.warn(`Negative duration: ${milliseconds}`);
    return 'PT0S';
  }

  const seconds = milliseconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const months = days / 30.44;
  const years = months / 12;

  if (years >= 1) {
    const y = Math.floor(years);
    const m = Math.floor((years - y) * 12);
    return m > 0 ? `P${y}Y${m}M` : `P${y}Y`;
  }

  if (months >= 1) {
    const m = Math.floor(months);
    const d = Math.floor((months - m) * 30.44);
    return d > 0 ? `P${m}M${d}D` : `P${m}M`;
  }

  if (days >= 1) {
    return `P${Math.floor(days)}D`;
  }

  return `PT${Math.floor(seconds)}S`;
};
