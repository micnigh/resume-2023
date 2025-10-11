import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'Post & Assess';

export const start = '';
export const end = '';

export const duration = 'P3M'; // 3 months in ISO 8601 duration format

export const summaryMarkdown = `
Tool for students to publish posts, be assessed by peers, and graded by an instructor.

Hides posts until each period is over, preventing students from being influenced by early posts.
`;

export const icons = [
  'Gulp',
  'NodeJS',
  'Docker',
  'React',
];

export const portfolio = undefined;

export const project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
  'React',
  'Redux',
  'Typescript',
]),
  summaryMarkdown,
  portfolio,
});

export default project;
