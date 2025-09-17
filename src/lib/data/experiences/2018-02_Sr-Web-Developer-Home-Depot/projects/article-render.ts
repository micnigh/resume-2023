import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `Article Render Squad`;

export let start = `2018-10`;
export let end = `2019-03`;
export let duration = moment.duration(moment.utc().endOf(`month` as any).diff(moment.utc(start))).toJSON();

export let summaryMarkdown = `
Work with product owners to optimize SEO and render new article content as lead front end engineer.

Analyze SEO impact of React usage with THD architects as an SPA, element replacement, and SSR.

Create automated tests to validate all new and existing content is rendered correctly.

Implement image snapshot differential testing for components at various states.

Work with multiple teams to improve testing process throughout deployments.

Develop strategies to implement NextGen THD features.

`;

export let icons = [
  `Webpack`,
  `NodeJS`,
  `Docker`,
];

export let portfolio = undefined;

export let project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
  `Typescript`,
  `NodeJS`,
  `Webpack`,
  `Git`,
  `Docker`,
  `Sass`,
  `JQuery`,
  `HTML`,
  `CSS`,
  `ExpressJS`,
]),
  summaryMarkdown,
  portfolio,
});

export default project;
