import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { white } from '../constants/colors';

function NewDeck(props) {
    return (
        <View>
            <Text>New Deck</Text>
            <Text>Deck Title</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={() => console.log('hi')}
            />
            <TouchableOpacity>
                <Text>Create Deck</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        backgroundColor: white,
    }
})

export default NewDeck;
