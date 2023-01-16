import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `mnigh.com`;

export let start = `2014-11`;
export let end = `2014-11`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Created blog to increase my online presence and demonstrate technical knowledge in an informal way.  Built with NodeJs stack using custom Gulp tasks.
`;

export let tags = createTags(duration, [
  `NodeJS`,
  `Bootstrap`,
  `Gulp`,
  `Bower`,
  `Git`,
  `Sass`,
  `Coffeescript`,
  `HTML`,
  `CSS`,
]);

export let icons = [
  `Gulp`,
  `NodeJS`,
  `Bower`,
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
