import React, {Component} from 'react';
import styles from './Views.module.scss';

class Login extends Component {
    render() {
        return (
            <div className={"list-group-item list-group-item-light mt-5 col-8 offset-2 " + styles.fontColor}>
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd"/>
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox"/> Remember me
                        </label>
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;