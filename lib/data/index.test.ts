import { getExperiences } from './';
import denormalizeExperience from './normalizr/denormalizr/experience';
import { Experience } from './experiences/index.types';

describe('data', async () => {
  const data = await getExperiences();
  it('returns normalized data', function () {
    expect(data.entities).toBeDefined();
  });

  it('data can be denormalized', function () {
    // todo: implement full test - this assumes one experience with a tag is defined
    let id = Object.keys(data.entities.experiences)[0];
    let denormalizedExperience: Experience = denormalizeExperience(id, data.entities);
    expect(denormalizedExperience.tags[0].name).toBeDefined();
  });
});
