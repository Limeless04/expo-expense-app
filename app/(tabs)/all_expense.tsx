import { StyleSheet } from 'react-native';

import ExpenseOutput from '@/components/expenses/ExpenseOutput';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedHeader } from '@/components/themed-header';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';

export default function AllExpense() {
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: Colors.light.default, dark: Colors.dark.default }}
      headerComponent={<ThemedHeader title="All Expense" headerBackgroundColor={{ light: Colors.light.default, dark: Colors.dark.default }} />}>
      <ThemedView style={styles.titleContainer}>
        <ExpenseOutput expensePeriod="all"/>
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
