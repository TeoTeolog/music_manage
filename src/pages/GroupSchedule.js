import React, {useContext} from 'react'
import {InputField} from '../components/InputField'
import {PageContext} from '../context/PageContext'
import {NavLink} from "react-router-dom";

export const MainManagerPanel = () => {
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
                            <button id="GroupSchedule" className="menu-item"  onClick={onClick}>
                                Расписание группы
                            </button>
                        </li>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
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
                    <div className="element group-name">
                        <a href="">t.A.T.u</a>
                    </div>
                    <div className="element group-name">
                        <a href="">t.A.T.u</a>
                    </div>
                    <div className="element group-name">
                        <a href="">t.A.T.u</a>
                    </div>
                    <div className="element group-name">
                        <a href="">t.A.T.u</a>
                    </div>
                    <div className="element group-name">
                        <a href="">t.A.T.u</a>
                    </div>
                    <div className="element group-name">
                        <a href="">t.A.T.u</a>
                    </div>
                    <div className="element group-name">
                        <a href="">t.A.T.u</a>
                    </div>
                    <div className="element group-name">
                        <a href="">t.A.T.u</a>
                    </div>

                </div>
            </div>
        </main>
        </body>
    );
}

export const GroupSchedule = () => {
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
                    <button id={"GroupScheduleAdd"} className={"move-right add-button"} onClick={onClick}>
                        Добавить событие
                    </button>
                    <div className={"schedule-table"}>
                        <div className={"schedule-table-row"}>
                            <div className="title event-group-name">
                                Группа
                            </div>
                            <div className="title event-name">
                                Название
                            </div>
                            <div className="title event-time">
                                Время
                            </div>
                            <div className="title event-sponsor">
                                Спонсор
                            </div>
                            <div className="title event-place">
                                Место проведения
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                t.A.T.u
                            </div>
                            <div className="event-name">
                                Реклама продукта
                            </div>
                            <div className="event-time">
                                Пн, 2 января
                            </div>
                            <div className="event-sponsor">
                                ООО "Product"
                            </div>
                            <div className="event-place">
                                Москва, ул. Охотный ряд,  д.30
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
        </body>
    );
}

export const GroupScheduleAdd = () => {
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
                                Редактирование события
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
                                outText="Название"
                                className='about-wrapper'
                                innerText={"Репетиция трека"}
                            />
                            <InputField
                                id='about'
                                outText="Место проведения"
                                className='about-wrapper'
                                innerText={"Москва, ул. Большая Дмитровка, д.56"}
                            />
                            <InputField
                                id='about'
                                outText="Время проведения"
                                className='about-wrapper'
                                innerText={"Пн, 1 января"}
                            />
                            <InputField
                                id='about'
                                outText="Спонсор"
                                className='about-wrapper'
                                innerText={"ООО \"Спонсор\""}
                            />
                            <button id={"GroupScheduleNew"} className={"stretch add-button"} onClick={onClick}>
                                Сохранить
                            </button>
                        </div>
                    </div>
                    <button id={"Group-Schedule-add"} className={"move-right add-button"} onClick={onClick}>
                        Добавить событие
                    </button>
                    <div className={"schedule-table"}>
                        <div className={"schedule-table-row"}>
                            <div className="title event-group-name">
                                Группа
                            </div>
                            <div className="title event-name">
                                Название
                            </div>
                            <div className="title event-time">
                                Время
                            </div>
                            <div className="title event-sponsor">
                                Спонсор
                            </div>
                            <div className="title event-place">
                                Место проведения
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                t.A.T.u
                            </div>
                            <div className="event-name">
                                Реклама продукта
                            </div>
                            <div className="event-time">
                                Пн, 2 января
                            </div>
                            <div className="event-sponsor">
                                ООО "Product"
                            </div>
                            <div className="event-place">
                                Москва, ул. Охотный ряд,  д.30
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                t.A.T.u
                            </div>
                            <div className="event-name">
                                Встреча с продюссерами
                            </div>
                            <div className="event-time">
                                Вт, 3 января
                            </div>
                            <div className="event-sponsor">
                                ООО "Product"
                            </div>
                            <div className="event-place">
                                Москва, ул. Большая Дмитровка,  д.56
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </body>
    );
}

