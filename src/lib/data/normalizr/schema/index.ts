import { schema } from 'normalizr';

export const tag = new schema.Entity('tags');
export const project = new schema.Entity('projects', {
  tags: [ tag ],
});

export const experience = new schema.Entity('experiences', {
  projects: [ project ],
  tags: [ tag ],
});
