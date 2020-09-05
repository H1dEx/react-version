import React, {useContext} from 'react';
import {ListItem} from "../components/ListItem";
import {StoreContext} from "../store/store";
import {deletePost, toggleFinished, toggleImportant} from "../store/actions";

export function Lists(props) {
    const {state, dispatch} = useContext(StoreContext);
    console.log(state)
    return (
        <div className="list-group">
            {
                state.posts.map(el => (
                    <ListItem
                        key={el.id}
                        deleteHandler={() => dispatch(deletePost(el.id))}
                        importantHandler={() => dispatch(toggleImportant(el.id))}
                        finishHandler={() => dispatch(toggleFinished(el.id))}
                        isImportant={el.important}
                        isFinished={el.finished}
                        title={el.title}
                    />))
            }
        
        </div>
    );
};