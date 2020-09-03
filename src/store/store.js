import React, {useEffect, useReducer} from "react";
import {reducer} from "./reducer";
import {setState} from "./actions";

export const StoreContext = React.createContext();

export function Provider(props) {
    const initState = {
        posts: [],
        count: 0
    }
    const [state, dispatch] = useReducer(reducer, initState);
    
    useEffect(()=>{
        dispatch(setState({
            posts: [
                {
                    title: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
                    id: 4,
                    important: false,
                    finished: false
                },
                {
                    title: 'It has roots in a piece of classical Latin literature from 45 BC',
                    id: 5,
                    important: true,
                    finished: false
                },
                {title: 'He standard chunk of Lorem Ipsum used since the 1500s', id: 3, important: false, finished: true},
                {
                    title: 'Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics',
                    id: 6,
                    important: false,
                    finished: false
                },
                {
                    title: 't has roots in a piece of classical Latin literature from 45 BC',
                    id: 531241,
                    important: true,
                    finished: true
                },
            ],
            count: 5
        }))
    }, [])
    
    return <StoreContext.Provider value={{state, dispatch}}>{props.children}</StoreContext.Provider>
}