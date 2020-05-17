import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DECKS_DATA } from '../constants/dummyData';
import { STACK_ROUTE_NAME_NEW_QUESTION, STACK_ROUTE_NAME_QUIZ } from '../constants/navigation';
import Button from './Button';

class DeckDetail extends Component {
    render() {
        const { route, navigation } = this.props;
        const { navigate } = navigation;
        const { id } = route.params;
        const { title, questions } = DECKS_DATA[id];

        return (
            <View>
                <Text>{title}</Text>
                <Text>{questions.length} cards</Text>
                <Button onPress={() => navigate(STACK_ROUTE_NAME_QUIZ)}>
                    Start Quiz
                </Button>
                <Button onPress={() => navigate(STACK_ROUTE_NAME_NEW_QUESTION)}>
                    Add Card
                </Button>
            </View>
        );
    }
}

export default DeckDetail;
