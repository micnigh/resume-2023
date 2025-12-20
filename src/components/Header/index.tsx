import React from 'react';
import { iconRegistry } from '../../lib/data/experiences/tags/iconRegistry';
import { ExternalLink } from '../shared/ExternalLink';
import { Tooltip } from '../shared/Tooltip';

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col relative space-y-4">
      <div className="flex-grow">
        <h1 className="leading-none w-max mx-auto">Michael Nigh</h1>
        <div className="text-lg leading-relaxed w-max mx-auto">
          <a href="mailto:contact@mnigh.com">contact@mnigh.com</a>
        </div>
      </div>
      <div className="flex justify-center space-x-4 md:space-x-3 md:absolute md:right-0 md:bottom-0 print:absolute print:right-0 print:bottom-0 print:space-x-3">
        <Tooltip content="Check out my github">
          <ExternalLink
            href="https://github.com/micnigh/"
            ariaLabel="Check out my github"
          >
            <img
              className="social-icon inline-block w-8 h-auto md:w-6 print:w-7"
              src={iconRegistry.Github}
              width={24}
              height={24}
              alt="Check out my github"
            />
          </ExternalLink>
        </Tooltip>
        <Tooltip content="Visit my LinkedIn">
          <ExternalLink
            href="https://www.linkedin.com/in/michaelnigh"
            ariaLabel="Visit my LinkedIn"
          >
            <img
              className="social-icon inline-block w-8 h-auto md:w-6 print:w-7"
              src={iconRegistry.LinkedIn}
              width={24}
              height={24}
              alt="Visit my LinkedIn"
            />
          </ExternalLink>
        </Tooltip>
      </div>
    </div>
  );
};
