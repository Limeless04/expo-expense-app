// src/store/toast-context.tsx
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React, { createContext, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Toast, { ToastConfig } from "react-native-toast-message";

interface ToastContextType {
  showToast: (type: "success" | "error" | "info", message: string) => void;
}

const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
});

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme() ?? "light";

  const showToast = (type: "success" | "error" | "info", message: string) => {
    Toast.show({
      type,
      text1: message,
      position: "bottom",
      visibilityTime: 2000,
    });
  };

  /** Custom toast component for each type */
  const toastConfig: ToastConfig = {
    success: ({ text1 }) => (
      <View
        style={[
          styles.toastContainer,
          {
            backgroundColor:
              colorScheme === "dark"
                ? Colors.dark.secondaryBackground
                : Colors.light.secondaryBackground,
            borderLeftColor: Colors[colorScheme].success ?? "#22c55e", // fallback green
          },
        ]}
      >
        <Text
          style={[
            styles.toastText,
            { color: Colors[colorScheme].text },
          ]}
        >
          ✅ {text1}
        </Text>
      </View>
    ),

    error: ({ text1 }) => (
      <View
        style={[
          styles.toastContainer,
          {
            backgroundColor:
              colorScheme === "dark"
                ? Colors.dark.secondaryBackground
                : Colors.light.secondaryBackground,
            borderLeftColor: Colors[colorScheme].error ?? "#ef4444", // fallback red
          },
        ]}
      >
        <Text
          style={[
            styles.toastText,
            { color: Colors[colorScheme].text },
          ]}
        >
          ❌ {text1}
        </Text>
      </View>
    ),

    info: ({ text1 }) => (
      <View
        style={[
          styles.toastContainer,
          {
            backgroundColor:
              colorScheme === "dark"
                ? Colors.dark.secondaryBackground
                : Colors.light.secondaryBackground,
            borderLeftColor: Colors[colorScheme].tint ?? "#3b82f6", // fallback blue
          },
        ]}
      >
        <Text
          style={[
            styles.toastText,
            { color: Colors[colorScheme].text },
          ]}
        >
          ℹ️ {text1}
        </Text>
      </View>
    ),
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast config={toastConfig} />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);

const styles = StyleSheet.create({
  toastContainer: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    borderLeftWidth: 5,
    marginHorizontal: 16,
    marginBottom: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 4,
  },
  toastText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
