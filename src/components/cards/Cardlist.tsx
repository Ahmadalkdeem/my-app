import React from 'react'
import MyCard from '../card/Card'
import css from './css.module.scss'
import { productss } from '../../features/counter/List'
import { Link, useNavigate, useParams } from "react-router-dom";

import phto1 from './istockphoto-1400086779-170667a.jpg'
function Cardlist() {
    const navigate = useNavigate();
    let { idcategry } = useParams()
    console.log(idcategry);


    return (
        <>
            <div className={css.Myheder}>
                <div className={css.myyheder}>
                    <h1 className={css.Myhh1}>עד 50% הנחה</h1>
                    <h6 className={css.mmypp}>נעלי נשים, כפכפים, סנדלים ואופנה לאישה במבצעים מיוחדים לזמן מוגבל.</h6>
                </div>
            </div>
            <h2 className={css.Myhh2}>המוצרים החמים</h2>
            <div className={`${css.MyDiv}`}>
                {productss.map((number, i) =>
                    <MyCard key={i}
                        {...number} />
                )}
            </div>
            <h2 className={css.Myhh2}>המוצרים החמים</h2>
            <div className={`${css.MyDiv}`}>
                {productss.map((number, i) =>
                    <MyCard key={i}
                        {...number} />
                )}
            </div>
            <div className={css.loo}>
                <div onClick={() => {
                    navigate(`/pants`);
                }} className={`${css.divlink} ${css.fdiv}`}>
                    <h1>מכנסיים</h1>
                </div>
                <div onClick={() => {
                    navigate(`/Shirts`);
                }} className={`${css.divlink} ${css.sediv}`}>
                    <h1>חולצות</h1>

                </div>
                <div onClick={() => {
                    navigate(`/shoes`);
                }} className={`${css.divlink} ${css.thdiv}`}>
                    <h1>נעליים</h1>

                </div>
            </div>
        </>
    )
}

export default Cardlist