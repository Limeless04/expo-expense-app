import ParallaxScrollView from "@/components/parallax-scroll-view";
import ThemedButton from "@/components/themed-button";
import { ThemedHeader } from "@/components/themed-header";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet } from "react-native";


type Mode = "add" | "edit" | "remove";

export const MODES = {
  ADD: "add" as Mode,
  EDIT: "edit" as Mode,
  REMOVE: "remove" as Mode,
};

export default function ManageExpense() {
  const { mode, id } = useLocalSearchParams<{
    mode: Mode;
    id?: string;
  }>();

  const router = useRouter()

  const colorScheme = useColorScheme() ?? "light";

  const title =
    mode === "add"
      ? "Add Expense"
      : mode === "edit"
      ? "Edit Expense"
      : "Remove Expense";

  const handleDeleteExpenseItem = (id: string) => {
    console.log("Delete item", id);
  };

  const handleUpdateExpenseItem = (id: string) => {
    console.log("Update item", id);
  };

  const handleCancelUpdate = () => {
    console.log("Cancel update");
    router.back();
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        light: Colors.light.secondaryBackground,
        dark: Colors.dark.secondaryBackground,
      }}
      headerComponent={
        <ThemedHeader
          title={title}
          headerBackgroundColor={{
            light: Colors.light.secondaryBackground,
            dark: Colors.dark.secondaryBackground,
          }}
        />
      }
    >
      <ThemedView style={styles.container}>
        {mode === MODES.ADD && <ThemedText type="default">Add Mode</ThemedText>}
        {mode === MODES.EDIT && (
          <>
            <ThemedView style={styles.btnContainer}>
              <ThemedButton onPress={() => id && handleUpdateExpenseItem(id)} style={[styles.updateButton, { backgroundColor: Colors[colorScheme].primaryBackground }]}>
                <ThemedText
                  type="default"
                  style={{ color: Colors[colorScheme].text, fontSize: 16 }}
                >
                  Update
                </ThemedText>
              </ThemedButton>

              <ThemedButton onPress={() => handleCancelUpdate()} style={[styles.cancelButton, { backgroundColor: Colors[colorScheme].secondaryBackground }]}>
                <ThemedText
                  type="default"
                  style={{ color: Colors[colorScheme].text, fontSize: 16 }}
                >
                  Cancel
                </ThemedText>
              </ThemedButton>
            </ThemedView>
            <ThemedView
              style={[
                styles.deleteContainer,
                { borderTopColor: Colors[colorScheme].border },
              ]}
            >
              <ThemedButton onPress={() => id && handleDeleteExpenseItem(id)}>
                <IconSymbol
                  name="trash"
                  size={40}
                  color={Colors[colorScheme].error}
                />
              </ThemedButton>
            </ThemedView>
          </>
        )}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    alignItems: "center",
  },
  btnContainer : {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap:8,
  },
  updateButton: {
    minWidth: 200,
    marginVertical: 8,
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
  },
  cancelButton: {  
    minWidth: 200,
     marginVertical: 8,
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
  }
});
