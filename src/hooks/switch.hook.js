import {useState, useCallback, useEffect} from 'react'

const storageName = 'userData'

export const useSwitch = () => {
    const [value, setActiveSwitch] = useState("")


    const set = useCallback((choice) => {
        setActiveSwitch(choice)

        localStorage.setItem(storageName, JSON.stringify({
            value: value
        }))
    }, [])

    return {set, value}
}

