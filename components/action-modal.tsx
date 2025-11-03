import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface ActionModalProps {
  visible: boolean;
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ActionModal({
  visible,
  title = "Confirm Action",
  message = "Are you sure you want to continue?",
  onConfirm,
  onCancel,
}: ActionModalProps) {
  const colorScheme = useColorScheme() ?? "light";

  const isDark = colorScheme === "dark";
  const theme = Colors[colorScheme];

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: isDark
                ? theme.secondaryBackground
                : theme.background,
            },
          ]}
        >
          <Text
            style={[
              styles.title,
              { color: isDark ? theme.text : theme.text },
            ]}
          >
            {title}
          </Text>

          <Text
            style={[
              styles.message,
              { color: isDark ? theme.text : theme.text },
            ]}
          >
            {message}
          </Text>

          <View style={styles.actions}>
            <Pressable
              onPress={onCancel}
              style={[styles.button, styles.cancel]}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>

            <Pressable
              onPress={onConfirm}
              style={[styles.button, styles.confirm]}
            >
              <Text style={styles.confirmText}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  container: {
    width: "100%",
    borderRadius: 16,
    padding: 24,
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 28,
    lineHeight: 22,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  button: {
    minWidth: 130,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  cancel: {
    backgroundColor: "#ccc",
  },
  confirm: {
    backgroundColor: "#007bff",
  },
  cancelText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
  },
  confirmText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
