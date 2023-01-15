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
                        <a onClick={onClick} id={"MembersOfOneGroup"}>t.A.T.u</a>
                    </div>
                    <div className="element group-name">
                        <a href="">Аффинаж</a>
                    </div>
                    <div className="element group-name">
                        <a href="">Мумий Тролль</a>
                    </div>
                    <div className="element group-name">
                        <a href="">ABBA</a>
                    </div>
                </div>
            </div>
        </main>
        </body>
    );
}

export const MembersOfOneGroup = () => {
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
                    <button id={"MembersOfOneGroupAdd"} className={"move-right add-button"} onClick={onClick}>
                        Добавить участника
                    </button>
                    <div className="element group-name">
                        <a href="">Елена Катина</a>
                    </div>
                    <div className="element group-name">
                        <a href="">Юлия Волкова</a>
                    </div>
                </div>
            </div>
        </main>
        </body>
    );
}

export const MembersOfOneGroupAdd = () => {
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
                                Информация об участнике
                                <img src={require('../images/exit-sign.png')} alt="выход"/>
                            </div>
                            <InputField
                                id='about'
                                outText="Сценическое имя"
                                className='about-wrapper'
                                innerText={"Лена Катина"}
                            />
                            <InputField
                                id='about'
                                outText="ФИО"
                                className='about-wrapper'
                                innerText={"Елена Сергеевна Катина"}
                            />
                            <InputField
                                id='about'
                                outText="Паспорт"
                                className='about-wrapper'
                                innerText={"2839 554330"}
                            />
                            <InputField
                                id='about'
                                outText="Роль в группе"
                                className='about-wrapper'
                                innerText={"Вокал"}
                            />
                            <InputField
                                id='about'
                                outText="Заключение контракта"
                                className='about-wrapper'
                                innerText={"11.05.2023"}
                            />
                            <InputField
                                id='about'
                                outText="Истечение контракта"
                                className='about-wrapper'
                                innerText={"11.05.2023"}
                            />
                            <button id={"MembersOfOneGroupNew"} className={"stretch add-button"} onClick={onClick}>
                                Сохранить
                            </button>
                        </div>
                    </div>
                    <button id={"GroupScheduleAdd"} className={"move-right add-button"} onClick={onClick}>
                        Добавить участника
                    </button>
                    <div className="element group-name">
                        <a href="">Елена Катина</a>
                    </div>
                    <div className="element group-name">
                        <a href="">Юлия Волкова</a>
                    </div>
                </div>
            </div>
        </main>
        </body>
    );
}


export const MembersOfOneGroupNew = () => {
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
                            <NavLink to="/tour"  className="menu-item"  onClick={onClick}>
                                Гастроли
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <button className="menu-item"  onClick={onClick}>
                                Документы
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <button id={"MembersOfOneGroupAdd"} className={"move-right add-button"} onClick={onClick}>
                        Добавить участника
                    </button>
                    <div className="element group-name">
                        <a href="">Елена Катина</a>
                    </div>
                    <div className="element group-name">
                        <a href="">Юлия Волкова</a>
                    </div>
                    <div className="element group-name">
                        <a href="">Филипп Киркоров</a>
                    </div>
                </div>
            </div>
        </main>
        </body>
    );
}
