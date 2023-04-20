import React, { useState, useEffect } from 'react';
import css from './css.module.scss'
import { Outlet } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

function Bootstrapform() {
    let Navigate = useNavigate()
    const [form, setform] = useState('כניסה');
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    return (
        <>
            <div className={css.div}>
                <button onClick={() => { setform('כניסה'); Navigate('/connection/login') }} className={form === 'כניסה' ? `${css.btnActiv}` : `${css.btn2}`}>כניסה</button>
                <button onClick={() => { setform('הרשמה'); Navigate('/connection/signup') }} className={form === 'הרשמה' ? `${css.btnActiv}` : `${css.btn2}`}>הרשמה</button>
            </div>


            <Outlet />
        </>
    )
}

export default Bootstrapform

