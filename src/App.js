
import './App.css';
import {Test} from './components/Test'
import {Test2} from './components/Test2'
import {Edit} from './components/Edit'
import React, {useCallback, useState, useEffect} from "react";

let counter=0
function App() {
    const [cnt,setCnt] = useState(0)
    const [cntSpec,setCntSpec] = useState(0)
    const [edit,setEdit] = useState('')
    const [headerText,setHeaderText] = useState('    const [,setHeaderText] = useState(\'\')\n')
    const [value,setValue] = useState([])

    const myAction = useCallback( () => {
        setCnt(cnt+1)
    },[cnt])

    const myActionSpec = useCallback( () => {
        console.log('[App myActionSpec] PRE value:',value,' edit:',edit)
        setValue([...value,edit])
        console.log('[App myActionSpec] value:',value,' edit:',edit)
    },[edit])

    const editChange = (event) => {
        console.log('[App editChange] PRE event.target.value:',event.target.value,' edit:',edit)
        setEdit(event.target.value)
        console.log('[App editChange] event.target.value:',event.target.value,' edit:',edit)
    }

    useEffect(() => {
        setHeaderText(value[value.length-1])
        console.log('[App UseEffect] value:',value,'value[value.length-1]',value[value.length-1])
    }, [value])

    //const [array]

    return (
        <div className="App">
            <div>
                {headerText}
            </div>
            <Test2 cnt={cnt} someAction={myAction} name={0}/>
            <Test2 cnt={cntSpec} someAction={myAction} name={1}/>
            <Test cnt={cnt} someAction={myAction} name={0}/>
            <Test cnt={cntSpec} someAction={myActionSpec} name={1}/>
            <Edit onChange={editChange} value={edit} valueArr={value} text=''/>
        </div>
    );
}

export default App;
