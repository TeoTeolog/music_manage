import React, {useContext} from 'react'
import {InputField} from '../components/InputField'
import {PageContext} from '../context/PageContext'
import {NavLink} from "react-router-dom";

export const MainDocumentPanel = () => {
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
                        <span className="name">
                            <NavLink to="/auth"  className="menu-item"  onClick={onClick}>
                                Карина Тарасова
                            </NavLink>
                        </span>
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
                    Раздел в разработке!
                </div>
            </div>
        </main>
        </body>
    );
}
