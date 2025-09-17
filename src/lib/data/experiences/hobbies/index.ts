import moment from 'moment';
import { NormalizedExperience, NormalizedProject } from '../index.types';
import { createExperience, createTags } from '../utils';

// Project imports
import * as resume2016Project from './projects/2016-04_2016-02_resume.mnigh.com';
import * as boilerplateIsomorphicTypescriptProject from './projects/2016-02_2016-01_boilerplate-isomorphic-typescript';
import * as yetAnotherIsomorphicBlogProject from './projects/2015-11_2015-10_yet-another-isomorphic-blog';
import * as boilerplateGulpGenericProject from './projects/2015-10_2015-10_boilerplate-gulp-generic';
import * as resume2015Project from './projects/2015-07_2015-07_resume.mnigh.com';
import * as androidAppProject from './projects/2015-05_2014-04_android-app';
import * as resume2014Project from './projects/2014-12_2014-10_resume.mnigh.com';
import * as wwwMnighProject from './projects/2014-11_2014-11_www.mnigh.com';
import * as nodejsMigrationProject from './projects/2014-11_2014-09_NodeJs-Migration';
import * as dockerMigrationProject from './projects/2014-08_2014-07_Docker-Migration';
import * as backboneFinancialAppProject from './projects/2014-02_2014-01_Backbone-Financial-App';
import * as lxcDeploymentProject from './projects/2013-09_2013-04_LXC-Deployment';
import * as resume2012Project from './projects/2012-09_2012-08_resume.mnigh.com';
import * as webAppGeneratorProject from './projects/2012-01_2011-11_Web-App-Generator';

export let title = `Hobbies`;

export let start = ``;
export let end = ``;
export let duration = moment.duration().toJSON();

export let summaryMarkdown = `
Interesting projects outside of work.
`;

export let tags = createTags(duration, [

]);

export let icons = [

];

export const getExperience = async () => {
  let projects = ([
    resume2016Project.project,
    boilerplateIsomorphicTypescriptProject.project,
    yetAnotherIsomorphicBlogProject.project,
    boilerplateGulpGenericProject.project,
    resume2015Project.project,
    androidAppProject.project,
    resume2014Project.project,
    wwwMnighProject.project,
    nodejsMigrationProject.project,
    dockerMigrationProject.project,
    backboneFinancialAppProject.project,
    lxcDeploymentProject.project,
    resume2012Project.project,
    webAppGeneratorProject.project,
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
