import { formatDeck } from '../utils/helpers';
import { getDecks, createDeck, addQuestionToDeck } from '../utils/api';
import { STACK_ROUTE_NAME_DECK_DETAIL, TAB_ROUTE_NAME_DECKS } from '../constants/navigation';

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

export function handleAddDeck(title, navigate) {
    return (dispatch) => {
        const deck = formatDeck(title);
        createDeck(deck)
            .then(() => dispatch(addDeck(deck)))
            .then(() => {
                // Navigation happens here because it depends on
                // the deck id which is not known until this point
                navigate(TAB_ROUTE_NAME_DECKS);
                navigate(STACK_ROUTE_NAME_DECK_DETAIL, { id: deck.id });
            });
    }
}

export function handleAddQuestion(deckId, question) {
    return (dispatch) => {
        addQuestionToDeck(deckId, question)
            .then(() => dispatch(addQuestion(deckId, question)));
    }
}
