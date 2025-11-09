import { View, StyleSheet } from "react-native";
import ThemedInput from "@/components/themed-input";
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useContext, useState } from "react";
import ThemedButton from "@/components/themed-button";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useToast } from "@/store/toast-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import ActionModal from "@/components/action-modal";
import { MODES, type Mode } from "@/constants/types/modes";
import { ExpenseContext } from "@/store/expense-context";
import { formatCurrencyInput } from "@/utils/formatCurrency";
import { getSeparators } from "@/utils/getSeparator";
type InputValuesType = {
  date: Date;
  amount: number;
  description: string;
};
export default function ExpenseForm() {
  const [confirmVisible, setConfirmVisible] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState<InputValuesType>({
    date: new Date(),
    amount: 0,
    description: "",
  });

  const expenseCtx = useContext(ExpenseContext);
  const { mode, id } = useLocalSearchParams<{ mode: Mode; id?: string }>();
  const router = useRouter();
  const { showToast } = useToast();

  const colorScheme = useColorScheme() ?? "light";
  const separator = getSeparators();
  const parseValue = (
    key: keyof InputValuesType,
    value: string | Date | number,
  ): Date | number | string => {
    switch (key) {
      case "amount":
        if (typeof value === "string") {
          // 1. Remove the thousands separator (and all non-numeric/non-decimal characters)
          // This regex removes currency symbols, spaces, and the specific thousands separator
          let cleanedString = value.replace(
            new RegExp(`[^0-9\\${separator.decimalSeparator}]`, "g"),
            "",
          );

          // 2. Replace the decimal separator with a standard dot for Number()
          cleanedString = cleanedString.replace(
            separator.decimalSeparator,
            ".",
          );

          // 3. Convert to number (return 0 if the string is empty)
          return Number(cleanedString) || 0;
        }
        return Number(value);
      case "date":
        return new Date(value);
      default:
        return value;
    }
  };

  console.log(inputValues);

  const isAddMode = mode === MODES.ADD;
  const isEditMode = mode === MODES.EDIT;

  const handleDeleteExpenseItem = (id: string) => {
    expenseCtx.deleteExpense(id);
    showToast("success", "Expense deleted successfully!");
    router.back();
  };

  const inputValuesChangeHandler = <K extends keyof InputValuesType>(
    inputIdentifier: K,
    enteredText: string | Date | number,
  ) => {
    setInputValues((prev) => {
      return {
        ...prev,
        [inputIdentifier]: parseValue(inputIdentifier, enteredText),
      };
    });
  };
  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate ?? new Date();
    inputValuesChangeHandler("date", currentDate);
  };

  const showMode = (currentMode: "date" | "time") => {
    DateTimePickerAndroid.open({
      value: inputValues.date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  const onDeleteButton = () => {
    setConfirmVisible(true);
  };

  const handleSaveExpenseItem = () => {
    if (isAddMode) {
      // Placeholder example, replace with form state later
      expenseCtx.addExpense({
        description: inputValues.description,
        amount: inputValues.amount,
        date: inputValues.date,
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
    <View style={styles.wrapper}>
      <ThemedText style={styles.title}>Your Expense</ThemedText>
      <View style={styles.amountDate}>
        <View style={{ flex: 1 }}>
          <ThemedInput
            label="Amount"
            textInputConfig={{
              keyboardType: "decimal-pad",
              value: formatCurrencyInput(inputValues.amount),
              onChangeText: (text: string) => {
                inputValuesChangeHandler("amount", text);
              },
            }}
          />
        </View>

        <View style={[styles.container, { flex: 1 }]}>
          <ThemedText style={styles.label}>Date</ThemedText>
          <ThemedButton
            onPress={showDatepicker}
            style={[
              styles.textInput,
              {
                backgroundColor: Colors[colorScheme].tertiaryBackground,
              },
            ]}
          >
            <ThemedText style={{ color: Colors[colorScheme].text }}>
              {formatDate(inputValues.date)}
            </ThemedText>
          </ThemedButton>
        </View>
      </View>
      <ThemedInput
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          onChangeText: (enteredText) =>
            inputValuesChangeHandler("description", enteredText),
          value: inputValues.description,
        }}
      />
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
      <ActionModal
        visible={confirmVisible}
        title="Delete Expense"
        message="Are you sure you want to delete this expense?"
        onConfirm={() => id && handleDeleteExpenseItem(id)}
        onCancel={() => setConfirmVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    marginVertical: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  amountDate: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    marginHorizontal: 4,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  textInput: {
    borderRadius: 5,
    padding: 8,
    fontSize: 20,
    minHeight: 39,
    justifyContent: "center", // centers text vertically
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
