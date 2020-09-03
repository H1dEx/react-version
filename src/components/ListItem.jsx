import React from 'react';
import styles from './ListItem.module.scss';

export function ListItem(props) {
    return (
        <li className={"list-group-item d-flex align-items-center " + (props.isImportant ? styles.important : styles.notimportant)}>
            <button type="button" className={`btn ${styles.noOutline}`}>
                <span
                    className={"icon-star-full" + (props.isImportant ? ' active' : '')}
                    onClick={props.importantHandler}
                />
            </button>
            {props.title}
            <div className="btn-group ml-auto d-flex align-items-center" role="group" aria-label="Basic example ">
                <label className="form-check-label">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={props.isFinished}
                        onChange={props.finishHandler}
                    />
                    Done
                </label>
                <button
                    type="button"
                    className="btn"
                    onClick={props.deleteHandler}
                >
                    <span className="icon-bin"/>
                </button>
            </div>
        </li>
    );
};