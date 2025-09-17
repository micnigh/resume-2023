import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `noahsarkretreat.com`;

export let start = `2013-06`;
export let end = `2013-07`;
export let duration = moment.duration(moment.utc(end).endOf(`month` as any).diff(moment.utc(start))).toJSON();

export let summaryMarkdown = `
Recovered website from [WayBackMachine](https://archive.org/web/) and ported to Wordpress theme.  Extended original site and added features such as responsive image galleries.  Updated content and added new pages.  During development used Rails with LiveReload to generate Coffeescript and SASS of WordPress theme.
`;

export let icons = [
  `Rails`,
  `Wordpress`,
];

export let project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
  `Rails`,
  `Wordpress`,
  `Ramnode`,
  `Git`,
  `VirtualBox`,
  `Sass`,
  `Compass`,
  `Ruby`,
  `PHP`,
  `Coffeescript`,
  `JQuery`,
  `Vagrant`,
  `lxc`,
  `zsh`,
  `oh-my-zsh`,
  `Sprinkle`,
  `HTML`,
  `CSS`,
]),
  summaryMarkdown,
});

export default project;
