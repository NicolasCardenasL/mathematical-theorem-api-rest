import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
export const readJSON = (path) => require(path)


export function areAllUndefined(...args) {
    return args.every(arg => typeof arg === 'undefined');
}

export function isUndefined(input) {
    return typeof input === 'undefined';
}

export function matchStrings(str1, str2) {
    return str1.toLowerCase().includes(str2.toLowerCase())
}

export function stringToInt(str) {
    try {
        const int = Math.trunc(+str)
        return int
    } catch {return undefined}
}

export function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function transformToBoolean(input) {
    if (matchStrings("true", input)) {
        return true
    } else if(matchStrings("false", input)) {
        return false
    }
    else return undefined
}
                
