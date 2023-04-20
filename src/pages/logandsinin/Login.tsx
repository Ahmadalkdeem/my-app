import React, { useState, useEffect } from 'react'
import css from './css.module.scss'
import axios from 'axios';
import { valMail, valpassword } from '../../validators/validators';
import { updatedetalise } from '../../features/user/user';
import { useAppDispatch } from '../../app/hooks';
const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    let Dispatch = useAppDispatch()
    const [username, setusername] = useState('');
    const [errusername, seterrusername] = useState('');
    const [password, setpassword] = useState('');
    const [errpassword, seterrpassword] = useState('');
    const login = () => {
        if (!valpassword.test(password)) {
            seterrpassword('הסיסמה לא תקינה')
        } else {
            seterrpassword('')
        }
        if (!valMail.test(username)) {
            seterrusername('המייל לא תקין')

        } else {

            seterrusername('')
        }
        if (valpassword.test(password) && valMail.test(username)) {
            axios.post('http://localhost:3001/api/auth/signin', { email: username, password: password }).then((response) => {
                console.log(response.data);

                Dispatch(updatedetalise(response.data))
                seterrusername('')
                setusername('')
                seterrpassword('')
                setpassword('')
            }).catch(e => {
                console.log(e);

                seterrpassword('המייל או הסיסמה שגוים')
            })
        }


    }
    return (
        <><h5 className={css.h5}>כניסה :</h5>
            <form className={`d-flex flex-column justify-content-center align-items-center p-2 ${css.form}`} action="">
                <label className={css.lable} htmlFor="username1">שם משתמש:</label>
                <input value={username} onChange={(e) => {
                    setusername(e.target.value)
                }} className={css.input} type="text" id='username1' />
                <p className={css.P}>{errusername === '' ? '' : errusername}</p>
                <label className={css.lable} htmlFor="pasword1">סיסמה:</label>
                <input value={password} onChange={(e) => {
                    setpassword(e.target.value)
                }} className={css.input} type="password" id='pasword1' />
                <p className={css.P}>{errpassword === '' ? '' : errpassword}</p>
                <input className={css.btn} type="button" value="כניסה" onClick={login} />

            </form></>
    )
}

export default Login