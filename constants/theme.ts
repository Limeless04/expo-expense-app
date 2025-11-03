/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

export const Colors = {
  light: {
    default: '#1F2937',              // Dark Gray for default UI elements
    text: '#111111',                 // Almost Black text
    background: '#FFFFFF',           // Pure White background
    secondaryBackground: '#F5F5F5',  // Subtle Light Gray
    primaryBackground: '#E5E7EB',    // Neutral Gray (button bg default)
    tertiaryBackground: '#D1D5DB',   // Mid Gray (button hover/active)
    card: '#FFFFFF',                 // White cards
    tint: '#000000',                 // Black CTA accent
    icon: '#4B5563',                 // Medium Gray icons
    tabIconDefault: '#9CA3AF',       // Muted Gray inactive
    tabIconSelected: '#111111',      // Almost Black active
    border: '#E5E7EB',               // Light Neutral border

    // Status Colors
    success: '#16A34A',
    warning: '#CA8A04',
    error: '#DC2626',
    info: '#6B7280',
  },

  dark: {
    default: '#E5E7EB',              // Light Gray default
    text: '#F9FAFB',                 // Almost White text
    background: '#000000',           // Pure Black background
    secondaryBackground: '#111827',  // Very Dark Gray
    primaryBackground: '#1F2937',    // Dark Slate Gray (button bg default)
    tertiaryBackground: '#374151',   // Darker Gray (button hover/active)
    card: '#1F2937',                 // Dark Gray card
    tint: '#FFFFFF',                 // White CTA accent
    icon: '#D1D5DB',                 // Light Gray icons
    tabIconDefault: '#6B7280',       // Muted Gray inactive
    tabIconSelected: '#F9FAFB',      // Almost White active
    border: '#374151',               // Dark Neutral border

    // Status Colors
    success: '#22C55E',
    warning: '#FACC15',
    error: '#F87171',
    info: '#9CA3AF',
  },
};






export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
