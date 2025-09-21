// src/theme/tokens/colors.js

// Using a 50-950 scale allows for a wide range of shades.
// Tools like https://uicolors.app/ can help you generate these palettes.

export const COLORS = {
  // --- Primary: A cool, professional blue ---
  primary: {
    50:  '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // Main accent blue
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a', // Your original primary
    950: '#172554',
  },
  // --- Neutrals: A slate gray that works well with blue ---
  neutral: {
    50:  '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155', // Darker surface color
    800: '#1e293b',
    900: '#0f172a', // Your original secondary
    950: '#020617', // Near black
  },
  // --- Semantic Colors ---
  danger: {
    500: '#ef4444',
    // add more shades if needed
  },
  success: {
    500: '#10b981',
  },
  warning: {
    500: '#f59e0b',
  },
};