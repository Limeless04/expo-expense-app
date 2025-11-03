import { Colors } from "@/constants/theme";
import { useColorScheme } from '@/hooks/use-color-scheme';
import { getFormattedDate } from "@/utils/formatedDate";
import { useRouter } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
interface ExpenseItemProps {
  id: string;
  description: string;
  date: Date;
  amount: number;
}

export default function ExpenseItem({
  id,
  description,
  date,
  amount,
}: ExpenseItemProps) {
  const colorScheme = useColorScheme() ?? "light";
  const router = useRouter();
  const handleEditPress = (id: string) => {
    router.push({ pathname: "/manage", params: { mode: "edit", id } });
  };
  return (
    <Pressable
      android_ripple={{
        color: Colors[colorScheme].tint
      }}
      style={({ pressed }) => (pressed ? { opacity: 0.75 } : undefined)}
      onPress={() => handleEditPress(id)}
    >
      <View
        style={[
          styles.expenseItem,
          {
            backgroundColor:
              colorScheme === "light"
                ? Colors.light.secondaryBackground
                : Colors.dark.secondaryBackground,
          },
        ]}
      >
        <View>
          <Text
            style={[
              styles.desc,
              {
                color:
                  colorScheme === "dark" ? Colors.dark.text : Colors.light.text,
              },
            ]}
          >
            {description}
          </Text>
          <Text
            style={{
              color:
                colorScheme === "dark" ? Colors.dark.text : Colors.light.text,
            }}
          >
            {getFormattedDate(date)}
          </Text>
        </View>

        <View
          style={[
            styles.amountContainer,
            {
              backgroundColor:
                colorScheme === "dark" ? Colors.dark.card : Colors.light.card,
            },
          ]}
        >
          <Text
            style={[
              styles.amount,
              {
                color:
                  colorScheme === "dark" ? Colors.dark.text : Colors.light.text,
              },
            ]}
          >
            ${amount.toFixed(2)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginHorizontal: 8,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  desc: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
    minHeight: 40,
  },
  amount: {
    fontWeight: "bold",
  },
});
