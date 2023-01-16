import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `Web App Generator`;

export let start = `2011-11`;
export let end = `2012-01`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Created Coffeescript based single page app generator.  Solved SEO by rendering first page from server and remaining pages from application.  Utilized TDD and BDD to ensure SPA worked well in all browsers.

Interesting features include an AATree (heavily stress and performance tested), priority based image download queue, and a package system similar to AMD for modular code and easy mocking.
`;

export let tags = createTags(duration, [
  `NodeJS`,
  `Coffeescript`,
  `CoffeeKup`,
  `Jasmine`,
  `SEO`,
  `BDD`,
  `TDD`,
  `HTML`,
  `CSS`,
]);

export let icons = [
  `NodeJS`,
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
