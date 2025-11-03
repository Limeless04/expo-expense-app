import ActionModal from "@/components/action-modal";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import ThemedButton from "@/components/themed-button";
import { ThemedHeader } from "@/components/themed-header";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { ExpenseContext } from "@/store/expense-context";
import { useToast } from "@/store/toast-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext, useState } from "react";
import { StyleSheet } from "react-native";

type Mode = "add" | "edit" | "remove";

export const MODES = {
  ADD: "add" as Mode,
  EDIT: "edit" as Mode,
  REMOVE: "remove" as Mode,
};

export default function ManageExpense() {
   const [confirmVisible, setConfirmVisible] = useState(false);
  const { mode, id } = useLocalSearchParams<{ mode: Mode; id?: string }>();
  const expenseCtx = useContext(ExpenseContext);
  const router = useRouter();
  const colorScheme = useColorScheme() ?? "light";
  const {showToast}= useToast()

  const isAddMode = mode === MODES.ADD;
  const isEditMode = mode === MODES.EDIT;

  const title = isAddMode
    ? "Add Expense"
    : isEditMode
    ? "Edit Expense"
    : "Remove Expense";

  const handleDeleteExpenseItem = (id: string) => {
    expenseCtx.deleteExpense(id);
    showToast("success", "Expense deleted successfully!");
    router.back();
  }
  const onDeleteButton = () => {
    setConfirmVisible(true);
    // expenseCtx.deleteExpense(id);
    // router.back();
  };

  const handleSaveExpenseItem = () => {
    if (isAddMode) {
      // Placeholder example, replace with form state later
      expenseCtx.addExpense({
        description: "New Shoe",
        amount: 19.99, 
        date: new Date(),
      });
       showToast("success", "Expense Added successfully!");
    } else if (isEditMode && id) {
      expenseCtx.updateExpense(id, {
        description: "Updated expense",
      });
       showToast("success", "Expense updated successfully!");
    }
    router.back();
  };

  const handleCancel = () => {
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
        {(isAddMode || isEditMode) && (
          <>
            <ThemedView style={styles.btnContainer}>
              <ThemedButton
                onPress={handleSaveExpenseItem}
                style={[
                  styles.updateButton,
                  { backgroundColor: Colors[colorScheme].primaryBackground },
                ]}
              >
                <ThemedText
                  type="default"
                  style={{
                    color: Colors[colorScheme].text,
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  {isAddMode ? "Add Expense" : "Update Expense"}
                </ThemedText>
              </ThemedButton>

              <ThemedButton
                onPress={handleCancel}
                style={[
                  styles.cancelButton,
                  { backgroundColor: Colors[colorScheme].secondaryBackground },
                ]}
              >
                <ThemedText
                  type="default"
                  style={{
                    color: Colors[colorScheme].text,
                    fontSize: 16,
                  }}
                >
                  Cancel
                </ThemedText>
              </ThemedButton>
            </ThemedView>

            {isEditMode && (
              <ThemedView
                style={[
                  styles.deleteContainer,
                  { borderTopColor: Colors[colorScheme].border },
                ]}
              >
                <ThemedButton onPress={onDeleteButton}>
                  <IconSymbol
                    name="trash"
                    size={40}
                    color={Colors[colorScheme].error}
                  />
                </ThemedButton>
              </ThemedView>
            )}
          </>
        )}
         <ActionModal
        visible={confirmVisible}
        title="Delete Expense"
        message="Are you sure you want to delete this expense?"
        onConfirm={() => id && handleDeleteExpenseItem(id)}
        onCancel={() => setConfirmVisible(false)}
      />
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
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  updateButton: {
    minWidth: 200,
    marginVertical: 8,
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
  },
  cancelButton: {
    minWidth: 200,
    marginVertical: 8,
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
  },
});
