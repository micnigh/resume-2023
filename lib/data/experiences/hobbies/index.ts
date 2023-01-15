import moment from 'moment';
import { NormalizedExperience, NormalizedProject } from '../index.types';
import { createExperience, createTags } from '../';

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
    (await import('./projects/2016-04_2016-02_resume.mnigh.com')).project,
    (await import('./projects/2016-02_2016-01_boilerplate-isomorphic-typescript')).project,
    (await import('./projects/2015-11_2015-10_yet-another-isomorphic-blog')).project,
    (await import('./projects/2015-10_2015-10_boilerplate-gulp-generic')).project,
    (await import('./projects/2015-07_2015-07_resume.mnigh.com')).project,
    (await import('./projects/2015-05_2014-04_android-app')).project,
    (await import('./projects/2014-12_2014-10_resume.mnigh.com')).project,
    (await import('./projects/2014-11_2014-11_www.mnigh.com')).project,
    (await import('./projects/2014-11_2014-09_NodeJs-Migration')).project,
    (await import('./projects/2014-08_2014-07_Docker-Migration')).project,
    (await import('./projects/2014-02_2014-01_Backbone-Financial-App')).project,
    (await import('./projects/2013-09_2013-04_LXC-Deployment')).project,
    (await import('./projects/2012-09_2012-08_resume.mnigh.com')).project,
    (await import('./projects/2012-01_2011-11_Web-App-Generator')).project,
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
