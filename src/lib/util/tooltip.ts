import { default as tippy } from 'tippy.js'

const selector = `*[title]`;

export const generateTooltips = (element: HTMLElement | Document | null = document) => {
  element = element ? element : document;
  let elements = Array.from(element.querySelectorAll(selector));
  elements = elements.filter(e => e.attributes['title'].value.length > 0);
  return tippy(elements, {
    placement: 'top',
    animation: 'fade',
    duration: 100,
    arrow: true,
    content: (e: HTMLElement) => e.attributes['title'].value,
  }) as any[];
};
