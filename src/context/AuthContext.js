import {createContext} from 'react'

function noop() {}

export const AuthContext = createContext({
    a_token: null,
    r_token: null,
    userId: null,
    login: noop,
    logout: noop,
    refreshingAccess:noop,
    isAuthenticated: false
})
