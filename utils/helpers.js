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
