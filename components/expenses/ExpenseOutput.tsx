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

const DUMMY_EXPENSE = [
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
  {
    id: 'e11',
    description: 'Fuel for car',
    amount: 55.5,
    date: new Date('2024-07-15'),
  },
  {
    id: 'e12',
    description: 'Concert tickets',
    amount: 150.0,
    date: new Date('2024-08-01'),
  },
  {
    id: 'e13',
    description: 'Skincare products',
    amount: 45.2,
    date: new Date('2024-08-18'),
  },
  {
    id: 'e14',
    description: 'Doctor visit',
    amount: 90.0,
    date: new Date('2024-09-05'),
  },
  {
    id: 'e15',
    description: 'Birthday gift',
    amount: 30.0,
    date: new Date('2024-09-22'),
  },
  {
    id: 'e16',
    description: 'Internet bill',
    amount: 40.0,
    date: new Date('2024-10-01'),
  },
  {
    id: 'e17',
    description: 'New book',
    amount: 18.75,
    date: new Date('2024-10-10'),
  },
  {
    id: 'e18',
    description: 'Lunch with colleague',
    amount: 25.5,
    date: new Date('2024-10-25'),
  },
  {
    id: 'e19',
    description: 'Home decor',
    amount: 75.6,
    date: new Date('2024-11-05'),
  },
  {
    id: 'e20',
    description: 'Train ticket',
    amount: 32.5,
    date: new Date('2024-11-19'),
  },
];

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