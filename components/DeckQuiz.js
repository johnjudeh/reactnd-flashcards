import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import QuizQuestion from './QuizQuestion';
import Button from './Button';
import { clearTodaysRevisionNotification } from '../utils/helpers';
import { white, grey } from '../constants/colors';

class DeckQuiz extends Component {
    state = {
        questionIndex: 0,
        numCorrect: 0,
        numIncorrect: 0,
    }

    onQuestionAnswer = (correct) => {
        const { questions } = this.props;

        this.setState((state) => {
            const { questionIndex } = state;

            if (questionIndex === (questions.length - 1)) {
                // Achieved your revision goals for today as you
                // completed a Quiz
                clearTodaysRevisionNotification();
            }

            return {
                questionIndex: questionIndex + 1,
                numCorrect: state.numCorrect + (correct === true ? 1 : 0),
                numIncorrect: state.numIncorrect + (correct === true ? 0 : 1),
            };
        });
    }

    restartQuiz = () => {
        this.setState({
            questionIndex: 0,
            numCorrect: 0,
            numIncorrect: 0,
        })
    }

    backToDeck = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    render() {
        const { questions } = this.props;
        const { questionIndex, numCorrect, numIncorrect } = this.state;

        if (questions.length === 0) {
            return (
                <View style={styles.container}>
                    <Text style={styles.header}>No Cards Added Yet</Text>
                    <Text>
                        There are no cards in this deck yet. Add some cards before
                        starting the quiz.
                    </Text>
                </View>
            );

        }

        if (questionIndex === questions.length) {
            return (
                <View style={styles.container}>
                    <Text style={styles.header}>Quiz complete!</Text>
                    <Text style={styles.score}>
                        {Math.round(numCorrect * 100 / (numCorrect + numIncorrect))}%
                    </Text>
                    <Text style={styles.answered}>
                        {numCorrect}/{numCorrect + numIncorrect} correct
                    </Text>
                    <Button onPress={this.restartQuiz}>
                        Restart Quiz
                    </Button>
                    <Button onPress={this.backToDeck}>
                        Back to Deck
                    </Button>
                </View>
            );
        }

        const question = questions[questionIndex];
        return (
            <View style={styles.container}>
                <QuizQuestion
                    question={question}
                    questionNum={questionIndex + 1}
                    totalQuestions={questions.length}
                    onAnswer={this.onQuestionAnswer}
                />
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
        fontSize: 20,
        marginBottom: 10,
    },
    score: {
        fontSize: 50,
        marginTop: 20,
    },
    answered: {
        fontSize: 18,
        color: grey,
        margin: 5,
        marginBottom: 50,
    },
});

function mapStateToProps(decks, { route }) {
    return {
        questions: decks[route.params.deckId].questions,
    }
}

export default connect(mapStateToProps)(DeckQuiz);
