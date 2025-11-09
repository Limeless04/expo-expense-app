import { Colors } from "@/constants/theme";
import type { Expense } from "@/store/expense-context";
import { StyleSheet, useColorScheme, View } from "react-native";
import { ThemedText } from "../themed-text";
import { formatCurrencyInput } from "@/utils/formatCurrency";

interface ExpenseSummaryProps {
  expenses: Expense[];
  periodName: "recent" | "all";
}

export default function ExpenseSummary({
  expenses,
  periodName,
}: ExpenseSummaryProps) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  const colorScheme = useColorScheme() ?? "light";
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            colorScheme === "light"
              ? Colors.light.secondaryBackground
              : Colors.dark.secondaryBackground,
        },
      ]}
    >
      <ThemedText style={styles.period}>{periodName.toUpperCase()}</ThemedText>
      <ThemedText style={styles.sum}>
        {formatCurrencyInput(expensesSum)}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

