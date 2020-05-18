import { formatDeck } from '../utils/helpers';
import { getDecks, createDeck, addQuestionToDeck } from '../utils/api';

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

export function handleGetDecks() {
    return (dispatch) => {
        getDecks().then(decks => {
            dispatch(receiveDecks(decks));
        })
    }
}

export function handleAddDeck(title) {
    return (dispatch) => {
        const deck = formatDeck(title);
        createDeck(deck)
            .then(() => dispatch(addDeck(deck)));
    }
}

export function handleAddQuestion(deckId, question) {
    return (dispatch) => {
        addQuestionToDeck(deckId, question)
            .then(() => dispatch(addQuestion(deckId, question)));
    }
}
