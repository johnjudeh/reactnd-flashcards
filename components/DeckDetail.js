import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { STACK_ROUTE_NAME_NEW_QUESTION, STACK_ROUTE_NAME_QUIZ } from '../constants/navigation';
import Button from './Button';
import { grey, transparentBlue, white } from '../constants/colors';

class DeckDetail extends Component {
    render() {
        const { deck, navigation } = this.props;
        const { navigate } = navigation;
        const { title, questions } = deck;

        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.deckTitle}>{title}</Text>
                    <Text style={styles.numOfCards}>{questions.length} cards</Text>
                    <Button onPress={() => navigate(STACK_ROUTE_NAME_QUIZ, { deckId: deck.id })}>
                        Start Quiz
                    </Button>
                    <Button onPress={() => navigate(STACK_ROUTE_NAME_NEW_QUESTION, { deckId: deck.id })}>
                        Add Card
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        padding: 20,
        backgroundColor: white,
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 8,
        borderStyle: 'solid',
        borderColor: transparentBlue,
        borderWidth: 1,
        shadowRadius: 1,
        shadowOpacity: 0.4,
        shadowColor: transparentBlue,
        shadowOffset: {
            width: 0,
            height: 3,
        }
    },
    deckTitle: {
        fontSize: 18,
    },
    numOfCards: {
        fontSize: 14,
        color: grey,
        margin: 5,
        marginBottom: 20,
    },
})

function mapStateToProps(decks, { route }) {
    return {
        deck: decks[route.params.id],
    }
}

export default connect(mapStateToProps)(DeckDetail);
