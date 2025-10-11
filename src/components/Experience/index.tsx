import React from 'react';
import { type Experience as ExperienceType } from '../../lib/data/experiences/index.types';
import { Projects } from './Projects';
import { IconsDisplay } from '../shared/IconsDisplay';
import { DateRange } from '../shared/DateRange';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div className="space-y-2">
      <h2>Experience</h2>
      <div className="space-y-5">
        {experiences.map((e) => (
          <div className="print:break-inside-avoid space-y-3" key={e.id}>
            <div className="flex flex-row items-center flex-wrap md:flex-nowrap print:flex-nowrap">
              <h4 className="flex-grow-0 whitespace-nowrap text-ellipsis overflow-x-hidden w-full md:w-auto print:w-auto mr-3 md:mr-4 mt-3 md:mt-0">
                {e.title}
              </h4>
              <IconsDisplay
                portfolio={e.portfolio}
                icons={e.icons}
                tags={e.tags}
              />
              <DateRange start={e.start} end={e.end} />
            </div>
            {e.summaryHtml && (
              <div
                className="pl-3 space-y-2"
                dangerouslySetInnerHTML={{ __html: e.summaryHtml }}
              />
            )}
            <Projects projects={e.projects} />
          </div>
        ))}
      </div>
    </div>
  );
};
