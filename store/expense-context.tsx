import { ReactNode, createContext, useReducer } from "react";

// -------------------------------------------------------
// 1️⃣ Expense type
// -------------------------------------------------------
export interface Expense {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

// -------------------------------------------------------
// 2️⃣ Context types
// -------------------------------------------------------
export interface ExpenseContextTypes {
  expenses: Expense[];
  addExpense: (expense: Omit<Expense, "id">) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (
    id: string,
    updatedExpense: Partial<Omit<Expense, "id">>
  ) => void;
}

// -------------------------------------------------------
// 3️⃣ Context creation
// -------------------------------------------------------
export const ExpenseContext = createContext<ExpenseContextTypes>({
  expenses: [],
  addExpense: () => {},
  deleteExpense: () => {},
  updateExpense: () => {},
});

// -------------------------------------------------------
// 4️⃣ Props type
// -------------------------------------------------------
interface ExpenseContextProviderProps {
  children: ReactNode;
}

// -------------------------------------------------------
// 5️⃣ Reducer and action types
// -------------------------------------------------------
type ExpenseAction =
  | { type: "ADD"; payload: Omit<Expense, "id"> }
  | { type: "UPDATE"; payload: { id: string; data: Partial<Omit<Expense, "id">> } }
  | { type: "DELETE"; payload: { id: string } };

const DUMMY_EXPENSES: Expense[] = [
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

// -------------------------------------------------------
// 6️⃣ Reducer logic
// -------------------------------------------------------
function expenseReducer(state: Expense[], action: ExpenseAction): Expense[] {
  switch (action.type) {
    case "ADD":
      const id = new Date().toISOString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];

    case "UPDATE":
      return state.map((expense) =>
        expense.id === action.payload.id
          ? { ...expense, ...action.payload.data }
          : expense
      );

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload.id);

    default:
      return state;
  }
}

// -------------------------------------------------------
// 7️⃣ Provider component
// -------------------------------------------------------
function ExpenseContextProvider({ children }: ExpenseContextProviderProps) {
  const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  const addExpense: ExpenseContextTypes["addExpense"] = (expense) => {
    dispatch({ type: "ADD", payload: expense });
  };

  const deleteExpense: ExpenseContextTypes["deleteExpense"] = (id) => {
    dispatch({ type: "DELETE", payload: { id } });
  };

  const updateExpense: ExpenseContextTypes["updateExpense"] = (
    id,
    updatedExpense
  ) => {
    dispatch({ type: "UPDATE", payload: { id, data: updatedExpense } });
  };

  const value: ExpenseContextTypes = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
