import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {App2} from './pages/App2'
import {App3} from './pages/App3'
import {App4} from './pages/App4'
import {App5} from './pages/App5'
import {AuthPage} from './pages/AuthPage'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path='/main' element={<App2/>}/>
                {/*<Route path='/' element={<Navigate replace to='/' />} />*/}
            </Routes>
        )
    }
    else{
        return (
            <Routes>
                <Route  path='/' element={<App2/>}/>
                <Route  path='/members' element={<App3/>}/>
                <Route  path='/tour' element={<App4/>}/>
                <Route  path='/documents' element={<App5/>}/>
                <Route  path='/auth' element={<AuthPage/>}/>
                {/*<Route path='*' element={<Navigate replace to='/' />} />*/}
            </Routes>
        )
    }

}
