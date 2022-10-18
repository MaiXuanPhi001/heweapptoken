import { theme } from '../../../theme';
import { getSize } from '../../../utils/responsive';
import { isNumber } from 'lodash';
import React from 'react';
import { Image, Platform, StatusBar, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { handleMargin, handlePadding, handleRound, handleSquare } from '../shared';
import styles from '../Block/styles';
import Block from '../Block';

const MyInput = ({
    value,
    setValue,
    hint,
    security,
    iconOne,
    iconTwo,
    onPress,
    keyboardType = 'default',
    flex,
    flexShrink,
    flexGrow,
    row,
    column,
    shadow,
    backgroundColor,
    space,
    padding,
    margin,
    alignStart,
    alignCenter,
    alignEnd,
    wrap,
    justifyCenter,
    justifyEnd,
    justifyStart,
    justifySpaceAround,
    justifySpaceBetween,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    paddingVertical,
    paddingHorizontal,
    marginVertical,
    marginHorizontal,
    radius,
    height,
    width,
    square,
    round,
    borderWidth,
    relative,
    absolute,
    top,
    left,
    right,
    bottom,
    borderColor,
    children,
    overflow,
    alignSelf,
    style,
    shadowColor,
    opacity,
    elevation,
    maxWidth,
    maxHeight,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    isPaddingIos,
    isPaddingAdnroid,
    zIndex,
    borderTopLeftRadius,
    borderTopRightRadius,
    ...rest
}) => {
    const insets = useSafeAreaInsets();

    const blockStyles = [
        isPaddingAdnroid && { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
        isPaddingIos && {
            paddingBottom: Platform.OS === 'ios' ? insets.bottom : getSize.m(20),
        },
        flex && styles.block,
        flexShrink && styles.flexShrink,
        flexGrow && styles.flexGrow,
        !flex && { flex: 0 },
        maxWidth && { maxWidth },
        maxHeight && { maxHeight },
        width && { width: width },
        height && { height: height },
        row && styles.row,
        column && styles.column,
        shadow && {
            ...styles.shadow,
            shadowColor: shadowColor ? theme.colors[shadowColor] : theme.colors.black,
            elevation: elevation || 3,
        },
        wrap && { flexWrap: 'wrap' },
        backgroundColor && {
            backgroundColor: theme.colors[backgroundColor] || backgroundColor,
        },
        padding && { ...handlePadding(getSize.m(padding)) },
        margin && { ...handleMargin(getSize.m(margin)) },
        alignStart && styles.alignStart,
        alignCenter && styles.alignCenter,
        alignEnd && styles.alignEnd,
        justifyCenter && styles.justifyCenter,
        justifyStart && styles.justifyStart,
        justifyEnd && styles.justifyEnd,
        justifySpaceAround && styles.justifySpaceAround,
        justifySpaceBetween && styles.justifySpaceBetween,
        space && { justifyContent: `space-${space}` },
        paddingTop && { paddingTop: getSize.m(paddingTop) },
        paddingRight && { paddingRight: getSize.m(paddingRight) },
        paddingBottom && { paddingBottom: getSize.m(paddingBottom) },
        paddingLeft && { paddingLeft: getSize.m(paddingLeft) },
        marginBottom && { marginBottom: getSize.m(marginBottom) },
        marginTop && { marginTop: getSize.m(marginTop) },
        marginRight && { marginRight: getSize.m(marginRight) },
        marginLeft && { marginLeft: getSize.m(marginLeft) },
        paddingHorizontal && { paddingHorizontal: getSize.m(paddingHorizontal) },
        paddingVertical && { paddingVertical: getSize.m(paddingVertical) },
        marginHorizontal && { marginHorizontal: getSize.m(marginHorizontal) },
        marginVertical && { marginVertical: getSize.m(marginVertical) },
        radius && { borderRadius: getSize.s(radius) },
        borderWidth && { borderWidth: borderWidth },
        square && { ...handleSquare(getSize.s(square)) },
        round && { ...handleRound(getSize.s(round)) },
        isNumber(opacity) && { opacity: opacity },
        borderColor && {
            borderColor: theme.colors[borderColor] || theme.colors.border || borderColor,
        },
        relative && { position: 'relative' },
        absolute && { position: 'absolute' },
        isNumber(top) && { top: getSize.v(top) },
        isNumber(left) && { left: getSize.s(left) },
        isNumber(right) && { right: getSize.s(right) },
        isNumber(bottom) && { bottom: getSize.v(bottom) },
        overflow && { overflow },
        alignSelf && { alignSelf },
        borderTopWidth && { borderTopWidth },
        borderRightWidth && { borderRightWidth },
        borderBottomWidth && { borderBottomWidth },
        borderLeftWidth && { borderLeftWidth },
        zIndex && { zIndex },
        borderTopLeftRadius && { borderTopLeftRadius },
        borderTopRightRadius && { borderTopRightRadius },
        { ...StyleSheet.flatten(style) },
    ];

    return (
        <Block width={width} height={height} marginBottom={marginBottom}>
            {iconOne && <Image style={stylesSheet.iconOne} source={iconOne} />}
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={hint}
                style={blockStyles} {...rest}
                secureTextEntry={security ? true : false}
                keyboardType={keyboardType}
            />
            {iconTwo &&
                <TouchableOpacity
                    style={stylesSheet.iconTwo}
                    onPress={onPress}
                >
                    <Image source={iconTwo} />
                </TouchableOpacity>
            }
        </Block>
    );
};

export default MyInput;

const stylesSheet = StyleSheet.create({
    iconOne: {
        position: 'absolute',
        top: 8,
        left: 8
    },
    iconTwo: {
        position: 'absolute',
        top: 8,
        right: 8
    }
})


