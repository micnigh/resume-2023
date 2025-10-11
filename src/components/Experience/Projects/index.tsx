import React from 'react';
import { Project as ProjectType } from '../../../lib/data/experiences/index.types';
import { IconsDisplay } from '../../shared/IconsDisplay';
import { DateRange } from '../../shared/DateRange';

interface ProjectsProps {
  projects: ProjectType[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="pl-3 space-y-4">
      <h4 className="mt-4">Projects</h4>
      {projects.map((p) => (
        <div key={p.id} className="pl-3 print:break-inside-avoid space-y-2">
          <div className="flex flex-wrap md:flex-nowrap flex-row print:flex-nowrap">
            <h5 className="flex-grow-0 whitespace-nowrap text-ellipsis overflow-x-hidden w-full md:w-auto print:w-auto mr-3 md:mr-4 mt-3 md:mt-0">
              {p.title}
            </h5>
            <IconsDisplay portfolio={p.portfolio} icons={p.icons} tags={p.tags} />
            <DateRange start={p.start} end={p.end} className="print:justify-end" />
          </div>
          {p.summaryHtml && (
            <div
              className="pl-3 space-y-2"
              dangerouslySetInnerHTML={{ __html: p.summaryHtml }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
