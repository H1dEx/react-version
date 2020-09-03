import React from 'react';

export function Newlist(props) {
    return (
        <div className="list-group">
            <form className="list-group-item">
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Label: </label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                           placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Description: </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"/>
                </div>
                <button type="submit" className="btn btn-secondary mt-2">Submit</button>
            </form>
        </div>
    );
};