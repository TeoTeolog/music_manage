import React, {useEffect, useState} from "react";

export const Button = (params) => {

    const [form, setForm] = useState({})


    useEffect(() => {
        setForm(params.relatedValue)
        console.log('[useEffect] text: ',form)
    }, [params.relatedValue])

    return (
        <>
            <button onClick={params.clickHandler}>
                {params.innerText}
            </button>
        </>
    )
}