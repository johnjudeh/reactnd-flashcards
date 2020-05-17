import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';

function FlashCardsStatusBar() {
    return (
        <View style={styles.statusBar}>
            <StatusBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    statusBar: {
        height: Constants.statusBarHeight,
    }
});

export default FlashCardsStatusBar;