export const GroupScheduleNew = () => {
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
                            <NavLink to="/members"  className="menu-item"  onClick={onClick}>
                                Состав группы
                            </NavLink>
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
                    <button id={"GroupScheduleAdd"} className={"move-right add-button"} onClick={onClick}>
                        Добавить событие
                    </button>
                    <div className={"schedule-table"}>
                        <div className={"schedule-table-row"}>
                            <div className="title event-group-name">
                                Группа
                            </div>
                            <div className="title event-name">
                                Название
                            </div>
                            <div className="title event-time">
                                Время
                            </div>
                            <div className="title event-sponsor">
                                Спонсор
                            </div>
                            <div className="title event-place">
                                Место проведения
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                t.A.T.u
                            </div>
                            <div className="event-name">
                                Реклама продукта
                            </div>
                            <div className="event-time">
                                Пн, 2 января
                            </div>
                            <div className="event-sponsor">
                                ООО "Product"
                            </div>
                            <div className="event-place">
                                Москва, ул. Охотный ряд,  д.30
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                t.A.T.u
                            </div>
                            <div className="event-name">
                                Встреча с продюссерами
                            </div>
                            <div className="event-time">
                                Вт, 3 января
                            </div>
                            <div className="event-sponsor">
                                ООО "Product"
                            </div>
                            <div className="event-place">
                                Москва, ул. Большая Дмитровка,  д.56
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                Аффинаж
                            </div>
                            <div className="event-name">
                                Репетиция трека
                            </div>
                            <div className="event-time">
                                Ср, 4 января
                            </div>
                            <div className="event-sponsor">
                                testtest
                            </div>
                            <div className="event-place">
                                test
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </body>
    );
}

export const MainMarketPanel = () => {
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
                        <span className="name">Анна Павлова</span>
                    </div>
                    <div>
                        <span className="job-title">Маркетолог</span>
                    </div>
                </div>
                <div className="mini-avatar">
                    <img src={require('../images/mini-avatar-marketing-example.png')} alt="ава"/>
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
                            <button id="GroupScheduleMarket" className="menu-item"  onClick={onClick}>
                                Расписание группы
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
                    <div className="element group-name">
                        <a href="">t.A.T.u</a>
                    </div>
                    <div className="element group-name">
                        <a href="">t.A.T.u</a>
                    </div>
                    <div className="element group-name">
                        <a href="">t.A.T.u</a>
                    </div>
                    <div className="element group-name">
                        <a href="">t.A.T.u</a>
                    </div>
                    <div className="element group-name">
                        <a href="">t.A.T.u</a>
                    </div>
                    <div className="element group-name">
                        <a href="">t.A.T.u</a>
                    </div>
                    <div className="element group-name">
                        <a href="">t.A.T.u</a>
                    </div>
                    <div className="element group-name">
                        <a href="">t.A.T.u</a>
                    </div>

                </div>
            </div>
        </main>
        </body>
    );
}

