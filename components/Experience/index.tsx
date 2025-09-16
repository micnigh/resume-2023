import moment from 'moment';
import Image from 'next/image';
import * as svgPaths from '../../lib/data/experiences/tags/icons';
import { Experience as ExperienceType } from '../../lib/data/experiences/index.types';
import { Projects } from './Projects';

export const Experience = ({ experiences }: { experiences: ExperienceType[] }) => {
  return (
    <div className="space-y-2">
      <h2>Experience</h2>
      <div className="space-y-5">
        {experiences.map((e) => (
          <div
            className="print:break-inside-avoid space-y-3"
            key={e.id}
          >
            <div className="flex flex-row items-center flex-wrap md:flex-nowrap print:flex-nowrap">
              <h4 className="flex-grow-0 whitespace-nowrap text-ellipsis overflow-x-hidden w-full md:w-auto print:w-auto mr-3 md:mr-4 mt-3 md:mt-0">
                {e.title}
              </h4>
              {(e.portfolio || e.icons.length > 0) && (
                <div className="flex flex-row items-center space-x-2 mr-3 md:mr-4 mt-3 md:mt-0">
                  {e.portfolio && (
                    <a
                      className="flex flex-wrap content-center"
                      href={e.portfolio.link}
                      target="_blank"
                    >
                      <Image
                        className="max-h-8"
                        src={svgPaths.Chain}
                        alt={e.portfolio.hoverTitle}
                        width={24}
                        height={24}
                        title={e.portfolio.hoverTitle}
                      />
                    </a>
                  )}
                  {e.icons.map((i, iIndex) => {
                    const t = e.tags.find((t) => t.name === i);
                    return (
                      svgPaths[t.name] && (
                        <Image
                          key={iIndex}
                          className="max-h-8"
                          src={svgPaths[t.name]}
                          alt={t.name}
                          width={24}
                          height={24}
                          title={t.name}
                        />
                      )
                    );
                  })}
                </div>
              )}
              <div className="flex flex-wrap flex-grow justify-end whitespace-nowrap content-end">
                {e.start &&
                  `${moment.utc(e.start).format('YYYY-MM')} to ${
                    e.start && !e.end
                      ? 'present'
                      : moment.utc(e.end).format('YYYY-MM')
                  }`}
              </div>
            </div>
            <div
              className="pl-3 space-y-2"
              dangerouslySetInnerHTML={{ __html: e.summaryHtml }}
            />
            <Projects projects={e.projects} />
          </div>
        ))}
      </div>
    </div>
  );
};
