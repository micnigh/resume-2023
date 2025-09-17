import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `drbacal.com`;

export let start = `2013-02`;
export let end = `2013-04`;
export let duration = moment.duration(moment.utc(end).endOf(`month` as any).diff(moment.utc(start))).toJSON();

export let summaryMarkdown = `
Constructed WordPress backed website using custom deployment tools I built earlier with Sprinkle (similar to Chef).  Worked with client and SEO specialist for design and content.  Used Rails with LiveReload to generate SASS and Coffeescript of WordPress theme.
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
