import {useState, useCallback, useEffect} from 'react'
import {useHttp} from './http.hook'

const storageName = 'userData'

export const useAuth = () => {
    const {request} = useHttp()
    const [ready, setReady] = useState(false)
    const [token, setToken] = useState("")
    const [userId, setUserId] = useState("")


    const login = useCallback((id,access_token) => {
        setUserId(id)
        setToken(access_token)

        localStorage.setItem(storageName, JSON.stringify({
            userId: id, token: access_token
        }))
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.userId, data.token)
        }
        setReady(true)
    }, [login])

    const logout = useCallback(() => {
        setUserId(null)
        setToken(null)
        localStorage.removeItem(storageName)
    }, [])

    return { login, logout, userId, token, ready}
}

