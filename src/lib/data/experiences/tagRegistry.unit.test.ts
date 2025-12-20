import { describe, it, expect, beforeEach } from 'vitest';
import { createTags, tags } from './tagRegistry';

describe('tagRegistry', () => {
  beforeEach(() => {
    // Clear tags before each test
    Object.keys(tags).forEach((key) => delete tags[key]);
  });

  describe('createTags', () => {
    it('should create new tags', () => {
      const tagIds = createTags('P1Y', ['React', 'TypeScript']);
      expect(tagIds).toHaveLength(2);
      expect(tagIds.every((id) => typeof id === 'string')).toBe(true);
    });

    it('should update existing tags with additional duration', () => {
      const firstIds = createTags('P1Y', ['React']);
      const secondIds = createTags('P6M', ['React']);

      // Should return the same tag ID
      expect(firstIds[0]).toBe(secondIds[0]);

      // Tag should have combined duration
      const tag = tags[firstIds[0]];
      expect(tag).toBeDefined();
      expect(tag?.name).toBe('React');
    });

    it('should return empty array for empty tag names', () => {
      const tagIds = createTags('P1Y', []);
      expect(tagIds).toEqual([]);
    });

    it('should filter out tags without IDs', () => {
      const tagIds = createTags('P1Y', ['TestTag']);
      expect(tagIds.every((id) => id !== undefined)).toBe(true);
    });
  });
});
