import { AsyncStorage } from 'react-native';
import { setDummyData } from './helpers';
import { STORAGE_KEY_DECKS } from '../constants/storage';

export function getDecks() {
    return AsyncStorage.getItem(STORAGE_KEY_DECKS)
        .then(JSON.parse)
        .then(data => {
            if (data === null) {
                return setDummyData();
            }
            return data;
        });
}

export function getDeck(id) {
    return AsyncStorage.getItem(STORAGE_KEY_DECKS)
        .then(JSON.parse)
        .then(data => data[id]);
}

export function createDeck(deck) {
    return AsyncStorage.mergeItem(STORAGE_KEY_DECKS, JSON.stringify({
        [deck.id]: deck,
    }))
}

export function addQuestionToDeck(deckId, question) {
    return getDeck(deckId)
        .then(deck => {
            return AsyncStorage.mergeItem(STORAGE_KEY_DECKS, JSON.stringify({
                [deck.id]: {
                    ...deck,
                    questions: deck.questions.concat([question]),
                },
            }));
        });
}
