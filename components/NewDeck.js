import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { transparentBlue, white } from '../constants/colors';
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
            <View style={styles.container}>
                <Text style={styles.header}>New Deck</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.onTitleChange}
                    placeholder='Deck Name'
                    value={title}
                />
                <Button style={styles.btn} onPress={this.onSubmit} disabled={title === ''}>
                    Create Deck
                </Button>
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
    header: {
        fontSize: 20,
        alignSelf: 'center',
        margin: 10,
        marginBottom: 20,
    },
    textInput: {
        height: 40,
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

export default connect()(NewDeck);
