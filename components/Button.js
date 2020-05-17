import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { black, white } from '../constants/colors';

function Button({ children, onPress, style, textStyle }) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
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
    buttonText: {
        color: white,
    }
})

export default Button;
