import React, { useState } from 'react'
import axios from 'axios'
import css from './css.module.scss'
import { valMail, valpassword, valusername } from '../../validators/validators';

const Signup = () => {
    const [username, setusername] = useState('');
    const [errusername, seterrusername] = useState('');
    const [password, setpassword] = useState('');
    const [errpassword, seterrpassword] = useState('');
    const [email, setemail] = useState('');
    const [erremail, seterremail] = useState('');

    const sinup = () => {
        if (!valpassword.test(password) && password !== '') { seterrpassword('הסיסמה צרכיה להיוות 8-14 שמיכלה מספרים ואותיות באגלית') } else if (valpassword.test(password)) { seterrpassword('') }
        if (password === '') { seterrpassword('תקליד  הסיסמה') }


        if (!valusername.test(username) && username !== '') { seterrusername('השם משתמש צריך להיות בעברית ולפחות שני תווים') } else if (valusername.test(username)) { seterrusername('') }
        if (username === '') { seterrusername('תקליד  השם משתמש') }


        if (!valMail.test(email) && email !== '') { seterremail("המייל לא תקין") } else if (valMail.test(email)) { seterremail('') }
        if (email === '') { seterremail('תקליד   מייל') }

        if (valpassword.test(password) && valusername.test(username) && valMail.test(email)) {
            console.log('aa');
            axios.post('http://localhost:3001/api/auth/signup', { username: username, email: email, password: password }).then((response) => {
                console.log(response.data);
                console.log({ username: username, email: email, password: password });
            }).catch(e => {
                console.log(e);

            })
        } else {
            console.log('bb');

        }
    }


    return (
        <><h5 className={css.h5}>הרשמה :</h5>
            <form className={`d-flex flex-column justify-content-center align-items-center p-2 ${css.form}`} action="">
                <label className={css.lable} htmlFor="username">שם משתמש:</label>
                <input onChange={(e) => {
                    setusername(e.target.value)
                }} value={username} className={css.input} type="text" id='username' />
                <p className={css.P}>{errusername === '' ? '' : errusername}</p>
                <label className={css.lable} htmlFor="email">מייל:</label>
                <input value={email} onChange={(e) => {
                    setemail(e.target.value)
                }} className={css.input} type="text" id='email' />
                <p className={css.P}>{erremail === '' ? '' : erremail}</p>

                <label className={css.lable} htmlFor="pasword">סיסמה:</label>
                <input value={password} onChange={(e) => {
                    setpassword(e.target.value)
                }} className={css.input} type="password" id='pasword' />
                <p className={css.P}>{errpassword === '' ? '' : errpassword}</p>

                <input onClick={sinup} className={css.btn} type="button" value="הרשמה" />
            </form></>
    )
}

export default Signup