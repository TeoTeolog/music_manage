import React, {useContext} from 'react'
import {InputField} from '../components/InputField'
import {PageContext} from '../context/PageContext'
import {NavLink} from "react-router-dom";

export const MainTourPage = () => {
    const page = useContext(PageContext)

    const onClick = event => {
        page.set(event.target.id)
    }

    return(
        <body>
        <header>
            <div className="cur-time-widget">Сб, 7 января</div>
            <div className="profile-widget">
                <div className="info">
                    <div>
                        <span className="name">Карина Тарасова</span>
                    </div>
                    <div>
                        <span className="job-title">Менеджер</span>
                    </div>
                </div>
                <div className="mini-avatar">
                    <img src={require('../images/mini-avatar-example.png')} alt="ава"/>
                </div>
            </div>
        </header>
        <main>
            <div className="container">
                <div className="chapter-title">
                    Панель менеджера
                </div>
                <div className="nav-menu">
                    <ul>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Расписание группы
                            </button>
                        </li>
                        <li className="menu-item">
                            <button id="MainManagerPanel" className="menu-item"  onClick={onClick}>
                                Состав группы
                            </button>
                        </li>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Гастроли
                            </button>
                        </li>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Документы
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <button id={"MainTourPageAdd"} className={"move-right add-button"} onClick={onClick}>
                        Добавить гастроли
                    </button>
                    <div className={"schedule-table"}>
                        <div className={"schedule-table-row"}>
                            <div className="title event-group-name">
                                Группа
                            </div>
                            <div className="title event-name">
                                Название тура
                            </div>
                            <div className="title event-time">
                                Время
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                t.A.T.u
                            </div>
                            <div className="event-name">
                                200 по встречной, Москва, СПб
                            </div>
                            <div className="event-time">
                                25 января - 31 января
                            </div>
                        </div>
                        <div className={"schedule-table-row"} onClick={onClick} id={"MainTourPageMoreInfo"}>
                            <div className="event-group-name">
                                Мумий Тролль
                            </div>
                            <div className="event-name">
                                Москва, Иркутск, Владивосток
                            </div>
                            <div className="event-time">
                                26 января - 7 февраля
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </body>
    );
}

export const MainTourPageMoreInfo = () => {
    const page = useContext(PageContext)

    const onClick = event => {
        page.set(event.target.id)
    }

    return(
        <body>
        <header>
            <div className="cur-time-widget">Сб, 7 января</div>
            <div className="profile-widget">
                <div className="info">
                    <div>
                        <span className="name">Карина Тарасова</span>
                    </div>
                    <div>
                        <span className="job-title">Менеджер</span>
                    </div>
                </div>
                <div className="mini-avatar">
                    <img src={require('../images/mini-avatar-example.png')} alt="ава"/>
                </div>
            </div>
        </header>
        <main>
            <div className="container">
                <div className="chapter-title">
                    Панель менеджера
                </div>
                <div className="nav-menu">
                    <ul>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Расписание группы
                            </button>
                        </li>
                        <li className="menu-item">
                            <button id="MainManagerPanel" className="menu-item"  onClick={onClick}>
                                Состав группы
                            </button>
                        </li>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Гастроли
                            </button>
                        </li>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Документы
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <div className={"chapter-title"}> Тур "Москва, Иркутск, Владивосток"</div>
                    <button id={"MainTourPageMoreInfoAdd"} className={"move-right add-button"} onClick={onClick}>
                        Добавить место
                    </button>
                    <div className={"schedule-table"}>
                        <div className={"schedule-table-row"}>
                            <div className="title event-group-name">
                                Дата
                            </div>
                            <div className="title event-name">
                                Место проведения
                            </div>
                            <div className="title event-time">
                                Программа
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                26 января
                            </div>
                            <div className="event-name">
                                Владивосток
                            </div>
                            <div className="event-time">
                                <a id={"MainTourPageMoreInfoPlan"} onClick={onClick}>Программа</a>
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                1 февраля
                            </div>
                            <div className="event-name">
                                Иркутск
                            </div>
                            <div className="event-time">
                                <a href="">Программа</a>
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                7 февраля
                            </div>
                            <div className="event-name">
                                Москва
                            </div>
                            <div className="event-time">
                                <a href="">Программа</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </body>
    );
}

