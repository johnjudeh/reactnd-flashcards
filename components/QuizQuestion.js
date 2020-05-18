import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../components/Button'

class QuizQuestion extends Component {
    static VIEW_QUESTION = 0
    static VIEW_ANSWER = 1
    static QUESTION_KEYS = ['question', 'answer']

    state = {
        view: 0
    }

    toggleView = () => {
        this.setState(state => ({
            view: state.view === QuizQuestion.VIEW_QUESTION
                ? QuizQuestion.VIEW_ANSWER
                : QuizQuestion.VIEW_QUESTION,
        }))
    }

    onQuestionAnswer = (correct) => {
        const { onAnswer } = this.props;
        onAnswer(correct);
        this.setState({
            view: QuizQuestion.VIEW_QUESTION,
        });
    }

    render() {
        const { question } = this.props;
        const { view } = this.state;

        return (
            <View>
                <Text>{question[QuizQuestion.QUESTION_KEYS[view]]}</Text>
                <TouchableOpacity onPress={this.toggleView}>
                    <Text>
                        {view === QuizQuestion.VIEW_QUESTION
                            ? 'Show Answer'
                            : 'Show Question'
                        }
                    </Text>
                </TouchableOpacity>
                <Button onPress={() => this.onQuestionAnswer(true)}>
                    Correct
                </Button>
                <Button onPress={() => this.onQuestionAnswer(false)}>
                    Incorrect
                </Button>
            </View>
        );
    }
}

export default QuizQuestion;
