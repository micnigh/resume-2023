import React from 'react';
import { formatDateRange } from '../../lib/util/dates';

interface DateRangeProps {
  start: string;
  end: string;
  className?: string;
}

export const DateRange: React.FC<DateRangeProps> = ({
  start,
  end,
  className = '',
}) => {
  if (!start) return null;

  return (
    <div
      className={`flex flex-wrap justify-end content-end flex-grow whitespace-nowrap ${className}`}
    >
      {formatDateRange(start, end)}
    </div>
  );
};
