// Code sourced from https://react-native-async-storage.github.io/async-storage/docs/usage

import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeObject(key, object) {
    try {
        const jsonValue = JSON.stringify(object)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        console.log(e)
    }
}

export async function getObject(key) {
    try {
        const rawValue = await AsyncStorage.getItem(key)
        return rawValue != null ? JSON.parse(rawValue) : null;
    } catch(e) {
        console.log(e)
    }
}