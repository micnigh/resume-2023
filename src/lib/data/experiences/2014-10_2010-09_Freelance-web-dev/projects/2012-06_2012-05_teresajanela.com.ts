import { calculateDuration, formatDuration } from '../../../../util/dates';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'teresajanela.com';

export const start = '2012-05';
export const end = '2012-06';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Created simple Rails website, later porting to WordPress as a CMS.  Evaluated numerous deployment options, including Heroku, DotCloud, and AWS - eventually deployed to AWS using EC2, S3, and CloudFront.
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
  'Unicorn',
  'AWS EC2',
  'AWS S3',
  'AWS CloudFront',
  'Twitter JSON API',
  'Tumblr API',
  'Git',
  'Capistrano',
  'VirtualBox',
  'MongoDB',
  'Sass',
  'Compass',
  'Fancy-Buttons',
  'Ruby',
  'Coffeescript',
  'JQuery',
  'Slim',
  'Mongoid',
  'Devise',
  'CanCan',
  'Rolify',
  'Paperclip',
  'Asset-Sync',
  'Vagrant',
  'Veewee',
  'Sprinkle',
  'Modernizr',
  'jQuery-cssHooks',
  'HTML',
  'CSS',
]),
  summaryMarkdown,
});

export default project;
