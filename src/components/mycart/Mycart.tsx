import React, { useState } from 'react'
import css from './css.module.scss'
import { addCard, deleteCard, editCard } from '../../features/cards/mycart';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import photo from '../cardlist2/TheWardrobe-Store-329-BradleyTaylor-768x576.jpg'
const Mycart = () => {
    let { cart } = useAppSelector((s) => s.mycart)
    let x = 0
    cart.map((e: any) => {
        x = x + Number(e.price)

    })
    let Dispatch = useAppDispatch()
    return (
        <div className={css.myfdiv}>Mycart
            <br />
            {cart.map((item: any, i: number) =>
                <div key={i} className={css.cart_item}>
                    <img src={item.src[0]} alt="Product Name" className={css.cart_item__image} />
                    <div className={css.cart_item__details}>
                        <h3 className={css.cart_item__title}>{item.name}</h3>
                        <div className={css.cart_item__price}>מחיר:{item.price}</div>
                        <div className={css.cart_item__quantity}>כמות:{item.hselect}</div>
                    </div>
                    <button onClick={() => {
                        Dispatch(deleteCard(item._id))

                    }} className={css.cart_item__remove_btn}>Remove</button>
                </div>)}
            <button>{x}</button>
        </div>
    )
}

export default Mycart