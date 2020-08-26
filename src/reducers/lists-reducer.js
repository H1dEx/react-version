import {GET_LISTS} from "../actions/lists-action";

export default function listsReducer(state, action) {
    switch (action.type) {
        case GET_LISTS: return action.lists;
        default: return state
    }
}