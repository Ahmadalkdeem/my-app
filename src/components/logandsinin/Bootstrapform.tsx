import { log } from 'console';
import React, { useState } from 'react';
import css from './css.module.scss'
import axios from 'axios';
let valMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let valpassword = /^[a-zA-Z]\w{7,14}$/
let valusername = /^[א-ת][א-תא-ת]{2,10}(?: [א-ת][א-תא-ת]*){0,10}$/
// let valfullname = /^[א-תא-ת]{2,10}( {1,2}[א-תא-ת]{2,10}){1,}$/

function Bootstrapform() {
    const [form, setform] = useState('כניסה');
    const [username, setusername] = useState('');
    const [errusername, seterrusername] = useState('');
    const [password, setpassword] = useState('');
    const [errpassword, seterrpassword] = useState('');

    const [username2, setusername2] = useState('');
    const [errusername2, seterrusername2] = useState('');
    const [password2, setpassword2] = useState('');
    const [errpassword2, seterrpassword2] = useState('');
    const [email, setemail] = useState('');
    const [erremail, seterremail] = useState('');

    const login = () => {
        if (password === '') { seterrpassword('תקליד את הסיסמה') }
        if (username === '') { seterrusername('תקליד את השם משתמש') }
        if (valpassword.test(password) && valusername.test(username)) {
        }
        if (!valpassword.test(password) || !valMail.test(username)) {
            if (password !== '' && username !== '') {
                seterrpassword('השם משתמש או הסיסמה שגוים')
            }
        }
        else {
            axios.post('http://localhost:3001/api/auth/signin', { email: username, password: password2 }).then((response) => {
                console.log(response.data);
                // console.log({ username: username2, email: email, password: password2 });
            }).catch(e => {
                console.log(e);

            })


        }
    }
    const sinup = () => {
        if (!valpassword.test(password2) && password2 !== '') { seterrpassword2('הסיסמה צרכיה להיוות 8-14 שמיכלה מספרים ואותיות באגלית') } else if (valpassword.test(password2)) { seterrpassword2('') }
        if (password2 === '') { seterrpassword2('תקליד  הסיסמה') }


        if (!valusername.test(username2) && username2 !== '') { seterrusername2('השם משתמש צריך להיות בעברית ולפחות שני תווים') } else if (valusername.test(username2)) { seterrusername2('') }
        if (username2 === '') { seterrusername2('תקליד  השם משתמש') }


        if (!valMail.test(email) && email !== '') { seterremail("המייל לא תקין") } else if (valMail.test(email)) { seterremail('') }
        if (email === '') { seterremail('תקליד   מייל') }

        if (valpassword.test(password2) && valusername.test(username2) && valMail.test(email)) {
            console.log('aa');
            axios.post('http://localhost:3001/api/auth/signup', { username: username2, email: email, password: password2 }).then((response) => {
                console.log(response.data);
                console.log({ username: username2, email: email, password: password2 });
            }).catch(e => {
                console.log(e);

            })
        } else {
            console.log('bb');

        }
    }

    return (
        <>
            <div className={css.mydiv}>
                <button onClick={() => { setform('כניסה') }} className={form === 'כניסה' ? `${css.MybtnActiv}` : `${css.Mybtn2}`}>כניסה</button>
                <button onClick={() => { setform('הרשמה') }} className={form === 'הרשמה' ? `${css.MybtnActiv}` : `${css.Mybtn2}`}>הרשמה</button>
            </div>
            {form === 'כניסה' ? <><h5 className={css.Myh5}>כניסה :</h5>
                <form className='d-flex flex-column justify-content-center align-items-center p-2' action="">
                    <label className={css.Mylable} htmlFor="username1">שם משתמש:</label>
                    <input value={username} onChange={(e) => {
                        if (valusername.test(e.target.value)) {
                            console.log(true);

                        } else {
                            console.log(false);

                        }
                        setusername(e.target.value)
                    }} className={css.Myinput} type="text" id='username1' />
                    <p className={css.MyP}>{errusername === '' ? '' : errusername}</p>
                    <label className={css.Mylable} htmlFor="pasword1">סיסמה:</label>
                    <input value={password} onChange={(e) => {
                        setpassword(e.target.value)
                    }} className={css.Myinput} type="text" id='pasword1' />
                    <p className={css.MyP}>{errpassword === '' ? '' : errpassword}</p>
                    <input className={css.Mybtn} type="button" value="כניסה" onClick={login} />

                </form></> : <><h5 className={css.Myh5}>הרשמה :</h5>
                <form className='d-flex flex-column justify-content-center align-items-center p-2' action="">
                    <label className={css.Mylable} htmlFor="username">שם משתמש:</label>
                    <input onChange={(e) => {
                        setusername2(e.target.value)
                    }} value={username2} className={css.Myinput} type="text" id='username' />
                    <p className={css.MyP}>{errusername2 === '' ? '' : errusername2}</p>
                    <label className={css.Mylable} htmlFor="email">מייל:</label>
                    <input value={email} onChange={(e) => {
                        setemail(e.target.value)
                    }} className={css.Myinput} type="text" id='email' />
                    <p className={css.MyP}>{erremail === '' ? '' : erremail}</p>

                    <label className={css.Mylable} htmlFor="pasword">סיסמה:</label>
                    <input value={password2} onChange={(e) => {
                        setpassword2(e.target.value)
                    }} className={css.Myinput} type="password" id='pasword' />
                    <p className={css.MyP}>{errpassword2 === '' ? '' : errpassword2}</p>

                    <input onClick={sinup} className={css.Mybtn} type="button" value="הרשמה" />
                </form></>}


        </>
    )
}

export default Bootstrapform

