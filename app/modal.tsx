import ActionModal from "@/components/action-modal";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import React, { useState } from "react";
import { Button, StyleSheet } from "react-native";

export default function ModalScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">This is a modal</ThemedText>
      <Button title="Show Confirm Modal" onPress={() => setVisible(true)} />

      <ActionModal
        visible={visible}
        title="Delete Expense"
        message="Are you sure you want to delete this item?"
        onConfirm={() => {
          setVisible(false);
          console.log("Confirmed ✅");
        }}
        onCancel={() => setVisible(false)}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
