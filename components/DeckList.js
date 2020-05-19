import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { STACK_ROUTE_NAME_DECK_DETAIL } from '../constants/navigation';
import { connect } from 'react-redux';
import { grey, transparentBlue, white } from '../constants/colors';

class DeckList extends Component {
    goToDeckDetail = (id) => {
        const { navigate } = this.props.navigation;
        navigate(STACK_ROUTE_NAME_DECK_DETAIL, { id });
    }

    renderItem = ({ item }) => {
        const { id, title, questions } = item;

        return (
            <TouchableOpacity
                style={styles.card}
                onPress={() => this.goToDeckDetail(id)}
            >
                <Text style={styles.deckTitle}>{title}</Text>
                <Text style={styles.numOfCards}>{questions.length} cards</Text>
            </TouchableOpacity>
        );
    }

    render() {
        const { decks } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.header}>Deck List</Text>
                <FlatList
                    data={Object.values(decks)}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 20,
        backgroundColor: white,
    },
    header: {
        fontSize: 20,
        alignSelf: 'center',
        margin: 10,
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 8,
        borderStyle: 'solid',
        borderColor: transparentBlue,
        borderWidth: 1,
        shadowRadius: 1,
        shadowOpacity: 0.4,
        shadowColor: transparentBlue,
        shadowOffset: {
            width: 0,
            height: 3,
        }
    },
    deckTitle: {
        fontSize: 18,
    },
    numOfCards: {
        fontSize: 14,
        color: grey,
        paddingTop: 5,
    }
})

function mapStateToProps(decks) {
    return {
        decks,
    }
}

export default connect(mapStateToProps)(DeckList);
