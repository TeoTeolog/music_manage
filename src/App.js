import React,{useState} from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import {useRoutes} from './routes.js'
import {useAuth} from './hooks/auth.hook'
import {useSwitch} from './hooks/switch.hook'
import {AuthContext} from './context/AuthContext'
import {PageContext} from './context/PageContext'
// import './css/App.css'
// import './css/style.css'

function App() {
    const {login, logout, refreshingAccess, userId, token, refreshToken, ready} = useAuth()
    const {set, value} = useSwitch()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated) //Authorization chek instead "true"
    if (!ready) {
        return <p>Т УТ должен быть loader </p>
    }
    return (
        <PageContext.Provider value={{value, set}}>
            <AuthContext.Provider value={{
                token, refreshToken, userId, login, logout, refreshingAccess
            }}>
                <BrowserRouter>
                    <div className="container">
                        {routes}
                    </div>
                </BrowserRouter>
            </AuthContext.Provider>
        </PageContext.Provider>
    )
}

export default App