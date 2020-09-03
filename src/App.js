import React from 'react';
import {Navbar} from "./components/Navbar.jsx";
import {Lists} from "./views/Lists";
import {Login} from "./views/Login";
import {Newlist} from "./views/Newlist";
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <div>
            <Navbar/>
            <div className="container pt-5">
                <Switch>
                    <Route path="/login"><Login/></Route>
                    <Route path="/lists" exact><Lists/></Route>
                    <Route path="/add"><Newlist/></Route>
                </Switch>
            </div>
        </div>
    )
        ;
}

export default App;
