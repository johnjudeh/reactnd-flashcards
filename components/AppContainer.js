import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import StatusBar from './StatusBar';
import StackNavigation from './StackNavigation';
import { handleGetDecks } from '../actions';
import { scheduleLocalRevisionNotifications } from '../utils/helpers';
import { white } from '../constants/colors';

class AppContainer extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleGetDecks());
        scheduleLocalRevisionNotifications();
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
        backgroundColor: white,
    },
});

export default connect()(AppContainer);
