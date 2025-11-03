import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
export default function TabLayout() {
    const colorScheme = useColorScheme() ?? "light";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
          tabBarStyle: {
          backgroundColor: Colors[colorScheme].secondaryBackground, // 👈 match header background
          borderTopWidth: 0, // optional: cleaner look
          elevation: 0, // optional: remove Android shadow
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Recent Expense',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="hourglass" color={color} />,
        }}
      />
      <Tabs.Screen
        name="all_expense"
        options={{
          title: 'All Expense',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="calendar" color={color} />,
        }}
      />
    </Tabs>
  );
}
