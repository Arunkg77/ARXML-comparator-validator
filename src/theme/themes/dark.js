// src/theme/themes/dark.js
import { COLORS } from '../tokens/colors';

export const darkTheme = {
  colors: {
    background: COLORS.neutral[950],     // Near-black
    surface: COLORS.neutral[900],        // Dark navy for cards, modals
    primary: COLORS.primary[500],        // A slightly brighter blue for dark mode
    secondary: COLORS.neutral[300],

    // Text colors
    textPrimary: COLORS.neutral[50],     // Light gray for headings
    textSecondary: COLORS.neutral[400],  // Muted gray for paragraphs
    textDisabled: COLORS.neutral[600],

    // Other semantic colors
    border: COLORS.neutral[700],
    accent: COLORS.primary[400],
    danger: COLORS.danger[500],
    success: COLORS.success[500],
  }
};