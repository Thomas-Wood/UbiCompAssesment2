// Code sourced from https://react-native-async-storage.github.io/async-storage/docs/usage

import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 
 * @param {*} key - The string value used to identify the storage location
 * @param {*} object - The object to store at the location
 */
export async function storeObject(key, object) {
    try {
        const jsonValue = JSON.stringify(object)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        console.log(e)
    }
}

/**
 * 
 * @param {*} key - The string value used to identify the storage location
 * @returns The item at the key location
 */
export async function getObject(key) {
    try {
        const rawValue = await AsyncStorage.getItem(key)
        return rawValue != null ? JSON.parse(rawValue) : null;
    } catch(e) {
        console.log(e)
    }
}