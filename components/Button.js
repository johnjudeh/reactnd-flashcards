import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { black, white, transparentBlack } from '../constants/colors';

function Button({ children, style, textStyle, ...props }) {
    return (
        <TouchableOpacity style={
                props.disabled === true
                    ? [styles.button, styles.disabled, style]
                    : [styles.button, style]
            }
            {...props}
        >
            <Text style={[styles.buttonText, textStyle]}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: 200,
        margin: 10,
        borderRadius: 7,
        backgroundColor: black,
        justifyContent: 'center',
        alignItems: 'center',
    },
    disabled: {
        backgroundColor: transparentBlack,
    },
    buttonText: {
        color: white,
    }
})

export default Button;