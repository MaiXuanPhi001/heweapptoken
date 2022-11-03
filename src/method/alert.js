import { Alert } from "react-native"

export const alertGoBack = (
    yesOnPress,
    title = 'Go back',
    message = 'Are you sure go back!',
    textYes = 'Yes',
    textCancel = 'Cancel',
    cancelOnPress = () => null
) => {
    Alert.alert(title, message, [
        {
            text: textCancel,
            onPress: cancelOnPress,
        },
        { text: textYes, onPress: yesOnPress }
    ])
}

export const alertConfirm = (
    title,
    message,
    textYes = 'Yes',
    yesOnPress,
    textCancel = 'Cancel',
    cancelOnPress = () => null
) => {
    Alert.alert(title, message, [
        {
            text: textCancel,
            onPress: cancelOnPress,
        },
        { text: textYes, onPress: yesOnPress }
    ])
}