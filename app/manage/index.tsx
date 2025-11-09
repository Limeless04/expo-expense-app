import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedHeader } from "@/components/themed-header";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import ExpenseForm from "@/components/expenses/ExpenseForm";
import { MODES, type Mode } from "@/constants/types/modes";

export default function ManageExpense() {
  const { mode } = useLocalSearchParams<{ mode: Mode; id?: string }>();

  const isAddMode = mode === MODES.ADD;
  const isEditMode = mode === MODES.EDIT;

  const title = isAddMode
    ? "Add Expense"
    : isEditMode
      ? "Edit Expense"
      : "Remove Expense";

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
            <ExpenseForm />
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
});
