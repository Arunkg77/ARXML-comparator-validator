// src/theme/themes/light.js
import { COLORS } from '../tokens/colors';

export const lightTheme = {
  colors: {
    background: COLORS.neutral[50],      // Off-white
    surface: '#FFFFFF',                  // Pure white for cards, modals
    primary: COLORS.primary[600],        // Main interactive color
    secondary: COLORS.neutral[700],      // A secondary color

    // Text colors
    textPrimary: COLORS.neutral[900],    // For headings and primary text
    textSecondary: COLORS.neutral[500],  // For subtext, paragraphs
    textDisabled: COLORS.neutral[400],

    // Other semantic colors
    border: COLORS.neutral[200],
    accent: COLORS.primary[500],
    danger: COLORS.danger[500],
    success: COLORS.success[500],
  }
};