import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SkillsGraph } from './SkillsGraph/index';
import { type Tag } from '../../lib/data/experiences/index.types';

describe('SkillsGraph Integration', () => {
  const mockTags: Tag[] = [
    {
      id: 'tag-1',
      name: 'React',
      duration: 'P3Y',
    },
    {
      id: 'tag-2',
      name: 'TypeScript',
      duration: 'P2Y',
    },
    {
      id: 'tag-3',
      name: 'Docker',
      duration: 'P1Y',
    },
    {
      id: 'tag-4',
      name: 'NodeJS',
      duration: 'P4Y',
    },
  ];

  it('should render skills graph with display tags', () => {
    render(<SkillsGraph tags={mockTags} />);

    // Should render tags that are in SKILLS_TO_DISPLAY
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('NodeJS')).toBeInTheDocument();
  });

  it('should not render tags not in SKILLS_TO_DISPLAY', () => {
    render(<SkillsGraph tags={mockTags} />);

    // TypeScript is not in SKILLS_TO_DISPLAY by default
    expect(screen.queryByText('TypeScript')).not.toBeInTheDocument();
  });

  it('should handle empty tags array', () => {
    const { container } = render(<SkillsGraph tags={[]} />);

    // Should render without errors - check that the component renders
    expect(container.querySelector('.space-y-px')).toBeInTheDocument();
  });

  it('should calculate and display relative widths', () => {
    const { container } = render(<SkillsGraph tags={mockTags} />);

    // Check that elements have width styles
    const skillBars = container.querySelectorAll('[style*="width"]');
    expect(skillBars.length).toBeGreaterThan(0);
  });
});
