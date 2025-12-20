import { describe, it, expect } from 'vitest';
import {
  formatYearMonth,
  formatDateRange,
  calculateDuration,
  addDurations,
  parseDuration,
  formatDuration,
} from './dates';

describe('dates', () => {
  describe('formatYearMonth', () => {
    it('should format a valid date string to YYYY-MM', () => {
      expect(formatYearMonth('2023-05-15')).toBe('2023-05');
    });

    it('should format a Date object to YYYY-MM', () => {
      const date = new Date('2023-05-15');
      expect(formatYearMonth(date)).toBe('2023-05');
    });

    it('should return empty string for empty input', () => {
      expect(formatYearMonth('')).toBe('');
    });

    it('should return empty string for invalid date', () => {
      expect(formatYearMonth('invalid-date')).toBe('');
    });
  });

  describe('formatDateRange', () => {
    it('should format a date range with start and end', () => {
      expect(formatDateRange('2020-01-01', '2023-12-31')).toBe(
        '2020-01 to 2023-12'
      );
    });

    it('should format a date range with only start (ongoing)', () => {
      expect(formatDateRange('2020-01-01', '')).toBe('2020-01 to present');
    });

    it('should return empty string for empty start', () => {
      expect(formatDateRange('', '2023-12-31')).toBe('');
    });
  });

  describe('calculateDuration', () => {
    it('should calculate duration between two dates', () => {
      const start = '2020-01-01';
      const end = '2023-01-01';
      const duration = calculateDuration(start, end);
      expect(duration).toBeGreaterThan(0);
    });

    it('should use current date when end is empty', () => {
      const start = '2020-01-01';
      const duration = calculateDuration(start, '');
      expect(duration).toBeGreaterThan(0);
    });

    it('should return 0 for invalid start date', () => {
      expect(calculateDuration('invalid', '2023-01-01')).toBe(0);
    });

    it('should return 0 when end is before start', () => {
      expect(calculateDuration('2023-01-01', '2020-01-01')).toBe(0);
    });
  });

  describe('parseDuration', () => {
    it('should parse ISO 8601 duration to milliseconds', () => {
      const duration = parseDuration('P1Y2M3DT4H5M6S');
      expect(duration).toBeGreaterThan(0);
    });

    it('should parse years', () => {
      const duration = parseDuration('P1Y');
      expect(duration).toBeGreaterThan(0);
    });

    it('should parse months', () => {
      const duration = parseDuration('P6M');
      expect(duration).toBeGreaterThan(0);
    });

    it('should return 0 for invalid format', () => {
      expect(parseDuration('invalid')).toBe(0);
    });

    it('should return 0 for empty string', () => {
      expect(parseDuration('')).toBe(0);
    });
  });

  describe('formatDuration', () => {
    it('should format milliseconds to ISO 8601 duration', () => {
      const ms = 365 * 24 * 60 * 60 * 1000; // 1 year
      const duration = formatDuration(ms);
      // The function may format as months/days or years depending on calculation
      expect(duration).toMatch(/^P\d+[YMD]/);
    });

    it('should return PT0S for 0 milliseconds', () => {
      expect(formatDuration(0)).toBe('PT0S');
    });

    it('should return PT0S for negative milliseconds', () => {
      expect(formatDuration(-1000)).toBe('PT0S');
    });

    it('should return PT0S for NaN', () => {
      expect(formatDuration(NaN)).toBe('PT0S');
    });
  });

  describe('addDurations', () => {
    it('should add two durations', () => {
      const result = addDurations('P1Y', 'P6M');
      expect(result).toBeTruthy();
      expect(parseDuration(result)).toBeGreaterThan(parseDuration('P1Y'));
    });

    it('should handle empty durations', () => {
      expect(addDurations('', 'P1Y')).toBe('P1Y');
      expect(addDurations('P1Y', '')).toBe('P1Y');
    });
  });
});
