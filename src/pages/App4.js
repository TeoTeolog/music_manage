import React, {useContext, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import '../style/style.css'
import {PageContext} from "../context/PageContext";
import {
    MainTourPage, MainTourPageMoreInfo, MainTourPageMoreInfoAdd, MainTourPageMoreInfoPlan,
    MainTourPageMoreInfoNew, MainTourPageAdd, MainTourPageNew
} from "./Tour";

export function App4() {

    const page = useContext(PageContext)

    console.log(page.value)

    if (page.value === "MainTourPage"){
        return <MainTourPage/>
    }
    else if (page.value === "MainTourPageMoreInfo"){
        return <MainTourPageMoreInfo/>
    }
    else if (page.value === "MainTourPageMoreInfoAdd"){
        return <MainTourPageMoreInfoAdd/>
    }
    else if (page.value === "MainTourPageMoreInfoNew"){
        return <MainTourPageMoreInfoNew/>
    }
    else if (page.value === "MainTourPageAdd"){
        return <MainTourPageAdd/>
    }
    else if (page.value === "MainTourPageNew"){
        return <MainTourPageNew/>
    }
    else if (page.value === "MainTourPageMoreInfoPlan"){
        return <MainTourPageMoreInfoPlan/>
    }
    else{
        return <MainTourPage/>
    }
}
