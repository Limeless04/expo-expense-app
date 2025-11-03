import { StyleSheet } from 'react-native';

import ExpenseOutput from '@/components/expenses/ExpenseOutput';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedHeader } from '@/components/themed-header';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { ExpenseContext } from '@/store/expense-context';
import { useContext } from 'react';
export default function AllExpense() {
  const expensesCtx = useContext(ExpenseContext)
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: Colors.light.secondaryBackground, dark: Colors.dark.secondaryBackground }}
      headerComponent={<ThemedHeader title="All Expense" headerBackgroundColor={{ light: Colors.light.secondaryBackground, dark: Colors.dark.secondaryBackground }} />}>
      <ThemedView style={styles.titleContainer}>
        <ExpenseOutput expenses={expensesCtx.expenses} expensePeriod="all"/>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
