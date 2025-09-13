import { StyleSheet, Text } from "react-native";

import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

type Props = {
  title: string;
  height?: number;
  center?: boolean;
  headerBackgroundColor?: { dark: string; light: string };
};

export function ThemedHeader({ title, height = 100, center = true, headerBackgroundColor }: Props) {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <ThemedView style={[styles.container, headerBackgroundColor && {  backgroundColor: headerBackgroundColor[colorScheme], height }]}>
      <Text
        style={[
          styles.title,
          { color: Colors[colorScheme].text },
          center && { textAlign: "center" },
        ]}
      >
        {title}
      </Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%", // make sure it spans full width
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "transparent", // ensure text itself is transparent
  },
});
