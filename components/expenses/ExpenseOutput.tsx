import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import type { Expense } from "@/store/expense-context";
import { StyleSheet, View } from "react-native";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";

export type ExpenseOutputProps = {
    expenses: Expense[];
    expensePeriod: 'recent' | 'all';
};



// { expenses, }: ExpenseOutputProps
export default function ExpenseOutput({expenses, expensePeriod}: ExpenseOutputProps) {

    const colorScheme = useColorScheme() ?? "light";
    return (
        <View style={[styles.container, {backgroundColor: Colors[colorScheme].background}]}>
            <ExpenseSummary expenses={expenses} periodName={expensePeriod}  />
            <ExpenseList expenses={expenses}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
})