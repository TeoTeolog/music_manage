import React, {useContext, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {MembersOfOneGroupNew, MembersOfOneGroupAdd, MembersOfOneGroup, MainManagerPanel} from './Members'
import '../style/style.css'
import {PageContext} from "../context/PageContext";
export function App3() {

    const page = useContext(PageContext)

    console.log(page.value)

    if (page.value === "MainManagerPanel"){
        return <MainManagerPanel/>
    }
    else if (page.value === "MembersOfOneGroup"){
        return <MembersOfOneGroup/>
    }
    else if (page.value === "MembersOfOneGroupAdd"){
        return <MembersOfOneGroupAdd/>
    }
    else if (page.value === "MembersOfOneGroupNew"){
        return <MembersOfOneGroupNew/>
    }
    else{
        return <MainManagerPanel/>
    }
}
