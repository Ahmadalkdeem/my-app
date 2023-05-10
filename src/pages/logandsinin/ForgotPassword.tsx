import React, { useState, useEffect } from 'react'
import css from './css.module.scss'
import axios from 'axios';
import { valMail } from '../../validators/validators';
import { updatedetalise } from '../../features/user/user';
import { useAppDispatch } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

const ForgotPassword = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    let Navigate = useNavigate()
    let Dispatch = useAppDispatch()
    const [username, setusername] = useState('');
    const [errusername, seterrusername] = useState('');

    const login = () => {
        if (!valMail.test(username)) {
            seterrusername('המייל לא תקין')

        } else {
            seterrusername('')
        }
        if (valMail.test(username)) {
            axios.post('http://localhost:3001/api/auth/ForgotPassword', { email: username }).then((response) => {
                console.log(response.data);

            }).catch(e => {
                console.log(e);
            })
        }


    }
    return (
        <>
            <Helmet>
                <title>התחברו לחשבון שלכם | חנות האופנה המובילה באינטרנט</title>
                <meta name="description" content=" התחברו לחשבון שלכם ותוכלו לצפות בהזמנות, לעקוב אחרי המשלוחים שלכם ולנהל את פרטי החשבון שלכם. כנסו עכשיו!" />
                <meta name="keywords" content="התחברות, חשבון, משלוחים, פרטים, חנות, אינטרנט, קניות" />
            </Helmet>
            <h5 className={css.h5}>כניסה :</h5>
            <form className={`d-flex flex-column justify-content-center align-items-center p-2 ${css.form}`} action="">
                <label className={css.lable} htmlFor="username1">המייל:</label>
                <input value={username} onChange={(e) => {
                    setusername(e.target.value)
                }} className={css.input} type="text" id='username1' />
                <p className={css.P}>{errusername === '' ? '' : errusername}</p>

                <input className={css.btn} type="button" value="כניסה" onClick={login} />
            </form></>
    )
}

export default ForgotPassword