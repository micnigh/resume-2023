import React, { memo } from 'react';
import { type Project as ProjectType } from '../../lib/data/experiences/index.types';
import { IconsDisplay } from './IconsDisplay';
import { DateRange } from './DateRange';

interface ExperienceItemProps {
  /** The project/experience to display */
  item: ProjectType;
  /** Heading level (h4 for experiences, h5 for projects) */
  headingLevel: 'h4' | 'h5';
  /** Additional CSS classes for the date range */
  dateRangeClassName?: string;
  /** Additional CSS classes for the container */
  containerClassName?: string;
  /** Whether to show the summary HTML */
  showSummary?: boolean;
}

/**
 * Shared component for displaying experience or project items
 * Reduces duplication between Experience and Projects components
 */
export const ExperienceItem: React.FC<ExperienceItemProps> = memo(
  function ExperienceItem({
    item,
    headingLevel,
    dateRangeClassName = '',
    containerClassName = '',
    showSummary = true,
  }: ExperienceItemProps) {
    const HeadingTag = headingLevel;

    return (
      <div
        className={`print:break-inside-avoid space-y-2 ${containerClassName}`}
      >
        <div className="flex flex-wrap md:flex-nowrap flex-row print:flex-nowrap">
          <HeadingTag className="flex-grow-0 whitespace-nowrap text-ellipsis overflow-x-hidden w-full md:w-auto print:w-auto mr-3 md:mr-4 mt-3 md:mt-0">
            {item.title}
          </HeadingTag>
          <IconsDisplay
            portfolio={item.portfolio}
            icons={item.icons}
            tags={item.tags}
          />
          <DateRange
            start={item.start}
            end={item.end}
            className={dateRangeClassName}
          />
        </div>
        {showSummary && item.summaryHtml && (
          <div
            className="pl-3 space-y-2"
            dangerouslySetInnerHTML={{ __html: item.summaryHtml }}
          />
        )}
      </div>
    );
  }
);
