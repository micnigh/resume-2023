import { calculateDuration, formatDuration } from '../../../../util/dates';
import { type NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'LXC Deployment';

export const start = '2013-04';
export const end = '2013-09';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Created LXC wrapper to handle project deployment.  Vagrant like commands added to shell by custom ZSH plugin.  Utilized btrfs for caching to minimize redeployment time.  Supported Wordpress deployment and theme generation.
`;

export const icons = ['Rails', 'Wordpress', 'Linux'];

export const portfolio = undefined;

export const project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
    'Rails',
    'Wordpress',
    'Bootstrap',
    'AWS EC2',
    'AWS S3',
    'AWS CloudFront',
    'Git',
    'VirtualBox',
    'Sass',
    'Compass',
    'Ruby',
    'PHP',
    'Coffeescript',
    'JQuery',
    'Vagrant',
    'Linux',
    'lxc',
    'zsh',
    'oh-my-zsh',
    'Sprinkle',
    'HTML',
    'CSS',
  ]),
  summaryMarkdown,
  portfolio,
});

export default project;
