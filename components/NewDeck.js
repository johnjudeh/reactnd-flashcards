import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { white } from '../constants/colors';
import Button from './Button';
import { connect } from 'react-redux';
import { handleAddDeck } from '../actions';

class NewDeck extends Component {
    state = {
        title: '',
    }

    onTitleChange = (title) => {
        this.setState({
            title,
        });
    }

    onSubmit = () => {
        const { dispatch, navigation } = this.props;
        const { title } = this.state;

        dispatch(handleAddDeck(title, navigation.navigate))

        this.setState({
            title: ''
        });
    }

    render() {
        const { title } = this.state;

        return (
            <View>
                <Text>New Deck</Text>
                <Text>Deck Title</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.onTitleChange}
                    value={title}
                />
                <Button onPress={this.onSubmit} disabled={title === ''}>
                    Create Deck
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        backgroundColor: white,
    }
})

export default connect()(NewDeck);
