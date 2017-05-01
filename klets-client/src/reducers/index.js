import {combineReducers} from 'redux'
import {RECEIVE_ROOMS} from '../actions'

const rooms = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ROOMS:
            return action.rooms
        default:
            return state
    }
}

///////////////////////

import {
    SELECT_REDDIT, INVALIDATE_REDDIT,
    REQUEST_POSTS, RECEIVE_POSTS
} from '../actions'

const selectedReddit = (state = 'reactjs', action) => {
    switch (action.type) {
        case SELECT_REDDIT:
            return action.reddit
        default:
            return state
    }
}

const posts = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case INVALIDATE_REDDIT:
            return {
                ...state,
                didInvalidate: true
            }
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            }
        default:
            return state
    }
}

const postsByReddit = (state = {}, action) => {
    switch (action.type) {
        case INVALIDATE_REDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return {
                ...state,
                [action.reddit]: posts(state[action.reddit], action)
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    rooms,
    postsByReddit,
    selectedReddit
})

export default rootReducer
