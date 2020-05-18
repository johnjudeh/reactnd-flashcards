import { AsyncStorage } from "react-native"
import DECKS_DATA from "../constants/dummy-data"
import { STORAGE_KEY_DECKS } from "../constants/storage";

function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function formatDeck(title) {
    return {
        id: generateUID(),
        title,
        questions: [],
    }
}

export function setDummyData() {
    AsyncStorage.setItem(STORAGE_KEY_DECKS, JSON.stringify(DECKS_DATA));
    return DECKS_DATA;
}
