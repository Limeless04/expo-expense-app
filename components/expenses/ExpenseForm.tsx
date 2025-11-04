import {View, Text, StyleSheet} from "react-native"
import ThemedInput from "@/components/themed-input.tsx"
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import {useState} from "react"
import ThemedButton from "@/components/themed-button.tsx"
import {ThemedText} from "@/components/themed-text"
import {Colors} from "@/constants/theme"
import { useColorScheme } from "@/hooks/use-color-scheme";


export default function ExpenseForm(props : {}) {
  const [date, setDate] = useState(new Date())

 const colorScheme = useColorScheme() ?? "light";
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };


  const amountChangeHandler = () => {

  }

  const formatDate = (date: Date) => date.toISOString().split("T")[0];
  return (
    <View style={styles.wrapper}>
        <ThemedText style={styles.title}>Your Expense</ThemedText>
      <View style={styles.amountDate}>
        <View style={{flex: 1}}>
      <ThemedInput label="Amount" textInputConfig={{
      keyboardType:"decimal-pad",
        onChangeText: amountChangeHandler
      }}/>
        </View>

      <View style={[styles.container, {flex: 1}]}>
        <ThemedText style={styles.label}>Date</ThemedText>
        <ThemedButton
          onPress={showDatepicker}
          style={[
            styles.textInput,
            {
              backgroundColor: Colors[colorScheme].tertiaryBackground,
            },
          ]}
        >
          <ThemedText style={{ color: Colors[colorScheme].text }}>
            {formatDate(date)}
          </ThemedText>
        </ThemedButton>
      </View>

      </View>
      <ThemedInput label="Description" textInputConfig={{
        multiline:true,
        autoCorrect: false,
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    marginVertical: 20
  },
  title: {
  fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  amountDate:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    marginHorizontal: 4,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  textInput: {
    borderRadius: 5,
    padding: 8,
    fontSize: 20,
    minHeight: 39,
    justifyContent: "center", // centers text vertically
  },
});
