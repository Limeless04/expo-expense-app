import type { PropsWithChildren, ReactElement } from "react";
import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/themed-view";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { SafeAreaView } from "react-native-safe-area-context";

const HEADER_HEIGHT = 100;

type Props = PropsWithChildren<{
  headerComponent?: ReactElement;
  headerBackgroundColor?: { dark: string; light: string };
}>;

export default function ThemedScreenLayout({
  children,
  headerComponent,
  headerBackgroundColor,
}: Props) {
  const backgroundColor = useThemeColor({}, "background");
  const colorScheme = useColorScheme() ?? "light";

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      {/* Header */}
      <SafeAreaView
        style={[
          styles.header,
          headerBackgroundColor && {
            backgroundColor: headerBackgroundColor[colorScheme],
          },
        ]}
      >
        {headerComponent}
      </SafeAreaView>

      {/* Content */}
      <ThemedView style={styles.content}>{children}</ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
