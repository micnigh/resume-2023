import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Experience } from './index';
import { type Experience as ExperienceType } from '../../lib/data/experiences/index.types';

describe('Experience Integration', () => {
  const mockExperience: ExperienceType = {
    id: 'test-exp-1',
    title: 'Test Experience',
    start: '2020-01-01',
    end: '2023-12-31',
    duration: 'P3Y',
    icons: ['React'],
    tags: [
      {
        id: 'tag-1',
        name: 'React',
        duration: 'P3Y',
      },
    ],
    summaryMarkdown: 'Test summary',
    summaryHtml: '<p>Test summary</p>',
    projects: [
      {
        id: 'proj-1',
        title: 'Test Project',
        start: '2020-01-01',
        end: '2021-12-31',
        duration: 'P2Y',
        icons: ['TypeScript'],
        tags: [
          {
            id: 'tag-2',
            name: 'TypeScript',
            duration: 'P2Y',
          },
        ],
        summaryMarkdown: 'Project summary',
        summaryHtml: '<p>Project summary</p>',
      },
    ],
  };

  it('should render experience with title and date range', () => {
    render(<Experience experiences={[mockExperience]} />);

    expect(screen.getByText('Test Experience')).toBeInTheDocument();
    expect(screen.getByText(/2020-01 to 2023-12/)).toBeInTheDocument();
  });

  it('should render experience summary', () => {
    render(<Experience experiences={[mockExperience]} />);

    expect(screen.getByText('Test summary')).toBeInTheDocument();
  });

  it('should render projects section', () => {
    render(<Experience experiences={[mockExperience]} />);

    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('should render multiple experiences', () => {
    const secondExperience: ExperienceType = {
      ...mockExperience,
      id: 'test-exp-2',
      title: 'Second Experience',
    };

    render(<Experience experiences={[mockExperience, secondExperience]} />);

    expect(screen.getByText('Test Experience')).toBeInTheDocument();
    expect(screen.getByText('Second Experience')).toBeInTheDocument();
  });

  it('should handle experience without projects', () => {
    const experienceWithoutProjects: ExperienceType = {
      ...mockExperience,
      projects: [],
    };

    render(<Experience experiences={[experienceWithoutProjects]} />);

    expect(screen.getByText('Test Experience')).toBeInTheDocument();
    expect(screen.queryByText('Projects')).not.toBeInTheDocument();
  });
});
