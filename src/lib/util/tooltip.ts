import tippy, { Instance } from 'tippy.js';

const selector = '*[title]';

export const generateTooltips = (element: HTMLElement | Document = document): Instance[] => {
  const elements = Array.from(element.querySelectorAll<HTMLElement>(selector));
  const filteredElements = elements.filter((e) => {
    const title = e.getAttribute('title');
    return title !== null && title.length > 0;
  });
  
  return tippy(filteredElements, {
    placement: 'top',
    animation: 'fade',
    duration: 100,
    arrow: true,
    content: (e) => {
      const element = e as HTMLElement;
      return element.getAttribute('title') || '';
    },
  });
};
