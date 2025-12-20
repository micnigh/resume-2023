import { describe, it, expect } from 'vitest';
import { markdownToHtml } from './markdown';

describe('markdownToHtml', () => {
  it('should convert markdown to HTML', () => {
    const markdown = '**bold** text';
    const html = markdownToHtml(markdown);
    expect(html).toContain('<strong>bold</strong>');
  });

  it('should convert links with target="_blank"', () => {
    const markdown = '[Link](https://example.com)';
    const html = markdownToHtml(markdown);
    // The renderer uses single quotes, not double quotes
    expect(html).toContain("target='_blank'");
    expect(html).toContain("rel='noopener noreferrer'");
    expect(html).toContain("href='https://example.com'");
  });

  it('should handle empty string', () => {
    const html = markdownToHtml('');
    expect(html).toBe('');
  });

  it('should handle plain text', () => {
    const markdown = 'Plain text';
    const html = markdownToHtml(markdown);
    expect(html).toContain('Plain text');
  });
});
