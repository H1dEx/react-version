import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Loading from "./hoc/Loading";
import Error from "./hoc/Error";

ReactDOM.render(
    <BrowserRouter>
        <Loading>
            <Error>
                <React.StrictMode>
                    <App/>
                </React.StrictMode>
            </Error>
        </Loading>
    </BrowserRouter>,
    document.getElementById('root')
);

