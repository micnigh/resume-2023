import { calculateDuration, formatDuration } from '../../../../util/dates';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'boilerplate isomorphic typescript';

export const start = '2016-01';
export const end = '2016-02';
export const duration = formatDuration(calculateDuration(start, end));

// tslint:disable
export const summaryMarkdown = `
Boilerplate isomorphic React Typescript project.

Experimented with various build systems such as JSPM, Webpack, and Gulp, then combined the best of each into one project.  Sucessfully forked for a wide variety of projects, thanks to a type enhanced configuration file and related Gulp tasks.
`;
// tslint:enable

export const icons = [
  'Gulp',
  'NodeJS',
  'React',
];

export const portfolio = {
  link: 'https://github.com/micnigh/boilerplate-isomorphic-typescript/',
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
  'Redux',
  'Typescript',
]),
  summaryMarkdown,
  portfolio,
});

export default project;
