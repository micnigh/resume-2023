import React from 'react';
import * as svgPaths from '../../lib/data/experiences/tags/icons';
import { type Tag } from '../../lib/data/experiences/index.types';
import { ExternalLink } from './ExternalLink';

interface Portfolio {
  link: string;
  hoverTitle?: string;
}

interface IconsDisplayProps {
  portfolio?: Portfolio;
  icons: string[];
  tags: Tag[];
}

export const IconsDisplay: React.FC<IconsDisplayProps> = ({
  portfolio,
  icons,
  tags,
}) => {
  if (!portfolio && icons.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-row items-center space-x-2 mr-3 md:mr-4 mt-3 md:mt-0">
      {portfolio && (
        <ExternalLink
          href={portfolio.link}
          className="flex flex-wrap content-center"
          title={portfolio.hoverTitle}
          ariaLabel={portfolio.hoverTitle}
        >
          <img
            className="max-h-8"
            src={svgPaths.Chain}
            alt={portfolio.hoverTitle || 'Link'}
            width={24}
            height={24}
            title={portfolio.hoverTitle}
          />
        </ExternalLink>
      )}
      {icons.map((iconName, index) => {
        const tag = tags.find((t) => t.name === iconName);
        if (!tag || !svgPaths[tag.name as keyof typeof svgPaths]) {
          return null;
        }
        return (
          <img
            key={index}
            className="max-h-8"
            src={svgPaths[tag.name as keyof typeof svgPaths]}
            alt={tag.name}
            width={24}
            height={24}
            title={tag.name}
          />
        );
      })}
    </div>
  );
};
