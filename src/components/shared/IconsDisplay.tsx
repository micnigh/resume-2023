import React from 'react';
import {
  iconRegistry,
  getIconPath,
} from '../../lib/data/experiences/tags/iconRegistry';
import { type Tag } from '../../lib/data/experiences/index.types';
import { ExternalLink } from './ExternalLink';
import { Tooltip } from './Tooltip';

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
        <Tooltip content={portfolio.hoverTitle || 'Link'}>
          <ExternalLink
            href={portfolio.link}
            className="flex flex-wrap content-center"
            ariaLabel={portfolio.hoverTitle}
          >
            <img
              className="max-h-8"
              src={iconRegistry.Chain}
              alt={portfolio.hoverTitle || 'Link'}
              width={24}
              height={24}
            />
          </ExternalLink>
        </Tooltip>
      )}
      {icons.map((iconName, index) => {
        const tag = tags.find((t) => t.name === iconName);
        if (!tag) {
          return null;
        }
        const iconPath = getIconPath(tag.name);
        if (!iconPath) {
          return null;
        }
        return (
          <Tooltip key={index} content={tag.name}>
            <img
              className="max-h-8"
              src={iconPath}
              alt={tag.name}
              width={24}
              height={24}
            />
          </Tooltip>
        );
      })}
    </div>
  );
};
