import { ThemedHeader } from "@/components/themed-header";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Button, StyleSheet, Text, View } from "react-native";

type Props = {
  onRetry?: () => void;
  onGoHome?: () => void;
};

export default function NotFoundScreen({ onRetry, onGoHome }: Props) {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <ThemedView style={styles.container}>
      <ThemedHeader title="404 - Not Found" height={120} center />

      <View style={styles.content}>
        <Text style={[styles.message, { color: Colors[colorScheme].text }]}>
          Oops! The page you’re looking for doesn’t exist.
        </Text>

        {onRetry && <Button title="Try Again" onPress={onRetry} />}
        {onGoHome && <Button title="Go Home" onPress={onGoHome} />}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    padding: 20,
    alignItems: "center",
    gap: 16,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});
