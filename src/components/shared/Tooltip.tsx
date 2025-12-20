import React, { useEffect, useRef } from 'react';
import tippy, { type Instance } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

interface TooltipProps {
  /** The content to show in the tooltip */
  content: string;
  /** The child element that will trigger the tooltip */
  children: React.ReactElement;
  /** Tooltip placement */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /** Additional CSS classes */
  className?: string;
}

/**
 * React component wrapper for tippy.js tooltips
 * Provides declarative tooltip functionality
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placement = 'top',
  className,
}) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const instanceRef = useRef<Instance | null>(null);

  useEffect(() => {
    if (!elementRef.current || !content) return;

    // Create tippy instance
    instanceRef.current = tippy(elementRef.current, {
      content,
      placement,
      animation: 'fade',
      duration: 100,
      arrow: true,
    });

    // Cleanup on unmount
    return () => {
      if (instanceRef.current) {
        instanceRef.current.destroy();
        instanceRef.current = null;
      }
    };
  }, [content, placement]);

  // Wrap child in a span to attach tooltip
  return (
    <span
      ref={(node) => {
        elementRef.current = node;
      }}
      className={className}
      style={{ display: 'inline-block' }}
    >
      {children}
    </span>
  );
};
