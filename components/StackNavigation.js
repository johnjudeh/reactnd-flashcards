import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import DeckDetail from './DeckDetail';
import NewQuestion from './NewQuestion';
import DeckQuiz from './DeckQuiz';
import {
    STACK_ROUTE_NAME_HOME,
    STACK_ROUTE_NAME_DECK_DETAIL,
    STACK_ROUTE_NAME_NEW_QUESTION,
    STACK_ROUTE_NAME_QUIZ,
} from '../constants/navigation';

const Stack = createStackNavigator();

function StackNavigation(props) {
    return (
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
    );
}

export default StackNavigation;
