import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { STACK_ROUTE_NAME_DECK_DETAIL } from '../constants/navigation';
import { connect } from 'react-redux';

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
        const { decks } = this.props;

        return (
            <View>
                <Text>Deck List</Text>
                <FlatList
                    data={Object.values(decks)}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

function mapStateToProps(decks) {
    return {
        decks,
    }
}

export default connect(mapStateToProps)(DeckList);
