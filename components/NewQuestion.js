import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native';
import { DECKS_DATA } from '../constants/dummyData';
import { white } from '../constants/colors';

class NewQuestion extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior='padding'>
                <Text>Question</Text>
                <TextInput
                    multiline
                    style={styles.textInput}
                    onChangeText={() => console.log('hi')}
                />
                <Text>Answer</Text>
                <TextInput
                    multiline
                    style={styles.textInput}
                    onChangeText={() => console.log('hi')}
                />
                <TouchableOpacity>
                    <Text>Add Card</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        backgroundColor: white,
    }
})

export default NewQuestion;
