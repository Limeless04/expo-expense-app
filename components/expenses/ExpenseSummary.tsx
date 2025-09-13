import { Colors } from "@/constants/theme";
import { StyleSheet, useColorScheme, View } from "react-native";
import { ThemedText } from "../themed-text";
import type { Expense } from "./ExpenseOutput";

interface ExpenseSummaryProps {
    expenses: Expense[];
    periodName: 'recent' | 'all';
}

export default function ExpenseSummary({expenses, periodName}: ExpenseSummaryProps){
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);
    const colorScheme = useColorScheme() ?? "light";
    return (
        <View style={[styles.container, {backgroundColor: colorScheme === 'light' ? Colors.light.secondaryBackground : Colors.dark.secondaryBackground}]}  >
            <ThemedText style={styles.period}>{periodName.toUpperCase()}</ThemedText>
            <ThemedText style={styles.sum}>${expensesSum.toFixed(2)}</ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 14,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    period: {
        fontSize: 12,
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold', 
    }
});