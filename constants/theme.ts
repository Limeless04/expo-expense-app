/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#007AFF'; // bright iOS-style blue
const tintColorDark = '#0AEFFF';  // neon cyan for dark mode


export const Colors = {
  light: {
    default: '#E0F2FE',          // light sky blue surface
    text: '#0F172A',             // deep navy text
    background: '#efeeeeff',     // light neutral background
    secondaryBackground: '#b2b5b9ff', // muted gray background
    card: '#FFFFFF',             // pure white card for contrast
    tint: tintColorLight,        // strong vibrant blue
    icon: '#475569',             // slate gray icons
    tabIconDefault: '#94A3B8',   // muted gray when inactive
    tabIconSelected: tintColorLight, // bright blue active
  },
  dark: {
    default: '#0F172A',          // deep navy surface
    text: '#F8FAFC',             // almost white text
    background: '#020617',       // pure dark background
    secondaryBackground: '#1E293B', // dark slate for sections
    card: '#0F172A',             // slightly lighter than background for cards
    tint: tintColorDark,         // neon cyan accent
    icon: '#CBD5E1',             // light gray icons
    tabIconDefault: '#64748B',   // muted slate gray inactive
    tabIconSelected: tintColorDark, // neon cyan active
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
