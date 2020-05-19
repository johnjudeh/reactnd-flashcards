import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import { white, grey, orange, lightBlue } from '../constants/colors';

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
        const { question, questionNum, totalQuestions } = this.props;
        const { view } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Question {questionNum}/{totalQuestions}
                </Text>
                <Text style={styles.question}>
                    {question[QuizQuestion.QUESTION_KEYS[view]]}
                </Text>
                <TouchableOpacity onPress={this.toggleView}>
                    <Text style={styles.textButton}>
                        {view === QuizQuestion.VIEW_QUESTION
                            ? 'Show Answer'
                            : 'Show Question'
                        }
                    </Text>
                </TouchableOpacity>
                <Button onPress={() => this.onQuestionAnswer(true)}>
                    Correct
                </Button>
                <Button style={styles.btnIncorrect} onPress={() => this.onQuestionAnswer(false)}>
                    Incorrect
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: white,
    },
    header: {
        fontSize: 18,
        color: grey,
    },
    question: {
        fontSize: 32,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    textButton: {
        fontSize: 18,
        marginBottom: 50,
        color: lightBlue,
    },
    btnIncorrect: {
        backgroundColor: orange,
    },
});

export default QuizQuestion;
