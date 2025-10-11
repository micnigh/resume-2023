import { calculateDuration, formatDuration } from '../../../../util/dates';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'Backbone Financial App';

export const start = '2014-01';
export const end = '2014-02';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Development spike to experiment with Backbone after a few books and [backbonerails.com](http://backbonerails.com) screencast.  Built in NodeJs with seperate Grunt tasks for retrieving data, serving a REST API, and rendering.  Did not pursue due to high licensing cost of financial data.
`;

export const icons = [
  'Grunt',
  'NodeJS',
  'Backbone',
  'MongoDB',
];

export const portfolio = undefined;

export const project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
  'NodeJS',
  'Bootstrap',
  'Grunt',
  'MongoDB',
  'Mongoose',
  'Git',
  'Backbone',
  'Marionette',
  'Sass',
  'Coffeescript',
  'HTML',
  'CSS',
]),
  summaryMarkdown,
  portfolio,
});

export default project;
