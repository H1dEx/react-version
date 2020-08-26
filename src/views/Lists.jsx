import React, {useEffect, useReducer} from 'react';
import styles from "./Views.module.scss";
import listsReducer from "../reducers/lists-reducer";
import {getLists} from "../actions/lists-action";

export default function Lists(props) {
    
    const [lists, dispatch] = useReducer(listsReducer, [])
    
    useEffect(() => {
        dispatch(getLists())
    }, [])
    
    return (
        <div className={"list-group-item list-group-item-light mt-5 col " + styles.fontColor}>
            <h1>Header</h1>
            <ul className="list-group">
                {lists.map(list => (
                        <li key={list.id} className={list.is_important ? 'list-group-item d-flex ' + styles.is_important : 'list-group-item d-flex'}>
                            <button type="button" className="btn"><span
                                className={(list.is_important) ? "icon-star-full active" : "icon-star-full"}/></button>
                            <div>
                                <b>{list.title}</b>
                                <br/>
                                {list.text}
                            </div>
                            <div className="form-check ml-auto d-flex align-items-center">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" checked={list.is_finished}/>Finished
                                </label>
                            </div>
                            <button type="button" className="btn"><span className="icon-bin"/></button>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};