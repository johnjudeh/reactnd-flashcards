import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { TAB_ROUTE_NAME_DECKS, TAB_ROUTE_NAME_NEW_DECK } from '../constants/navigation';
import DeckList from './DeckList';
import NewDeck from './NewDeck';

const Tabs = createBottomTabNavigator();

class BottomTabs extends Component {
    getTabBarIconCreator(route) {
        return ({ focused, color, size }) => {
            switch (route.name) {
                case TAB_ROUTE_NAME_DECKS:
                    return <MaterialCommunityIcons name='cards-outline' size={size} color={color} />;
                case TAB_ROUTE_NAME_NEW_DECK:
                    return <MaterialIcons name='add-circle-outline' size={size} color={color} />;
            }
        }
    }

    render() {
        return (
            <Tabs.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: this.getTabBarIconCreator(route),
                })}
            >
                <Tabs.Screen name={TAB_ROUTE_NAME_DECKS} component={DeckList} />
                <Tabs.Screen name={TAB_ROUTE_NAME_NEW_DECK} component={NewDeck} />
            </Tabs.Navigator>
        )
    }
}

export default BottomTabs;
