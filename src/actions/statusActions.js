import { FETCH_START, FETCH_END, FETCH_ERROR  } from '../type'


export function startFetch() {
    return {
        type: FETCH_START
    }
}

export function endFetch() {
    return {
        type: FETCH_END
    }
}

export function errorFetch(error) {
    return {
        type: FETCH_ERROR,
        payload: error
    }
}


