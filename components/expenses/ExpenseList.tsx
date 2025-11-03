import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import type { Expense } from "@/store/expense-context";
import { FlatList, StyleSheet, View } from "react-native";
import { ThemedText } from "../themed-text";
import ExpenseItem from "./ExpenseItem";

interface ExpenseListProps {
  expenses: Expense[];
}

const renderItem = (item: Expense) => {
  return (
    <ExpenseItem
      description={item.description}
      date={item.date}
      amount={item.amount}
      id={item.id}
    />
  );
};

export default function ExpenseList({ expenses }: ExpenseListProps) {
   const colorScheme = useColorScheme() ?? "light";
  if (!expenses || expenses.length === 0) {
    return (
      <View
        style={[
          styles.fallbackContainer,
          {
            backgroundColor:
              colorScheme === "light"
                ? Colors.light.secondaryBackground
                : Colors.dark.secondaryBackground,
          },
        ]}
      >
        <ThemedText
          style={[
            styles.fallbackText,
            {
              color:
                colorScheme === "dark"
                  ? Colors.dark.text
                  : Colors.light.text,
            },
          ]}
        >
          No expenses found.
        </ThemedText>
        <ThemedText
          style={[
            styles.fallbackSubText,
            {
              color:
                colorScheme === "dark"
                  ? Colors.dark.text
                  : Colors.light.text,
            },
          ]}
        >
          Start adding your first one!
        </ThemedText>
      </View>
    );
  }
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
  },
   fallbackContainer: {
    marginHorizontal: 8,
    marginVertical: 12,
    padding: 20,
    borderRadius: 6,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  fallbackText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  fallbackSubText: {
    fontSize: 14,
    marginTop: 4,
    opacity: 0.7,
  },
});
