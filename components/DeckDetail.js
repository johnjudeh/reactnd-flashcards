import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { STACK_ROUTE_NAME_NEW_QUESTION, STACK_ROUTE_NAME_QUIZ } from '../constants/navigation';
import Button from './Button';
import { connect } from 'react-redux';

class DeckDetail extends Component {
    render() {
        const { deck, navigation } = this.props;
        const { navigate } = navigation;
        const { title, questions } = deck;

        return (
            <View>
                <Text>{title}</Text>
                <Text>{questions.length} cards</Text>
                <Button onPress={() => navigate(STACK_ROUTE_NAME_QUIZ, { deckId: deck.id })}>
                    Start Quiz
                </Button>
                <Button onPress={() => navigate(STACK_ROUTE_NAME_NEW_QUESTION, { deckId: deck.id })}>
                    Add Card
                </Button>
            </View>
        );
    }
}

function mapStateToProps(decks, { route }) {
    return {
        deck: decks[route.params.id],
    }
}

export default connect(mapStateToProps)(DeckDetail);
