import fetch from 'cross-fetch'
import { URL_REGISTER, URL_SUBMIT, URL_PUBLIC } from './const'

export function rumbleSave(name: string, code: string): Promise<string> {
    let data = {
        key: name,
        value: code
    }
    return fetch(URL_REGISTER, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then((resp) => resp.text())
        .then((value) => value)
}

export function rumbleSubmit(namespace: string, data: string): Promise<boolean> {
    let body = {
        namespace: namespace,
        data: data
    }
    return fetch(URL_SUBMIT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
        .then((resp) => resp.json())
        .catch((err) => { return { "message": err } })
}

interface Enemy {
    name: string
    url: string
    rewards: number
}

export async function rumblePublic(): Promise<Enemy[]> {
    return fetch(URL_PUBLIC)
        .then((resp) => resp.json())
        .catch((err) => [])
}
