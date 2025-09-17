import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `resume.mnigh.com`;

export let start = `2012-08`;
export let end = `2012-09`;
export let duration = moment.duration(moment.utc(end).endOf(`month` as any).diff(moment.utc(start))).toJSON();

export let summaryMarkdown = `
Created web resume using Rails.  Featured custom fonts, mediaquery breakpoints, and a searchable PDF when printed from chrome.
`;

export let icons = [
  `Rails`,
];

export let portfolio = undefined;

export let project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
  `Rails`,
  `Unicorn`,
  `AWS EC2`,
  `AWS S3`,
  `AWS CloudFront`,
  `Git`,
  `Capistrano`,
  `VirtualBox`,
  `PostgreSQL`,
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
  `Guard`,
  `Guard-LiveReload`,
  `Modernizr`,
  `jQuery-cssHooks`,
  `qTipV2`,
  `HTML`,
  `CSS`,
]),
  summaryMarkdown,
  portfolio,
});

export default project;
