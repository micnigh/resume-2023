import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'Hurricane Decision Simulator';

export const start = '';
export const end = '';
export const duration = 'P3M'; // 3 months in ISO 8601 duration format

export const summaryMarkdown = `
Simulation of decisions that occur as a result of a hurricane heading towards a major city and how to handle its evacuation.
`;

export const icons = [
  'Gulp',
  'NodeJS',
  'Docker',
  'Backbone',
  'Java',
];

export const portfolio = {
  link: 'http://eddy.nps.edu/hurricaneSim/',
  hoverTitle: 'View public website',
};

export const project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
  'matlab',
]),
  summaryMarkdown,
  portfolio,
});

export default project;
