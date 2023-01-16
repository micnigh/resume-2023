import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `resume.mnigh.com`;

export let start = `2015-07`;
export let end = `2015-08`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Updated, upgraded, and easier to maintain after working on various Docker and Gulp projects over the last year.
`;

export let tags = createTags(duration, [
  `NodeJS`,
  `Gulp`,
  `Bower`,
  `Digital Ocean`,
  `Git`,
  `Docker`,
  `Sass`,
  `Compass`,
  `Coffeescript`,
  `JQuery`,
  `HTML`,
  `CSS`,
]);

export let icons = [
  `Gulp`,
  `NodeJS`,
  `Bower`,
  `Docker`,
];

export let portfolio = undefined;

export let project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags,
  summaryMarkdown,
  portfolio,
});

export default project;
