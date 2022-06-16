import React, {useEffect,useState} from "react";

export const Edit = ({valueArr=[], value,onChange}) => {

    const [text,setText] = useState('')

    useEffect(() => {
        setText(valueArr.length)
        console.log('[App UseEffect] value:', valueArr,'value[value.length-1]', valueArr[ valueArr.length-1])
    }, [ valueArr])

    return (
        <>
            <input type="text" onChange={ onChange} value={ value}/>
            {text}
        </>
    )
}