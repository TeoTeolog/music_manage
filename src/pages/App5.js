import React, {useContext, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import '../style/style.css'
import {PageContext} from "../context/PageContext";
import {MainDocumentPanel} from "./Documents";

export function App5() {

    const page = useContext(PageContext)

    console.log(page.value)

    if (page.value === "MainDocumentPanel"){
        return <MainDocumentPanel/>
    }
    else{
        return <MainDocumentPanel/>
    }
}
