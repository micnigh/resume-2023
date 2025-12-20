import { marked } from 'marked';

/**
 * Custom renderer for marked that adds target="_blank" to links
 */
const renderer = new marked.Renderer();

renderer.link = ({ href, title, text }) => {
  return `<a target='_blank' rel='noopener noreferrer' class='font-bold' href='${href}' title='${title || ''}' >${text}</a>`;
};

/**
 * Convert markdown to HTML using the configured renderer
 * @param markdown - The markdown string to convert
 * @returns The HTML string
 */
export const markdownToHtml = (markdown: string): string => {
  const result = marked(markdown, { renderer });
  // marked returns a string in sync mode
  if (typeof result === 'string') {
    return result;
  }
  // If it's a Promise (async mode), we shouldn't reach here, but handle it gracefully
  throw new Error(
    'marked returned a Promise in sync mode - this should not happen'
  );
};
