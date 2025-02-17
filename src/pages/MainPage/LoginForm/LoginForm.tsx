import * as React from 'react';
import './loginform.css'
import {useState} from "react";
import {CSSTransition} from "react-transition-group";
import {useDispatch, useSelector} from "react-redux";
import {loginUser, registerUser} from "../../../stores/actions/userAction";
import Button from "../../../common/Button/Button";



const LoginFrom = () => {

    const [showForm, setShowForm] = useState(false)

    const dispatch = useDispatch()


    const handleFormSubmit = (event: any) => {
        event.preventDefault()
        dispatch(registerUser('user125', 'werdsf'))
    }

    const handleFormLoginSubmit = (event: any) => {
        event.preventDefault()
        dispatch(loginUser('user125', 'werdsf'))
    }


    const user = useSelector(state => state)

    return (
        <div className='register'>
            <h3>REGISTER FOR PERSONAL TRAININGS</h3>
            <div className='form-container'>
                <form action="" className='form' onSubmit={handleFormLoginSubmit}>
                    <input type="tel" placeholder='Email'/>
                    <input className='phone-input' type="text" placeholder='Password'/>
                    <Button title='SUBMIT' buttonStyles='main-form-btn' />
                    <Button title='No account?' buttonStyles='main-form-btn' onClick={() => setShowForm(!showForm)}/>
                        <CSSTransition in={showForm} classNames='alert' timeout={300} unmountOnExit>
                            <div className='register-form'>
                                <div className='register-form-column'>
                                    <button className='exit-form-btn' onClick={() => setShowForm(false)}>Назад</button>
                                    <p className='register-form-column-row'>Регистрация</p>
                                    <form className='register-form-popup' onSubmit={handleFormSubmit}>
                                        <input type="email" placeholder='Email'/>
                                        <input type="password" placeholder='Password'/>
                                        <input type="password" placeholder='Confirm password'/>
                                        <button className='register-btn'>Зарегистрироваться</button>
                                    </form>
                                    <span>РЕГИСТРИРУЙТЕСЬ И ЗАНИМАЙТЕСЬ ПЕРСОНАЛЬНО</span>
                                </div>
                            </div>
                        </CSSTransition>
                </form>
            </div>
        </div>
    );
}

export default LoginFrom;