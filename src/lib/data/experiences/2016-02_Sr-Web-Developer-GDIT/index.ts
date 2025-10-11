import { NormalizedExperience, NormalizedProject } from '../index.types';
import { createExperience, createTags } from '../utils';
import { calculateDuration, formatDuration } from '../../../util/dates';
import * as _ from 'lodash';

// Project imports
import * as hurricaneDecisionSimulatorProject from './projects/hurricane-decision-simulator';
import * as montereyPhoenixProject from './projects/monterey-phoenix';
import * as postAssessProject from './projects/post-assess';

export const title = 'Senior Web Developer - NPS CED3 - GDIT';

export const start = '2015-02';
export const end = '2018-02';

export const duration = formatDuration(calculateDuration(start, end));

export const startDeveloper = '2015-02';
export const endDeveloper = '2016-01';
export const durationDeveloper = formatDuration(calculateDuration(startDeveloper, endDeveloper));

export const startSeniorDeveloper = '2016-02';
export const endSeniorDeveloper = '2018-02';
export const durationSeniorDeveloper = formatDuration(calculateDuration(startSeniorDeveloper, endSeniorDeveloper));

export let summaryMarkdown = `
**Senior Web Developer**  ${startSeniorDeveloper} to ${endSeniorDeveloper}

**Web Developer**  ${startDeveloper} to ${endDeveloper}

Build and maintain CED3 web applications to enhance course development and delivery at the Naval Postgraduate School in Monterey.

Responsibilities include managing programming team, recruiting and training new hires, managing project timelines and scope, choosing tech stacks and architecture, setting long term plans and goals, and supporting and extending services.

Backends in NodeJs Express with Docker deployments using the [twelve-factor app](http://12factor.net/) model.

Frontends with React/Redux and Webpack for bundling.

Legacy systems in PHP, Java Wicket, and Backbone.
`;

const tagsDeveloper = createTags(durationDeveloper, [
  'NodeJS',
  'Gulp',
  'Git',
  'Docker',
  'Less',
  'JQuery',
  'Backbone',
  'Java',
  'HTML',
  'CSS',
]);

const tagsSeniorDeveloper = createTags(durationSeniorDeveloper, [
  'NodeJS',
  'Webpack',
  'Git',
  'Docker',
  'Sass',
  'JQuery',
  'React',
  'Redux',
  'Java',
  'HTML',
  'CSS',
  'Typescript',
  'Gulp',
  'Backbone',
]);

export const tags = _.uniq(tagsDeveloper.concat(tagsSeniorDeveloper));

export const icons: string[] = [];

export const getExperience = async (): Promise<NormalizedExperience> => {
  const projects = ([
    hurricaneDecisionSimulatorProject.project,
    montereyPhoenixProject.project,
    postAssessProject.project,
  ] as NormalizedProject[]).map((p) => p.id) as string[];

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
