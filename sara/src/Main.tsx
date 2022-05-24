import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import LoginLanding from './loginLanding'
import LogoutSuccess from './logoutSuccess'


function Main(){
    return(
        <Routes>
            <Route path='/loginLanding' element={<LoginLanding/>}/>
            <Route path='/logoutSuccess' element={<LogoutSuccess/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
    )
}

export default Main