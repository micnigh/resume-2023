/**
 * Branded type for Experience IDs to prevent mixing with other ID types
 */
export type ExperienceId = string & { readonly __brand: 'ExperienceId' };

/**
 * Branded type for Project IDs to prevent mixing with other ID types
 */
export type ProjectId = string & { readonly __brand: 'ProjectId' };

/**
 * Branded type for Tag IDs to prevent mixing with other ID types
 */
export type TagId = string & { readonly __brand: 'TagId' };

/**
 * Type guard to check if a string is a valid ExperienceId
 */
export const isExperienceId = (id: string): id is ExperienceId => {
  return typeof id === 'string' && id.length > 0;
};

/**
 * Type guard to check if a string is a valid ProjectId
 */
export const isProjectId = (id: string): id is ProjectId => {
  return typeof id === 'string' && id.length > 0;
};

/**
 * Type guard to check if a string is a valid TagId
 */
export const isTagId = (id: string): id is TagId => {
  return typeof id === 'string' && id.length > 0;
};

interface ProjectNoRelations {
  id?: string;

  title: string;

  /** moment compatible date | empty string */
  start: string;

  /** moment compatible date | empty string */
  end: string;

  /** moment.duration().toJSON() */
  duration: string;

  icons: string[];

  /** html summary */
  summaryHtml?: string;

  /** markdown summary */
  summaryMarkdown: string;

  portfolio?: {
    link: string;
    hoverTitle?: string;
  };
}

export interface Project extends ProjectNoRelations {
  tags: Tag[];
}

export interface Experience extends Project {
  projects: Project[];
}

export interface NormalizedProject extends ProjectNoRelations {
  /** ids of tags */
  tags: string[];
}

export interface NormalizedExperience extends NormalizedProject {
  /** ids of projects */
  projects: string[];
}

export interface Tag {
  id?: string;
  name: string;

  /** abbreviation - used in skills graph when limited width available */
  shorthand?: string;

  /** moment.duration().toJSON() */
  duration: string;
}
