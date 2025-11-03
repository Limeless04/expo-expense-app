import { FlatList, StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";
import type { Expense } from "./ExpenseOutput";

interface ExpenseListProps {
  expenses: Expense[];
}

const renderItem = (item: Expense) => {
  return <ExpenseItem description={item.description} date={item.date} amount={item.amount} id={item.id} />;
};

export default function ExpenseList({ expenses }: ExpenseListProps) {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderItem(item)}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
 listContainer: {
        paddingBottom: 40, // Add padding to the bottom of the list
    }
})