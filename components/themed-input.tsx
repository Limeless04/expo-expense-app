import { View, Text,TextInput, StyleSheet, TextInputProps } from "react-native";
import {ThemedText} from "./themed-text"
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";



interface ThemedInputProps {
  label: string,
  textInputConfig?: TextInputProps
}


export default function ThemedInput({label, textInputConfig }: ThemedInputProps) {
  const colorScheme = useColorScheme() ?? "light";
  let inputStyle = [styles.textInput];
  
  if(textInputConfig && textInputConfig.multiline){
    inputStyle.push(styles.inputMultiline)
  }
  return (
    <View style={styles.container}>
      <ThemedText style={styles.label}>{label}</ThemedText>
      <TextInput style={[inputStyle,{
backgroundColor: Colors[colorScheme].tertiaryBackground, color: Colors[colorScheme].text}]} {...textInputConfig} placeholderTextColor={Colors[colorScheme].text}/>
    </View>
  )
}


const styles = StyleSheet.create({
 contianer: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 12,
    padding: 10
  },
  label:{
    fontSize: 18,
    marginVertical: 10
  },
  textInput:{
    borderRadius: 5,
    padding: 8,
    fontSize: 20,
    minHeight: 40,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top"
  }
})
