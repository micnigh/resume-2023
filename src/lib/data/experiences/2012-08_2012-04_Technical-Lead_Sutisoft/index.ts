import { NormalizedExperience } from '../index.types';
import { createExperience, createTags } from '../utils';
import { calculateDuration, formatDuration } from '../../../util/dates';

export const title = 'Technical Lead - Sutisoft';

export const start = '2012-04';
export const end = '2012-08';
export const duration = formatDuration(calculateDuration(start, end));

export let summaryMarkdown = `
Began development on internal company project by creating a prototype.  Project required WYSIWYG functionality using recent HTML5 and CSS3 techniques.  The prototype was green lighted - and the skeleton of the project was built in Rails.  Researched and implemented the skeleton, choosing between various open source libraries.
`;

export const tags = createTags(duration, [
  'Rails',
  'Unicorn',
  'Git',
  'Capistrano',
  'VirtualBox',
  'MongoDB',
  'Middleman',
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
  'Guard',
  'Guard-LiveReload',
  'Modernizr',
  'jQuery-UI',
  'Spectrum',
  'jQuery-contextMenu',
  'jQuery-cssHooks',
  'qTipV2',
  'HTML',
  'CSS',
]);

export const icons = ['Rails'];

export const getExperience = async (): Promise<NormalizedExperience> => {
  const projects: string[] = [];

  const experience: NormalizedExperience = createExperience({
    title,
    start,
    end,
    duration,
    icons,
    tags,
    projects,
    summaryMarkdown,
  });

  return experience;
};

export default getExperience;
