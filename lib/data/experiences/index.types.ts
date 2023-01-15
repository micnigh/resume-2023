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
    link: string,
    hoverTitle?: string,
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

  /** path to image icon */
  icon: string;

  /** abbreviation - used in skills graph when limited width available */
  shorthand?: string;

  /** moment.duration().toJSON() */
  duration: string;
}
