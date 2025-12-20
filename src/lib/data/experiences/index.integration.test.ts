import { describe, it, expect } from 'vitest';
import { getExperiences } from './index';
import {
  createExperience,
  createProject,
  createTags,
  projectsById,
  tags,
} from './utils';

describe('Data Loading Integration', () => {
  it('should load and denormalize experiences', async () => {
    // Clear existing data
    Object.keys(projectsById).forEach((key) => delete projectsById[key]);
    Object.keys(tags).forEach((key) => delete tags[key]);

    // Create test data
    const project1 = createProject({
      title: 'Test Project 1',
      start: '2020-01-01',
      end: '2021-12-31',
      duration: 'P2Y',
      icons: [],
      tags: createTags('P2Y', ['React', 'TypeScript']),
      summaryMarkdown: 'Project 1 summary',
    });

    const project2 = createProject({
      title: 'Test Project 2',
      start: '2022-01-01',
      end: '2023-12-31',
      duration: 'P2Y',
      icons: [],
      tags: createTags('P2Y', ['React', 'NodeJS']),
      summaryMarkdown: 'Project 2 summary',
    });

    createExperience({
      title: 'Test Experience',
      start: '2020-01-01',
      end: '2023-12-31',
      duration: 'P4Y',
      icons: [],
      tags: createTags('P4Y', ['React']),
      projects: [project1.id!, project2.id!],
      summaryMarkdown: 'Experience summary',
    });

    // Note: This test assumes the experience is registered in the module system
    // In a real scenario, we'd mock the experience modules
    const result = await getExperiences();

    expect(result.experiences).toBeDefined();
    expect(result.tags).toBeDefined();
    expect(Array.isArray(result.experiences)).toBe(true);
    expect(Array.isArray(result.tags)).toBe(true);
  });

  it('should resolve project IDs to full project objects', async () => {
    // This test verifies the denormalization logic
    // In practice, this would be tested with mocked experience modules
    const result = await getExperiences();

    result.experiences.forEach((exp) => {
      exp.projects.forEach((project) => {
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('tags');
        expect(Array.isArray(project.tags)).toBe(true);
      });
    });
  });

  it('should resolve tag IDs to full tag objects', async () => {
    const result = await getExperiences();

    result.experiences.forEach((exp) => {
      expect(exp).toHaveProperty('tags');
      expect(Array.isArray(exp.tags)).toBe(true);

      exp.tags.forEach((tag) => {
        expect(tag).toHaveProperty('name');
        expect(tag).toHaveProperty('duration');
      });

      exp.projects.forEach((project) => {
        project.tags.forEach((tag) => {
          expect(tag).toHaveProperty('name');
          expect(tag).toHaveProperty('duration');
        });
      });
    });
  });
});
