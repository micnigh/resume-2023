import { calculateDuration, formatDuration } from '../../../../util/dates';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'noahsarkretreat.com';

export const start = '2013-06';
export const end = '2013-07';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Recovered website from [WayBackMachine](https://archive.org/web/) and ported to Wordpress theme.  Extended original site and added features such as responsive image galleries.  Updated content and added new pages.  During development used Rails with LiveReload to generate Coffeescript and SASS of WordPress theme.
`;

export const icons = [
  'Rails',
  'Wordpress',
];

export const project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
  'Rails',
  'Wordpress',
  'Ramnode',
  'Git',
  'VirtualBox',
  'Sass',
  'Compass',
  'Ruby',
  'PHP',
  'Coffeescript',
  'JQuery',
  'Vagrant',
  'lxc',
  'zsh',
  'oh-my-zsh',
  'Sprinkle',
  'HTML',
  'CSS',
]),
  summaryMarkdown,
});

export default project;
