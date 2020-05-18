import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import QuizQuestion from './QuizQuestion';
import Button from './Button';

class DeckQuiz extends Component {
    state = {
        questionIndex: 0,
        numCorrect: 0,
        numIncorrect: 0,
    }

    onQuestionAnswer = (correct) => {
        this.setState((state) => ({
            questionIndex: ++state.questionIndex,
            numCorrect: state.numCorrect + (correct === true ? 1 : 0),
            numIncorrect: state.numIncorrect + (correct === true ? 0 : 1),
        }))
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

        if (questionIndex === questions.length) {
            return (
                <View>
                    <Text>Quiz complete!</Text>
                    <Text>{Math.round(numCorrect * 100 / (numCorrect + numIncorrect))}%</Text>
                    <Text>{numCorrect}/{numCorrect + numIncorrect} correct</Text>
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
        return <QuizQuestion question={question} onAnswer={this.onQuestionAnswer} />;
    }
}

function mapStateToProps(decks, { route }) {
    return {
        questions: decks[route.params.deckId].questions,
    }
}

export default connect(mapStateToProps)(DeckQuiz);