export const GroupScheduleMarket = () => {
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
                        <span className="name">Анна Павлова</span>
                    </div>
                    <div>
                        <span className="job-title">Маркетолог</span>
                    </div>
                </div>
                <div className="mini-avatar">
                    <img src={require('../images/mini-avatar-marketing-example.png')} alt="ава"/>
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
                    <button id={"GroupScheduleAdd"} className={"move-right add-button"} onClick={onClick}>
                        Добавить событие
                    </button>
                    <div className={"schedule-table"}>
                        <div className={"schedule-table-row"}>
                            <div className="title event-group-name">
                                Группа
                            </div>
                            <div className="title event-name">
                                Название
                            </div>
                            <div className="title event-time">
                                Время
                            </div>
                            <div className="title event-sponsor">
                                Спонсор
                            </div>
                            <div className="title event-place">
                                Место проведения
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                t.A.T.u
                            </div>
                            <div className="event-name">
                                Реклама продукта
                            </div>
                            <div className="event-time">
                                Пн, 2 января
                            </div>
                            <div className="event-sponsor">
                                ООО "Product"
                            </div>
                            <div className="event-place">
                                Москва, ул. Охотный ряд,  д.30
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div id="GroupScheduleMarketEdit" onClick={onClick} className="event-group-name">
                                t.A.T.u
                            </div>
                            <div className="event-name">
                                Встреча с продюссерами
                            </div>
                            <div className="event-time">
                                Вт, 3 января
                            </div>
                            <div className="event-sponsor">
                                ООО "Product"
                            </div>
                            <div className="event-place">
                                Москва, ул. Большая Дмитровка,  д.56
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                Аффинаж
                            </div>
                            <div className="event-name">
                                Репетиция трека
                            </div>
                            <div className="event-time">
                                Ср, 4 января
                            </div>
                            <div className="event-sponsor">
                                testtest
                            </div>
                            <div className="event-place">
                                test
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </body>
    );
}

export const GroupScheduleMarketEdit = () => {
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
                        <span className="name">Анна Павлова</span>
                    </div>
                    <div>
                        <span className="job-title">Маркетолог</span>
                    </div>
                </div>
                <div className="mini-avatar">
                    <img src={require('../images/mini-avatar-marketing-example.png')} alt="ава"/>
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
                                Редактирование события
                                <img src={require('../images/exit-sign.png')} alt="выход"/>
                            </div>
                            <InputField
                                id='about'
                                outText="Группа"
                                className='about-wrapper'
                                innerText={"t.A.T.u"}
                            />
                            <InputField
                                id='about'
                                outText="Название"
                                className='about-wrapper'
                                innerText={"Встреча с продюссерами"}
                            />
                            <InputField
                                id='about'
                                outText="Место проведения"
                                className='about-wrapper'
                                innerText={"Москва, ул. Большая Дмитровка,  д.56"}
                            />
                            <InputField
                                id='about'
                                outText="Время проведения"
                                className='about-wrapper'
                                innerText={"Вт, 3 января"}
                            />
                            <InputField
                                id='about'
                                outText="Спонсор"
                                className='about-wrapper'
                                innerText={"ООО \"Product\""}
                            />
                            <button id={"GroupScheduleMarket"} className={"stretch add-button"} onClick={onClick}>
                                Сохранить
                            </button>
                        </div>
                    </div>
                    <button id={"GroupScheduleAdd"} className={"move-right add-button"} onClick={onClick}>
                        Добавить событие
                    </button>
                    <div className={"schedule-table"}>
                        <div className={"schedule-table-row"}>
                            <div className="title event-group-name">
                                Группа
                            </div>
                            <div className="title event-name">
                                Название
                            </div>
                            <div className="title event-time">
                                Время
                            </div>
                            <div className="title event-sponsor">
                                Спонсор
                            </div>
                            <div className="title event-place">
                                Место проведения
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                t.A.T.u
                            </div>
                            <div className="event-name">
                                Реклама продукта
                            </div>
                            <div className="event-time">
                                Пн, 2 января
                            </div>
                            <div className="event-sponsor">
                                ООО "Product"
                            </div>
                            <div className="event-place">
                                Москва, ул. Охотный ряд,  д.30
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                t.A.T.u
                            </div>
                            <div className="event-name">
                                Встреча с продюссерами
                            </div>
                            <div className="event-time">
                                Вт, 3 января
                            </div>
                            <div className="event-sponsor">
                                ООО "Product"
                            </div>
                            <div className="event-place">
                                Москва, ул. Большая Дмитровка,  д.56
                            </div>
                        </div>
                        <div className={"schedule-table-row"}>
                            <div className="event-group-name">
                                Аффинаж
                            </div>
                            <div className="event-name">
                                Репетиция трека
                            </div>
                            <div className="event-time">
                                Ср, 4 января
                            </div>
                            <div className="event-sponsor">
                                OOO "Estrada"
                            </div>
                            <div className="event-place">
                                Москва, ул. Никольская
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </body>
    );
}