import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DECKS_DATA } from '../constants/dummyData';
import { STACK_ROUTE_NAME_NEW_QUESTION, STACK_ROUTE_NAME_QUIZ } from '../constants/navigation';

class DeckDetail extends Component {
    render() {
        const { route, navigation } = this.props;
        const { id } = route.params;
        const { title, questions } = DECKS_DATA[id];

        return (
            <View>
                <Text>{title}</Text>
                <Text>{questions.length} cards</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(STACK_ROUTE_NAME_QUIZ);
                    }}
                >
                    <Text>Start Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(STACK_ROUTE_NAME_NEW_QUESTION);
                    }}
                >
                    <Text>Add Card</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default DeckDetail;
