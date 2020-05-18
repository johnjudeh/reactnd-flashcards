import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import StatusBar from './StatusBar';
import StackNavigation from './StackNavigation';
import { handleGetDecks } from '../actions';

class AppContainer extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleGetDecks());
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar />
                <StackNavigation />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default connect()(AppContainer);
