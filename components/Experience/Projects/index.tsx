import moment from 'moment';
import Image from 'next/image';
import * as svgPaths from '../../../lib/data/experiences/tags/icons';
import { Project as ProjectType } from '../../../lib/data/experiences/index.types';

export const Projects = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <>
      {projects.length > 0 && (
        <div className="pl-3 space-y-4">
          <h4 className="mt-4">Projects</h4>
          {projects.map((p) => (
            <div
              key={p.id}
              className="pl-3 print:break-inside-avoid space-y-2"
            >
              <div className="flex flex-wrap md:flex-nowrap flex-row print:flex-nowrap">
                <h5 className="flex-grow-0 whitespace-nowrap text-ellipsis overflow-x-hidden w-full md:w-auto print:w-auto mr-3 md:mr-4 mt-3 md:mt-0">
                  {p.title}
                </h5>
                {(p.portfolio || p.icons.length > 0) && (
                  <div className="flex flex-row items-center space-x-2 mr-3 md:mr-4 mt-3 md:mt-0">
                    {p.portfolio && (
                      <a
                        className="flex flex-wrap content-center"
                        href={p.portfolio.link}
                        target="_blank"
                      >
                        <Image
                          className="max-h-8"
                          src={svgPaths.Chain}
                          alt={p.portfolio.hoverTitle}
                          width={24}
                          height={24}
                          title={p.portfolio.hoverTitle}
                        />
                      </a>
                    )}
                    {p.icons.map((i, iIndex) => {
                      const t = p.tags.find((t) => t.name === i);
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
                <div className="flex flex-wrap justify-end content-end flex-grow whitespace-nowrap print:justify-end">
                  {p.start &&
                    `${moment.utc(p.start).format('YYYY-MM')} to ${
                      p.start && !p.end
                        ? 'present'
                        : moment.utc(p.end).format('YYYY-MM')
                    }`}
                </div>
              </div>
              <div
                className="pl-3 space-y-2"
                dangerouslySetInnerHTML={{ __html: p.summaryHtml }}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
