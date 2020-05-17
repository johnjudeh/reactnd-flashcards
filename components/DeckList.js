import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { DECKS_DATA } from '../constants/dummyData';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { STACK_ROUTE_NAME_DECK_DETAIL } from '../constants/navigation';

class DeckList extends Component {
    goToDeckDetail = (id) => {
        const { navigate } = this.props.navigation;
        navigate(STACK_ROUTE_NAME_DECK_DETAIL, { id });
    }

    renderItem = ({ item }) => {
        const { id, title, questions } = item;

        return (
            <View>
                <TouchableOpacity onPress={() => this.goToDeckDetail(id)}>
                    <Text>{title}</Text>
                    <Text>{questions.length} cards</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View>
                <Text>Deck List</Text>
                <FlatList
                    data={Object.values(DECKS_DATA)}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

export default DeckList;
