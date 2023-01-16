import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `LXC Deployment`;

export let start = `2013-04`;
export let end = `2013-09`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Created LXC wrapper to handle project deployment.  Vagrant like commands added to shell by custom ZSH plugin.  Utilized btrfs for caching to minimize redeployment time.  Supported Wordpress deployment and theme generation.
`;

export let tags = createTags(duration, [
  `Rails`,
  `Wordpress`,
  `Bootstrap`,
  `AWS EC2`,
  `AWS S3`,
  `AWS CloudFront`,
  `Git`,
  `VirtualBox`,
  `Sass`,
  `Compass`,
  `Ruby`,
  `PHP`,
  `Coffeescript`,
  `JQuery`,
  `Vagrant`,
  `Linux`,
  `lxc`,
  `zsh`,
  `oh-my-zsh`,
  `Sprinkle`,
  `HTML`,
  `CSS`,
]);

export let icons = [
  `Rails`,
  `Wordpress`,
  `Linux`,
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
