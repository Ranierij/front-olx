import React from "react";
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/Signin'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'


export default () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
        </Routes>

    )
}
