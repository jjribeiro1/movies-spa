import { colors } from './colors';

const theme = {
  colors,
} as const;

export type Theme = typeof theme;


