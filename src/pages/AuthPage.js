import React, {useContext, useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
// import '../css/AuthAndRegPage.css'
import {InputField} from "../components/InputField";
import {PageContext} from "../context/PageContext";

const SUCCESS_STATUS=200

export function AuthPage() {
    const { loading, request, error, clearError } = useHttp()
    const auth= useContext(AuthContext)
    const [form, setForm] = useState({
        username: '', password: ''
    })

    const page = useContext(PageContext)
    const onClick = event => {
        page.set(event.target.id)
    }

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const loginHandler = async () => {
        try {
            const data = await request('/auth/login', 'POST', {...form})
            if(data.status !== SUCCESS_STATUS){
                const message = document.getElementById('error_message')
                message.className="shown-block" // отображать
            }
            else {
                await auth.login(data["id_user"], data["access_token"])
            }
        } catch (e) {}
    }

    return (
        <div className="background-wrapper">
            <div className="wrap0">
                <div className={"pop-up-wrapper"}>
                    <div className={"pu-main-div"}>
                        <div className="title-wrap">
                            <h1 className="title">MusicManager</h1>
                        </div>

                        <div className="wrap1">
                            <div>
                                <div className="wrap1">

                                    <InputField
                                        id='username'
                                        outText="Введите свой никнейм"
                                        name="username"
                                    />

                                    <InputField
                                        id='password'
                                        outText="Пароль"
                                        name="password"
                                        typeName="password"
                                    />

                                </div>


                            </div>
                            <div className="card-action">
                                <button
                                    className="btn"
                                    disabled={loading}
                                    onClick={onClick}
                                    id={"MainMarketPanel"}
                                >
                                    <NavLink to="/"  onClick={onClick}
                                             id={"MainMarketPanel"} className="menu-item">
                                        Войти
                                    </NavLink>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
