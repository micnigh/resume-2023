import { calculateDuration, formatDuration } from '../../../../util/dates';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'yet another isomorphic blog';

export const start = '2015-10';
export const end = '2015-11';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Created an isomorphic React blog.

Bootstrapped from past boilerplate project, creates a static isomorphic website which can be hosted on github pages at no cost.
`;

export const icons = [
  'Gulp',
  'NodeJS',
  'React',
];

export const portfolio = {
  link: 'https://github.com/micnigh/yet-another-isomorphic-blog/',
  hoverTitle: 'View public git repo',
};

export const project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
  'NodeJS',
  'Gulp',
  'Git',
  'Sass',
  'HTML',
  'CSS',
  'React',
  'jsonapi',
]),
  summaryMarkdown,
  portfolio,
});

export default project;
