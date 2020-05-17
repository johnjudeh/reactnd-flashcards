import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { STACK_ROUTE_NAME_HOME } from './constants/navigation';
import BottomTabs from './components/BottomTabs';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={STACK_ROUTE_NAME_HOME}>
                <Stack.Screen
                    name={STACK_ROUTE_NAME_HOME}
                    component={BottomTabs}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
