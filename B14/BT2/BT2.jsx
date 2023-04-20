import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';

export default function BT2() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <Routes>
                {/* <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/*" element={<Navigate to="/" />} /> */}
                <Switch>
                    <Route exact path="/" render={() => (isLoggedIn ? <Home /> : <Redirect to="/login" />)} />
                    <Route exact path="/login" render={() => (!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Redirect to="/" />)} />
                    <Redirect to="/" />
                </Switch>
            </Routes>
        </div>
    )
}
