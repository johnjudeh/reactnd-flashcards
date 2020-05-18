import { formatDeck } from '../utils/helpers';
import { DECKS_DATA } from '../constants/dummyData';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';

function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

function addQuestion(deckId, question) {
    return {
        type: ADD_QUESTION,
        deckId,
        question,
    }
}

export function handleReceiveDecks() {
    return (dispatch) => {
        // TODO: Update this once we have AsyncStorage
        dispatch(receiveDecks(DECKS_DATA));
    }
}

export function handleAddDeck(title) {
    return (dispatch) => {
        // TODO: Update this once we have AsyncStorage
        const deck = formatDeck(title);
        dispatch(addDeck(deck));
    }
}

export function handleAddQuestion(deckId, question) {
    return (dispatch) => {
        // TODO: Update this once we have AsyncStorage
        dispatch(addQuestion(deckId, question));
    }
}