export const MainTourPageMoreInfoPlan = () => {
    const page = useContext(PageContext)

    const onClick = event => {
        page.set(event.target.id)
    }

    return(
        <body>
        <header>
            <div className="cur-time-widget">Сб, 7 января</div>
            <div className="profile-widget">
                <div className="info">
                    <div>
                        <span className="name">Карина Тарасова</span>
                    </div>
                    <div>
                        <span className="job-title">Менеджер</span>
                    </div>
                </div>
                <div className="mini-avatar">
                    <img src={require('../images/mini-avatar-example.png')} alt="ава"/>
                </div>
            </div>
        </header>
        <main>
            <div className="container">
                <div className="chapter-title">
                    Панель менеджера
                </div>
                <div className="nav-menu">
                    <ul>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Расписание группы
                            </button>
                        </li>
                        <li className="menu-item">
                            <button id="MainManagerPanel" className="menu-item"  onClick={onClick}>
                                Состав группы
                            </button>
                        </li>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Гастроли
                            </button>
                        </li>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Документы
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <div className={"pop-up-wrapper"}>
                        <div className={"pu-main-div"}>
                            <div className={"pu-title"}>
                                Программа
                                <img onClick={onClick} id={"MainTourPageMoreInfo"} src={require('../images/exit-sign.png')} alt="выход"/>
                            </div>
                            <div className={"move-right"}>
                                загрузка и выгрузка документов пока в разработке:(
                            </div>
                        </div>
                    </div>
                    <div className={"chapter-title"}> Тур "Москва, Иркутск, Владивосток"</div>
                    <button id={"GroupScheduleAdd"} className={"move-right add-button"} onClick={onClick}>
                        Добавить место
                    </button>
                    <div className={"schedule-table"}>
                        <div className={"schedule-table-row"}>
                            <div className="title event-group-name">
                                Дата
                            </div>
                            <div className="title event-name">
                                Место проведения
                            </div>
                            <div className="title event-time">
                                Программа
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                26 января
                            </div>
                            <div className="event-name">
                                Владивосток
                            </div>
                            <div className="event-time">
                                <a href="">Программа</a>
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                1 февраля
                            </div>
                            <div className="event-name">
                                Иркутск
                            </div>
                            <div className="event-time">
                                <a href="">Программа</a>
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                7 февраля
                            </div>
                            <div className="event-name">
                                Москва
                            </div>
                            <div className="event-time">
                                <a href="">Программа</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </body>
    );
}


export const MainTourPageMoreInfoAdd = () => {
    const page = useContext(PageContext)

    const onClick = event => {
        page.set(event.target.id)
    }

    return(
        <body>
        <header>
            <div className="cur-time-widget">Сб, 7 января</div>
            <div className="profile-widget">
                <div className="info">
                    <div>
                        <span className="name">Карина Тарасова</span>
                    </div>
                    <div>
                        <span className="job-title">Менеджер</span>
                    </div>
                </div>
                <div className="mini-avatar">
                    <img src={require('../images/mini-avatar-example.png')} alt="ава"/>
                </div>
            </div>
        </header>
        <main>
            <div className="container">
                <div className="chapter-title">
                    Панель менеджера
                </div>
                <div className="nav-menu">
                    <ul>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Расписание группы
                            </button>
                        </li>
                        <li className="menu-item">
                            <button id="MainManagerPanel" className="menu-item"  onClick={onClick}>
                                Состав группы
                            </button>
                        </li>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Гастроли
                            </button>
                        </li>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Документы
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <div className={"pop-up-wrapper"}>
                        <div className={"pu-main-div"}>
                            <div className={"pu-title"}>
                                Добавить событие в гастроли
                                <img onClick={onClick} id={"MainTourPageMoreInfoNew"} src={require('../images/exit-sign.png')} alt="выход"/>
                            </div>
                            <InputField
                                id='about'
                                outText="Город"
                                className='about-wrapper'
                                innerText={"Москва"}
                            />
                            <InputField
                                id='about'
                                outText="Дата"
                                className='about-wrapper'
                                innerText={"11.05.2023"}
                            />
                            <button id={"MainTourPageMoreInfoNew"} className={"stretch add-button"} onClick={onClick}>
                                Сохранить
                            </button>
                        </div>
                    </div>
                    <div className={"chapter-title"}> Тур "Москва, Иркутск, Владивосток"</div>
                    <button id={"MainTourPageMoreInfoAdd"} className={"move-right add-button"} onClick={onClick}>
                        Добавить место
                    </button>
                    <div className={"schedule-table"}>
                        <div className={"schedule-table-row"}>
                            <div className="title event-group-name">
                                Дата
                            </div>
                            <div className="title event-name">
                                Место проведения
                            </div>
                            <div className="title event-time">
                                Программа
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                26 января
                            </div>
                            <div className="event-name">
                                Владивосток
                            </div>
                            <div className="event-time">
                                <a id={"MainTourPageMoreInfoPlan"} onClick={onClick}>Программа</a>
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                1 февраля
                            </div>
                            <div className="event-name">
                                Иркутск
                            </div>
                            <div className="event-time">
                                <a href="">Программа</a>
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                7 февраля
                            </div>
                            <div className="event-name">
                                Москва
                            </div>
                            <div className="event-time">
                                <a href="">Программа</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </body>
    );
}

export const MainTourPageMoreInfoNew = () => {
    const page = useContext(PageContext)

    const onClick = event => {
        page.set(event.target.id)
    }

    return(
        <body>
        <header>
            <div className="cur-time-widget">Сб, 7 января</div>
            <div className="profile-widget">
                <div className="info">
                    <div>
                        <span className="name">Карина Тарасова</span>
                    </div>
                    <div>
                        <span className="job-title">Менеджер</span>
                    </div>
                </div>
                <div className="mini-avatar">
                    <img src={require('../images/mini-avatar-example.png')} alt="ава"/>
                </div>
            </div>
        </header>
        <main>
            <div className="container">
                <div className="chapter-title">
                    Панель менеджера
                </div>
                <div className="nav-menu">
                    <ul>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Расписание группы
                            </button>
                        </li>
                        <li className="menu-item">
                            <button id="MainManagerPanel" className="menu-item"  onClick={onClick}>
                                Состав группы
                            </button>
                        </li>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Гастроли
                            </button>
                        </li>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Документы
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <div className={"chapter-title"}> Тур "Москва, Иркутск, Владивосток"</div>
                    <button id={"MainTourPageMoreInfoAdd"} className={"move-right add-button"} onClick={onClick}>
                        Добавить место
                    </button>
                    <div className={"schedule-table"}>
                        <div className={"schedule-table-row"}>
                            <div className="title event-group-name">
                                Дата
                            </div>
                            <div className="title event-name">
                                Место проведения
                            </div>
                            <div className="title event-time">
                                Программа
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                26 января
                            </div>
                            <div className="event-name">
                                Владивосток
                            </div>
                            <div className="event-time">
                                <a id={"MainTourPageMoreInfoPlan"} onClick={onClick}>Программа</a>
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                1 февраля
                            </div>
                            <div className="event-name">
                                Иркутск
                            </div>
                            <div className="event-time">
                                <a href="">Программа</a>
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                3 февраля
                            </div>
                            <div className="event-name">
                                Санкт-Петербург
                            </div>
                            <div className="event-time">
                                <a href="">Программа</a>
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                7 февраля
                            </div>
                            <div className="event-name">
                                Москва
                            </div>
                            <div className="event-time">
                                <a href="">Программа</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </body>
    );
}

export const MainTourPageAdd = () => {
    const page = useContext(PageContext)

    const onClick = event => {
        page.set(event.target.id)
    }

    return(
        <body>
        <header>
            <div className="cur-time-widget">Сб, 7 января</div>
            <div className="profile-widget">
                <div className="info">
                    <div>
                        <span className="name">Карина Тарасова</span>
                    </div>
                    <div>
                        <span className="job-title">Менеджер</span>
                    </div>
                </div>
                <div className="mini-avatar">
                    <img src={require('../images/mini-avatar-example.png')} alt="ава"/>
                </div>
            </div>
        </header>
        <main>
            <div className="container">
                <div className="chapter-title">
                    Панель менеджера
                </div>
                <div className="nav-menu">
                    <ul>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Расписание группы
                            </button>
                        </li>
                        <li className="menu-item">
                            <button id="MainManagerPanel" className="menu-item"  onClick={onClick}>
                                Состав группы
                            </button>
                        </li>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Гастроли
                            </button>
                        </li>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Документы
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <div className={"pop-up-wrapper"}>
                        <div className={"pu-main-div"}>
                            <div className={"pu-title"}>
                                Добавление гастролей
                                <img src={require('../images/exit-sign.png')} alt="выход"/>
                            </div>
                            <InputField
                                id='about'
                                outText="Группа"
                                className='about-wrapper'
                                innerText={"Название группы"}
                            />
                            <InputField
                                id='about'
                                outText="Название тура"
                                className='about-wrapper'
                                innerText={"Название тура"}
                            />
                            <InputField
                                id='about'
                                outText="Дата окончания"
                                className='about-wrapper'
                                innerText={"11.05.2023"}
                            />
                            <InputField
                                id='about'
                                outText="Дата окончания"
                                className='about-wrapper'
                                innerText={"11.05.2023"}
                            />
                            <button id={"MainTourPageNew"} className={"stretch add-button"} onClick={onClick}>
                                Сохранить
                            </button>
                        </div>
                    </div>
                    <button id={"GroupScheduleAdd"} className={"move-right add-button"} onClick={onClick}>
                        Добавить гастроли
                    </button>
                    <div className={"schedule-table"}>
                        <div className={"schedule-table-row"}>
                            <div className="title event-group-name">
                                Группа
                            </div>
                            <div className="title event-name">
                                Название тура
                            </div>
                            <div className="title event-time">
                                Время
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                t.A.T.u
                            </div>
                            <div className="event-name">
                                200 по встречной, Москва, СПб
                            </div>
                            <div className="event-time">
                                25 января - 31 января
                            </div>
                        </div>
                        <div className={"schedule-table-row"} onClick={onClick} id={"MainTourPageMoreInfo"}>
                            <div className="event-group-name">
                                Мумий Тролль
                            </div>
                            <div className="event-name">
                                Москва, Иркутск, Владивосток
                            </div>
                            <div className="event-time">
                                26 января - 7 февраля
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </body>
    );
}

export const MainTourPageNew = () => {
    const page = useContext(PageContext)

    const onClick = event => {
        page.set(event.target.id)
    }

    return(
        <body>
        <header>
            <div className="cur-time-widget">Сб, 7 января</div>
            <div className="profile-widget">
                <div className="info">
                    <div>
                        <span className="name">Карина Тарасова</span>
                    </div>
                    <div>
                        <span className="job-title">Менеджер</span>
                    </div>
                </div>
                <div className="mini-avatar">
                    <img src={require('../images/mini-avatar-example.png')} alt="ава"/>
                </div>
            </div>
        </header>
        <main>
            <div className="container">
                <div className="chapter-title">
                    Панель менеджера
                </div>
                <div className="nav-menu">
                    <ul>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Расписание группы
                            </button>
                        </li>
                        <li className="menu-item">
                            <button id="MainManagerPanel" className="menu-item"  onClick={onClick}>
                                Состав группы
                            </button>
                        </li>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Гастроли
                            </button>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/documents"  className="menu-item"  onClick={onClick}>
                                Документы
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <button id={"MainTourPageAdd"} className={"move-right add-button"} onClick={onClick}>
                        Добавить гастроли
                    </button>
                    <div className={"schedule-table"}>
                        <div className={"schedule-table-row"}>
                            <div className="title event-group-name">
                                Группа
                            </div>
                            <div className="title event-name">
                                Название тура
                            </div>
                            <div className="title event-time">
                                Время
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                t.A.T.u
                            </div>
                            <div className="event-name">
                                200 по встречной, Москва, СПб
                            </div>
                            <div className="event-time">
                                25 января - 31 января
                            </div>
                        </div>
                        <div className={"schedule-table-row"} onClick={onClick} id={"MainTourPageMoreInfo"}>
                            <div className="event-group-name">
                                Мумий Тролль
                            </div>
                            <div className="event-name">
                                Москва, Иркутск, Владивосток
                            </div>
                            <div className="event-time">
                                26 января - 7 февраля
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                Аффинаж
                            </div>
                            <div className="event-name">
                                Москва, СПБ
                            </div>
                            <div className="event-time">
                                1 февраля - 10 февраля
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </body>
    );
}