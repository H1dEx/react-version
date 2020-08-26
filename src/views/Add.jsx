import React, {Component} from 'react';
import styles from "./Views.module.scss";

class Add extends Component {
    render() {
        return (
            <div className={"list-group-item list-group-item-light pt-3 mt-5 col-8 offset-2 " + styles.fontColor}>
                <h2 className="mb-3">Create a new task</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Title:</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Text:</label>
                        <textarea className="form-control" rows="5" id="comment"></textarea>
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox"/> Important
                        </label>
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        );
    }
}

export default Add;