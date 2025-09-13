import { StyleSheet, View } from "react-native";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";

export type Expense = {
    id: string;
    amount: number;
    description: string;
    date: Date;
};

export type ExpenseOutputProps = {
    expenses?: Expense[];
    expensePeriod: 'recent' | 'all';
};


const DUMMY_EXPENSE: Expense[] = [
    {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-12-19'),
  },
  {
    id: 'e2',
    description: 'Grocery shopping',
    amount: 120.45,
    date: new Date('2024-01-05'),
  },
  {
    id: 'e3',
    description: 'Monthly subscription',
    amount: 14.99,
    date: new Date('2024-02-10'),
  },
  {
    id: 'e4',
    description: 'Dinner at restaurant',
    amount: 48.75,
    date: new Date('2024-03-02'),
  },
  {
    id: 'e5',
    description: 'New headphones',
    amount: 89.0,
    date: new Date('2024-03-15'),
  },
  {
    id: 'e6',
    description: 'Electricity bill',
    amount: 65.3,
    date: new Date('2024-04-01'),
  },
  {
    id: 'e7',
    description: 'Coffee with friends',
    amount: 9.5,
    date: new Date('2024-04-12'),
  },
  {
    id: 'e8',
    description: 'Gym membership',
    amount: 35.0,
    date: new Date('2024-05-01'),
  },
  {
    id: 'e9',
    description: 'New backpack',
    amount: 72.25,
    date: new Date('2024-06-20'),
  },
  {
    id: 'e10',
    description: 'Movie tickets',
    amount: 22.0,
    date: new Date('2024-07-08'),
  },
]

// { expenses, }: ExpenseOutputProps
export default function ExpenseOutput({expensePeriod}: ExpenseOutputProps) {
    return (
        <View style={styles.container}>
            <ExpenseSummary expenses={DUMMY_EXPENSE} periodName={expensePeriod}  />
            <ExpenseList expenses={DUMMY_EXPENSE}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
})