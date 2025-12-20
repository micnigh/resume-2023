import * as svgPaths from './icons';

/**
 * Valid icon names that have corresponding SVG assets
 */
export type IconName =
  | 'Docker'
  | 'Rails'
  | 'NodeJS'
  | 'Gulp'
  | 'Grunt'
  | 'Bower'
  | 'PHP'
  | 'Ruby'
  | 'Java'
  | 'Javascript'
  | 'Bootstrap'
  | 'Foundation'
  | 'Angular'
  | 'Backbone'
  | 'Wordpress'
  | 'MYSQL'
  | 'PostgresSQL'
  | 'MongoDB'
  | 'SASS'
  | 'Less'
  | 'Apple'
  | 'Android'
  | 'Linux'
  | 'Git'
  | 'React'
  | 'Webpack'
  | 'Python'
  | 'Jenkins'
  | 'AWS'
  | 'Jest'
  | 'Express'
  | 'Github'
  | 'LinkedIn'
  | 'Chain';

/**
 * Type-safe icon registry mapping icon names to their SVG paths
 */
export const iconRegistry: Record<IconName, string> = {
  Docker: svgPaths.Docker,
  Rails: svgPaths.Rails,
  NodeJS: svgPaths.NodeJS,
  Gulp: svgPaths.Gulp,
  Grunt: svgPaths.Grunt,
  Bower: svgPaths.Bower,
  PHP: svgPaths.PHP,
  Ruby: svgPaths.Ruby,
  Java: svgPaths.Java,
  Javascript: svgPaths.Javascript,
  Bootstrap: svgPaths.Bootstrap,
  Foundation: svgPaths.Foundation,
  Angular: svgPaths.Angular,
  Backbone: svgPaths.Backbone,
  Wordpress: svgPaths.Wordpress,
  MYSQL: svgPaths.MYSQL,
  PostgresSQL: svgPaths.PostgresSQL,
  MongoDB: svgPaths.MongoDB,
  SASS: svgPaths.SASS,
  Less: svgPaths.Less,
  Apple: svgPaths.Apple,
  Android: svgPaths.Android,
  Linux: svgPaths.Linux,
  Git: svgPaths.Git,
  React: svgPaths.React,
  Webpack: svgPaths.Webpack,
  Python: svgPaths.Python,
  Jenkins: svgPaths.Jenkins,
  AWS: svgPaths.AWS,
  Jest: svgPaths.Jest,
  Express: svgPaths.Express,
  Github: svgPaths.Github,
  LinkedIn: svgPaths.LinkedIn,
  Chain: svgPaths.Chain,
} as const;

/**
 * Get icon path by name with type safety
 * @param iconName - The name of the icon
 * @returns The SVG path if the icon exists, undefined otherwise
 */
export const getIconPath = (iconName: string): string | undefined => {
  return iconRegistry[iconName as IconName];
};

/**
 * Check if an icon name is valid
 * @param iconName - The name to check
 * @returns True if the icon exists in the registry
 */
export const isValidIconName = (iconName: string): iconName is IconName => {
  return iconName in iconRegistry;
};
