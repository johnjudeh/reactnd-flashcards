import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { STACK_ROUTE_NAME_HOME, STACK_ROUTE_NAME_DECK_DETAIL } from './constants/navigation';
import StatusBar from './components/StatusBar';
import BottomTabs from './components/BottomTabs';
import DeckDetail from './components/DeckDetail';

const Stack = createStackNavigator();

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar />
            <NavigationContainer>
                <Stack.Navigator initialRouteName={STACK_ROUTE_NAME_HOME}>
                    <Stack.Screen
                        name={STACK_ROUTE_NAME_HOME}
                        component={BottomTabs}
                        options={{
                            title: 'Decks',
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name={STACK_ROUTE_NAME_DECK_DETAIL}
                        component={DeckDetail}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
