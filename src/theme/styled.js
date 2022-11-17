import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
    // dùng được android và ios
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }
})