import { MODES } from "@/app/manage";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import ThemedButton from "./themed-button";
import { IconSymbol } from "./ui/icon-symbol";

type Props = {
  title: string;
  height?: number;
  headerBackgroundColor?: { dark: string; light: string };
};

export function ThemedHeader({
  title,
  height = 100,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? "light";
  const router = useRouter();
  // const pathname = usePathname();
  const { mode } = useLocalSearchParams<{
    mode: "add" | "edit" | "remove";
  }>();

  const handleAddPress = () => {
    router.push({ pathname: "/manage", params: { mode: "add" } });
  };

  const handleBackButton = () => {
    router.back();
  };

  // const isManageScreen = pathname === "/manage";

  return (
    <ThemedView
      style={[
        styles.container,
        headerBackgroundColor && {
          backgroundColor: headerBackgroundColor[colorScheme],
          height,
        },
      ]}
    >
      {/* Left side: Back button only on /manage */}
      <View style={styles.side}>
        {mode === MODES.ADD && (
          <ThemedButton onPress={handleBackButton}>
            <IconSymbol
              name="arrow-left"
              size={24}
              color={Colors[colorScheme].text}
            />
          </ThemedButton>
        )}

        {mode === MODES.EDIT && (
          // Empty placeholder with same width so title stays centered
          <View style={{ width: 24, height: 24 }} />
        )}
      </View>

      {/* Title in center */}
      <Text style={[styles.title, { color: Colors[colorScheme].text }]}>
        {title}
      </Text>

      {/* Right side: Add button only if NOT on /manage */}
      <View style={styles.side}>
        {mode == null && (
          <ThemedButton onPress={handleAddPress}>
            <IconSymbol
              name="plus"
              size={24}
              color={Colors[colorScheme].text}
            />
          </ThemedButton>
        )}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  side: {
    width: 40, // ensures symmetry
    alignItems: "flex-start", // left aligns back button
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
