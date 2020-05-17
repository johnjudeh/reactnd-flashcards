import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { DECKS_DATA } from '../constants/dummyData';
import { TouchableOpacity } from 'react-native-gesture-handler';

class DeckDetail extends Component {
    render() {
        const { route } = this.props;
        const { id } = route.params;
        const { title, questions } = DECKS_DATA[id];

        return (
            <View>
                <Text>{title}</Text>
                <Text>{questions.length} cards</Text>
                <TouchableOpacity>
                    <Text>Start Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Add Card</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default DeckDetail;
