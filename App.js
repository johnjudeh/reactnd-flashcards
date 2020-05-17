import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StatusBar from './components/StatusBar';
import BottomTabs from './components/BottomTabs';
import DeckDetail from './components/DeckDetail';
import NewQuestion from './components/NewQuestion';
import DeckQuiz from './components/DeckQuiz';
import {
    STACK_ROUTE_NAME_HOME,
    STACK_ROUTE_NAME_DECK_DETAIL,
    STACK_ROUTE_NAME_NEW_QUESTION,
    STACK_ROUTE_NAME_QUIZ,
} from './constants/navigation';

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
                        options={({ route }) => ({
                            // TODO: Change this to be the title rather than id
                            // once I hook up redux
                            title: route.params.id
                        })}
                    />
                    <Stack.Screen
                        name={STACK_ROUTE_NAME_NEW_QUESTION}
                        component={NewQuestion}
                        options={{
                            title: 'New Card'
                        }}
                    />
                    <Stack.Screen
                        name={STACK_ROUTE_NAME_QUIZ}
                        component={DeckQuiz}
                        options={{
                            title: 'Quiz'
                        }}
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
