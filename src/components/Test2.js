import React, {memo} from "react";

let counter = [0,0]

export const Test2 = memo(({cnt,someAction,name}) => {

    const onClick = () => someAction(cnt)

    console.log('[Test',name,']',' rerender:',counter[name]++,'counter is:',counter)

    return (
        <button onClick={onClick}>{cnt}</button>
    )
})