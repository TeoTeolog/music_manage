import React from "react";

export const Edit = ({value,onChange,name}) => {

    return (
        <>
            <input type = 'text' name={name} onChange={ onChange} value={ value}/>
        </>
    )
}