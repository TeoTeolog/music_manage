import React from "react";

let counter = [0,0]

export const Test = (props) => {

    const onClick = () => props.someAction(props.cnt)

    console.log('[Test]|',props.name,'| rerender:',counter[props.name]++,'counter is:',counter)

    return (
        <button onClick={onClick}>{props.cnt}</button>
    )
}

