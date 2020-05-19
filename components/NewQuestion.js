import React, { Component } from 'react';
import { TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { white, transparentBlue } from '../constants/colors';
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
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <TextInput
                    multiline
                    style={styles.textInput}
                    value={question}
                    placeholder='Question'
                    onChangeText={(val) => this.onInputChange('question', val)}
                />
                <TextInput
                    multiline
                    style={styles.textInput}
                    value={answer}
                    placeholder='Answer'
                    onChangeText={(val) => this.onInputChange('answer', val)}
                />
                <Button
                    style={styles.btn}
                    onPress={this.onSubmit}
                    disabled={question === '' || answer === ''}
                >
                    Add Card
                </Button>
            </KeyboardAvoidingView>
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
    textInput: {
        height: 100,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: white,
        borderRadius: 8,
        borderStyle: 'solid',
        borderColor: transparentBlue,
        borderWidth: 1,
    },
    btn: {
        alignSelf: 'center',
    }
})

export default connect()(NewQuestion);
