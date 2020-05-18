import { AsyncStorage } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import DECKS_DATA from '../constants/dummy-data';
import { STORAGE_KEY_DECKS, STORAGE_KEY_NOTIFICATION } from '../constants/storage';

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

function createRevisionNotification() {
    return {
        title: 'Revision time!',
        body: "👋 Don't forget to take a quiz today!",
        ios: {
            sound: true,
            _displayInForeground: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function scheduleLocalRevisionNotifications() {
    return AsyncStorage.getItem(STORAGE_KEY_NOTIFICATION)
        .then(JSON.parse)
        .then(data => {
            // Only schedules notifications if the store does
            // not have information about the notifications. I.e.
            // they have not been set yet (or stopped).
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ granted }) => {
                        if (granted === true) {
                            // Safety to ensure that the notification
                            // has not been set twice
                            Notifications.cancelAllScheduledNotificationsAsync();

                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            tomorrow.setHours(18);
                            tomorrow.setMinutes(0);

                            // Creates a new revision notification starting
                            // tomorrow at 6:00pm
                            Notifications.scheduleLocalNotificationAsync(
                                createRevisionNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )

                            // Stores true in store so that this scheduling
                            // is not run again while it is already active
                            AsyncStorage.setItem(
                                STORAGE_KEY_NOTIFICATION,
                                JSON.stringify(true)
                            )
                        }
                    });
            }
        });
}

function clearLocalRevisionNotifications() {
    return AsyncStorage.removeItem(STORAGE_KEY_NOTIFICATION)
        .then(() => Notifications.cancelAllScheduledNotificationsAsync());
}

export function clearTodaysRevisionNotification() {
    // Clears the notifications and creates a new schedule
    // starting tomorrow - effectively cancelling todays
    // notification only
    return clearLocalRevisionNotifications()
        .then(scheduleLocalRevisionNotifications);
}
