import {ADD_POST, DELETE_POST, GET_POSTS, SET_STATE, TOGGLE_FINISHED, TOGGLE_IMPORTANT} from "./types";
import {postsAPI} from "../api/axios";

export const addPost = title => ({type: ADD_POST, title})
export const toggleImportant = id => ({type: TOGGLE_IMPORTANT, id})
export const toggleFinished = id => ({type: TOGGLE_FINISHED, id})
export const deletePost = id => ({type: DELETE_POST, id})
export const setState = payload => ({type: SET_STATE, payload})

export const getPosts = () => async (dispatch) => {
    const response = await postsAPI.getItems();
    console.log(response)
    dispatch(setState(response))
}