/**
 * Format a date string to YYYY-MM format
 */
export const formatYearMonth = (date: string | Date): string => {
  if (!date) return '';
  const d = typeof date === 'string' ? new Date(date) : date;
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
};

/**
 * Format a date range for display
 */
export const formatDateRange = (start: string, end: string): string => {
  if (!start) return '';
  const startFormatted = formatYearMonth(start);
  const endFormatted = end ? formatYearMonth(end) : 'present';
  return `${startFormatted} to ${endFormatted}`;
};

/**
 * Calculate duration between two dates in milliseconds
 */
export const calculateDuration = (start: string, end: string): number => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  return endDate.getTime() - startDate.getTime();
};

/**
 * Add durations in ISO 8601 format
 */
export const addDurations = (duration1: string, duration2: string): string => {
  const ms1 = parseDuration(duration1);
  const ms2 = parseDuration(duration2);
  return formatDuration(ms1 + ms2);
};

/**
 * Parse ISO 8601 duration to milliseconds
 */
export const parseDuration = (duration: string): number => {
  // Simple parser for ISO 8601 duration format (PT###S or P#Y#M#DT#H#M#S)
  const regex = /P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?/;
  const matches = duration.match(regex);
  
  if (!matches) return 0;
  
  const [, years = '0', months = '0', days = '0', hours = '0', minutes = '0', seconds = '0'] = matches;
  
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
 */
export const formatDuration = (milliseconds: number): string => {
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

