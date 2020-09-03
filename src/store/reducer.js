import {ADD_POST, DELETE_POST, SET_STATE, TOGGLE_FINISHED, TOGGLE_IMPORTANT} from "./types";

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_STATE: {
            return {...action.payload}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(el => el.id !== action.id), count: state.count - 1}
        }
        case ADD_POST: {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: Date.now().toString(), title: action.title}
                ],
                count: state.count + 1
            }
        }
        case TOGGLE_FINISHED: {
            const newPosts = state.posts.map(el => {
                if (el.id !== action.id) return el;
                return {...el, finished: !el.finished}
            })
            return {
                ...state,
                posts: newPosts
            }
        }
        case TOGGLE_IMPORTANT: {
            const newPosts = state.posts.map(el => {
                if (el.id !== action.id) return el;
                return {...el, important: !el.important}
            })
            return {
                ...state,
                posts: newPosts
            }
        }
        default:
            return state
    }
}