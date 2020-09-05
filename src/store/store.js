import React, {useEffect, useReducer} from "react";
import {reducer} from "./reducer";
import {getPosts} from "./actions";

export const StoreContext = React.createContext();

export function Provider(props) {
    
    const initState = {
        posts: [],
        count: 0
    }
    const [state, dispatch] = useReducer(reducer, initState);
    const customDispatch =action => {
        if (typeof action === 'function') {
            action(customDispatch)
        } else {
            dispatch(action)
        }
    }
    useEffect(()=>{
        customDispatch(getPosts())
        
    }, [])
    
    return <StoreContext.Provider value={{state, dispatch}}>{props.children}</StoreContext.Provider>
}