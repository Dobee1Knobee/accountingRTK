import React from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {navigtion} from "../utils/constants";
import Guest from "./guest";
import Login from "./guest/Login";
import Register from "./guest/Register";
import User from "./user";

const Main = () => {
    // @ts-ignore
    return (
        <Router>
        <Routes>
            {['/',`${navigtion[0].route}`].map(p=>
                <Route key={p} path={p} element={<Guest/>}></Route>
            )}
            <Route path={`/${navigtion[1].route}`} element={<Login />} />
            <Route path={`/${navigtion[2].route}`} element={<Register />} />
            <Route path={`/${navigtion[3].route}`} element={<User />} />

        </Routes>
        </Router>
    );
};

export default Main;