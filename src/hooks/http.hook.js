import {useState, useCallback} from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            url = 'http://localhost:5050' + url
            const response = await fetch(url, {method, body, headers})
            console.log('response | type of response: ', response, typeof (response))
            let data ={}
            if(response.status === 200) data = await response.json()
            data['status'] = response.status
            if (!response.ok) {
                console.log('что-то не так', response, 'на запрос (url|body|headers):', url, '\n | ', body, '\n | ', headers)
                //throw new Error(data.message || 'Что-то пошло не так')
            }


            setLoading(false)

            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            console.log('request error:', e)
            throw e
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])
    return {loading, request, error, clearError}
}
