import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';

const WIDTH = Dimensions.get('screen').width;

const CustomToast = ({ type, title, subtitle }) => {
    const COLOR = type === 'success' ? '#21A67A' : '#FFAB00';
    const ICON = type === 'success' ? "checkmark-circle" : "alert-circle";

    return (
        <View style={[styles.toastBox]}>
            <View style={[styles.uiLine, { backgroundColor: COLOR }]} />
            {/* <Icon
        name={ICON}
        size={24}
        color={COLOR}
        style={{marginHorizontal: 8}}
      /> */}

            <View style={{ marginLeft: 10 }}>
                <Text style={styles.toatTitle}>{title}</Text>
                <Text style={styles.toatMsg}>{subtitle}</Text>
            </View>
        </View>
    );
};

export default CustomToast;

const styles = StyleSheet.create({
    toastBox: {
        width: '95%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9FCFA',
        padding: 10,
        borderRadius: 6,
        elevation: 1,
        marginHorizontal: 10,
    },

    uiLine: {
        width: 4,
        height: '100%',
        borderRadius: 3,
    },

    toatTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000',
    },

    toatMsg: {
        fontSize: 13,
        fontWeight: '400',
        color: '#010101',
        marginTop: 3,
    },
});
