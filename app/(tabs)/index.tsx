import { StyleSheet } from "react-native";

import ExpenseOutput from "@/components/expenses/ExpenseOutput";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedHeader } from "@/components/themed-header";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { ExpenseContext } from "@/store/expense-context";
import { getDateMinusDay } from "@/utils/formatedDate";
import { useContext } from "react";

export default function RecentExpense() {
  const expenseCtx = useContext(ExpenseContext)

  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date()
    const sevenDaysAgo = getDateMinusDay(today, 7)

    return (expense.date >= sevenDaysAgo) && (expense.date <= today)
  })
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: Colors.light.secondaryBackground, dark: Colors.dark.secondaryBackground }}
      headerComponent={<ThemedHeader title="Recent Expense" headerBackgroundColor={{ light: Colors.light.secondaryBackground, dark: Colors.dark.secondaryBackground }} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ExpenseOutput expenses={recentExpenses} expensePeriod="recent"/>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
