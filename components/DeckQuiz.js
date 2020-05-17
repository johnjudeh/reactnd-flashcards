import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DECKS_DATA } from '../constants/dummyData';
import Button from '../components/Button'

// TODO: Change this to use real data
const question = DECKS_DATA['JavaScript'].questions[0]

// TODO: Break out into DeckQuiz and QuizQuesion components
class DeckQuiz extends Component {
    static VIEW_QUESTION = 0
    static VIEW_ANSWER = 1
    static QUESTION_KEYS = ['question', 'answer']

    state = {
        view: 0
    }

    toggleView = () => {
        this.setState(state => ({
            view: state.view === DeckQuiz.VIEW_QUESTION
                ? DeckQuiz.VIEW_ANSWER
                : DeckQuiz.VIEW_QUESTION,
        }))
    }

    render() {
        const { view } = this.state;

        return (
            <View>
                <Text>{question[DeckQuiz.QUESTION_KEYS[view]]}</Text>
                <TouchableOpacity onPress={this.toggleView}>
                    <Text>
                        {view === DeckQuiz.VIEW_QUESTION
                            ? 'Show Answer'
                            : 'Show Question'
                        }
                    </Text>
                </TouchableOpacity>
                <Button>
                    Correct
                </Button>
                <Button>
                    Incorrect
                </Button>
            </View>
        );
    }
}

export default DeckQuiz;
