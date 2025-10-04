import { Pressable, StyleSheet, View } from "react-native";

export default function ThemedButton({onPress, children, style}: {onPress: () => void, children: React.ReactNode, style?: any}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed ? {opacity: 0.75} : undefined}>
            <View style={[styles.buttonContainer, style]}>
                {children}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
});
