import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'Monterey Phoenix';

export const start = '';
export const end = '';

export const duration = 'P3M'; // 3 months in ISO 8601 duration format

export const summaryMarkdown = `
Code editor for the [Monterey Phoenix language](https://wiki.nps.edu/display/MP/Monterey+Phoenix+Home) with graph visualizations and automated layouts.  Used to examine process flow in a variety of disciplines to clarify and find problems in the execution of asynchronous events.
`;

export const icons = [
  'Gulp',
  'NodeJS',
  'Docker',
  'Backbone',
];

export const portfolio = {
  link: 'http://firebird.nps.edu/',
  hoverTitle: 'View public website',
};

export const project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
  'socket.io',
]),
  summaryMarkdown,
  portfolio,
});

export default project;
