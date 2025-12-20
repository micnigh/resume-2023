import { type Tag } from './index.types';
import { addDurations } from '../../util/dates';

/**
 * Cache of tags by name for quick lookup
 */
const tagCacheByName: { [name: string]: Tag } = {};

/**
 * Global registry of all tags by ID
 */
export const tags: { [guid: string]: Tag } = {};

/**
 * Create a new tag with a unique ID
 * @param options - Tag options (name and duration)
 * @returns The created tag
 */
export const createTag = (options: Tag): Tag => {
  const tag: Tag = {
    id: crypto.randomUUID(),
    ...options,
  };
  tagCacheByName[options.name] = tag;
  if (tag.id) {
    tags[tag.id] = tag;
  }
  return tag;
};

/**
 * Get an existing tag by name or create a new one
 * @param name - The tag name
 * @param duration - The duration to add if creating a new tag
 * @returns The tag (existing or newly created)
 */
const getOrCreateTag = (name: string, duration: string): Tag => {
  const existingTag = tagCacheByName[name];
  if (existingTag) {
    // Update existing tag with additional duration
    const updatedTag: Tag = {
      ...existingTag,
      duration: addDurations(existingTag.duration, duration),
    };
    tagCacheByName[name] = updatedTag;
    if (updatedTag.id) {
      tags[updatedTag.id] = updatedTag;
    }
    return updatedTag;
  }
  // Create new tag
  return createTag({ name, duration });
};

/**
 * Create or update tags for a given duration
 * @param duration - The duration to associate with the tags
 * @param newTags - Array of tag names
 * @returns Array of tag IDs
 */
export const createTags = (duration: string, newTags: string[]): string[] => {
  return newTags
    .map((tagName) => getOrCreateTag(tagName, duration))
    .map((tag) => tag.id)
    .filter((id): id is string => typeof id === 'string');
};
