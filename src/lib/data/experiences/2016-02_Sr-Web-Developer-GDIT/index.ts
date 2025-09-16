import moment from 'moment';
import { NormalizedExperience, NormalizedProject } from '../index.types';
import { createExperience, createTags } from '../';

import * as _ from 'lodash';

export let title = `Senior Web Developer - NPS CED3 - GDIT`;

export let start = `2015-02`;
export let end = `2018-02`;

export let duration = moment.duration(moment.utc().diff(moment.utc(start))).toJSON();

export let startDeveloper = `2015-02`;
export let endDeveloper = `2016-01`;
export let durationDeveloper = moment.duration(moment.utc(endDeveloper).diff(moment.utc(startDeveloper))).toJSON();

export let startSeniorDeveloper = `2016-02`;
export let endSeniorDeveloper = `2018-02`;
export let durationSeniorDeveloper = moment.duration(moment.utc().diff(moment.utc(startSeniorDeveloper))).toJSON();

export let summaryMarkdown = `
**Senior Web Developer**  ${startSeniorDeveloper} to ${endSeniorDeveloper}

**Web Developer**  ${startDeveloper} to ${endDeveloper}

Build and maintain CED3 web applications to enhance course development and delivery at the Naval Postgraduate School in Monterey.

Responsibilities include managing programming team, recruiting and training new hires, managing project timelines and scope, choosing tech stacks and architecture, setting long term plans and goals, and supporting and extending services.

Backends in NodeJs Express with Docker deployments using the [twelve-factor app](http://12factor.net/) model.

Frontends with React/Redux and Webpack for bundling.

Legacy systems in PHP, Java Wicket, and Backbone.
`;

let tagsDeveloper = createTags(durationDeveloper, [
  `NodeJS`,
  `Gulp`,
  `Git`,
  `Docker`,
  `Less`,
  `JQuery`,
  `Backbone`,
  `Java`,
  `HTML`,
  `CSS`,
]);

let tagsSeniorDeveloper = createTags(durationSeniorDeveloper, [
  `NodeJS`,
  `Webpack`,
  `Git`,
  `Docker`,
  `Sass`,
  `JQuery`,
  `React`,
  `Redux`,
  `Java`,
  `HTML`,
  `CSS`,
  `Typescript`,
  `Gulp`,
  `Backbone`,
]);

export let tags = _.uniq(tagsDeveloper.concat(tagsSeniorDeveloper));

export let icons = [];

export const getExperience = async () => {
  let projects = ([
    (await import('./projects/hurricane-decision-simulator')).project,
    (await import('./projects/monterey-phoenix')).project,
    (await import('./projects/post-assess')).project,
  ] as NormalizedProject[]).map(p => p.id) as string[];

  let experience: NormalizedExperience = createExperience({
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
}

export default getExperience;
