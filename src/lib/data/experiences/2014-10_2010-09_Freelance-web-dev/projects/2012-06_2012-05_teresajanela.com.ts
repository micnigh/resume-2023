import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `teresajanela.com`;

export let start = `2012-05`;
export let end = `2012-06`;
export let duration = moment.duration(moment.utc(end).endOf(`month` as any).diff(moment.utc(start))).toJSON();

export let summaryMarkdown = `
Created simple Rails website, later porting to WordPress as a CMS.  Evaluated numerous deployment options, including Heroku, DotCloud, and AWS - eventually deployed to AWS using EC2, S3, and CloudFront.
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
  `Unicorn`,
  `AWS EC2`,
  `AWS S3`,
  `AWS CloudFront`,
  `Twitter JSON API`,
  `Tumblr API`,
  `Git`,
  `Capistrano`,
  `VirtualBox`,
  `MongoDB`,
  `Sass`,
  `Compass`,
  `Fancy-Buttons`,
  `Ruby`,
  `Coffeescript`,
  `JQuery`,
  `Slim`,
  `Mongoid`,
  `Devise`,
  `CanCan`,
  `Rolify`,
  `Paperclip`,
  `Asset-Sync`,
  `Vagrant`,
  `Veewee`,
  `Sprinkle`,
  `Modernizr`,
  `jQuery-cssHooks`,
  `HTML`,
  `CSS`,
]),
  summaryMarkdown,
});

export default project;
