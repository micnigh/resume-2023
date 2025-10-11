import { calculateDuration, formatDuration } from '../../../../util/dates';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'resume.mnigh.com';

export const start = '2016-02';
export const end = '2016-04';
export const duration = formatDuration(calculateDuration(start, end));

// tslint:disable
export const summaryMarkdown = `
Published resume as open source project.

Fork of previous boilerplate project, streamlined and improved from past iterations. Replaced graphs with simple React components, vastly improved skill calculations, and reogranized structure to better represent project associations.
`;
// tslint:enable

export const icons = [
  'Gulp',
  'NodeJS',
  'React',
];

export const portfolio = {
  link: 'https://github.com/micnigh/resume-2016/',
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
