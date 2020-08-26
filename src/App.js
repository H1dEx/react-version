import React, {useContext} from 'react';
import Navbar from "./components/Navbar";
import {Route, Switch} from "react-router-dom";
import Lists from "./views/Lists";
import Add from "./views/Add";
import Login from "./views/Login";
import {ErrorContext} from "./hoc/Error";

function App() {
    const errObj = useContext(ErrorContext);
    return (
        <>
            <Navbar/>
            
            <div className="container">
                {errObj.error
                    ? (
                        <div className="alert alert-danger d-flex justify-content-center" role="alert">
                            {errObj.error.message}
                        </div>
                    )
                    : null
                }
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/add">
                        <Add/>
                    </Route>
                    <Route path="/" exact>
                        <Lists/>
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;
