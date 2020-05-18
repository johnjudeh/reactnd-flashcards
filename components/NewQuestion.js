import React, { Component } from 'react';
import { Text, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { white } from '../constants/colors';
import Button from './Button';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions';

class NewQuestion extends Component {
    state = {
        question: '',
        answer: '',
    }

    onInputChange = (key, value) => {
        this.setState({
            [key]: value,
        });
    }

    onSubmit = () => {
        const { dispatch, route, navigation } = this.props;
        const { deckId } = route.params;
        const { question, answer } = this.state;

        dispatch(handleAddQuestion(deckId, {
            question,
            answer,
        }));

        this.setState({
            question: '',
            answer: '',
        });

        navigation.goBack();
    }

    render() {
        const { question, answer } = this.state;

        return (
            <KeyboardAvoidingView behavior='padding'>
                <Text>Question</Text>
                <TextInput
                    multiline
                    style={styles.textInput}
                    value={question}
                    onChangeText={(val) => this.onInputChange('question', val)}
                />
                <Text>Answer</Text>
                <TextInput
                    multiline
                    style={styles.textInput}
                    value={answer}
                    onChangeText={(val) => this.onInputChange('answer', val)}
                />
                <Button onPress={this.onSubmit} disabled={question === '' || answer === ''}>
                    Add Card
                </Button>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        backgroundColor: white,
    }
})

export default connect()(NewQuestion);
