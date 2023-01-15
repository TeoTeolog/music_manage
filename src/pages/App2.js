import React, {useContext, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {
    GroupScheduleMarket,
    GroupScheduleNew,
    GroupScheduleAdd,
    GroupSchedule,
    MainManagerPanel,
    MainMarketPanel,
    GroupScheduleMarketEdit
} from './GroupSchedule'
import '../style/style.css'
import {PageContext} from "../context/PageContext";
export function App2() {

    const page = useContext(PageContext)

    console.log(page.value)

    if (page.value === "MainManagerPanel"){
        return <MainManagerPanel/>
    }
    else if (page.value === "GroupSchedule"){
        return <GroupSchedule/>
    }
    else if (page.value === "GroupScheduleAdd"){
        return <GroupScheduleAdd/>
    }
    else if (page.value === "GroupScheduleNew"){
        return <GroupScheduleNew/>
    }
    if (page.value === "MainMarketPanel"){
        return <MainMarketPanel/>
    }
    if (page.value === "GroupScheduleMarket"){
        return <GroupScheduleMarket/>
    }
    if (page.value === "GroupScheduleMarketEdit"){
        return <GroupScheduleMarketEdit/>
    }
    else{
        return <MainManagerPanel/>
    }
}
