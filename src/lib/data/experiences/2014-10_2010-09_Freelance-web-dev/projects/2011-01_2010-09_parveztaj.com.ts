import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `parveztaj.com`;

export let start = `2010-09`;
export let end = `2011-01`;
export let duration = moment.duration(moment.utc(end).endOf(`month` as any).diff(moment.utc(start))).toJSON();

export let summaryMarkdown = `
Constructed art gallery website using a variety of tools, including GWT, JQuery, and Typeface.  Emphasis on design, compatibility, and performance.  Expanded GWT to allow exact positioning, shadows, custom fonts, and history support.  Worked directly with the client to achieve the exact look and feel they needed.

Maintained and added new content coinciding with launch events for a few years; This included adding new collections, sending out newsletters, and posting to various social media.  Assisted in migration to ecommerce by importing existing products into new Shopify site in 2014.
`;

export let tags = createTags(duration, [
  `GWT`,
  `JQuery`,
  `Typeface`,
  `Java`,
  `Javascript`,
  `Rackspace Cloud`,
  `Rackspace CloudFiles`,
  `Flowplayer`,
  `Facebook`,
  `YouTube`,
  `Constant Contact`,
  `HTML`,
  `CSS`,
]);

export let icons = [
  `Java`,
];

export let project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags,
  summaryMarkdown,
});

export default project;
