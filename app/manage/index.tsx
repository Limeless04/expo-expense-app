import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedHeader } from "@/components/themed-header";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export default function ManageExpense(){
    return (
        <ParallaxScrollView
             headerBackgroundColor={{ light: Colors.light.default, dark: Colors.dark.default }}
             headerComponent={<ThemedHeader title="Manage Expense" headerBackgroundColor={{ light: Colors.light.default, dark: Colors.dark.default }} />}
           >
             <ThemedView >
               <ThemedText type="default">Manage Expense!</ThemedText>
             </ThemedView>
           </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({});