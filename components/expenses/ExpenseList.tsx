import { FlatList } from "react-native";
import { ThemedText } from "../themed-text";
import type { Expense } from "./ExpenseOutput";

interface ExpenseListProps {
  expenses: Expense[];
}

const renderItem = (item: Expense) => {
  return <ThemedText>{item.description}</ThemedText>;
};

export default function ExpenseList({ expenses }: ExpenseListProps) {
  return (
    <FlatList
    nestedScrollEnabled
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderItem(item)}
    />
  );
}
