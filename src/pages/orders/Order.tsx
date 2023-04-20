import React, { useState, useEffect } from 'react'
import axios from 'axios'
import css from './css.module.scss'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { ordersdetalies } from '../../features/cards/orderdetales';
import Spiner from '../../components/Spiner/Spiner'

const Order = () => {
    let Dispatch = useAppDispatch()
    const { loading4, users4, error4 } = useAppSelector((s) => s.orders);
    const navigate = useNavigate();
    console.log(users4);

    useEffect(() => {
        window.scrollTo(0, 0)
        if (users4[0] === undefined) {
            Dispatch(ordersdetalies())
        }
    }, []);

    return (
        <>
            <br />
            <br />
            <br />
            <Outlet />
            {loading4 === true && <Spiner />}
            {users4 === '' ? <Spiner /> :
                <div className={css.Div}>

                    <MDBTable className={css.table}>
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>orderId</th>
                                <th scope='col'>fullname</th>
                                <th scope='col'>email</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {users4.map((number: any, i: number) =>
                                <tr onClick={() => {
                                    navigate(`detales/${number._id}`)
                                }} key={i}>
                                    <th scope='row'>{i + 1}</th>
                                    <td> {number._id}</td>
                                    <td> {number.fullname}</td>
                                    <td> {number.Email}</td>
                                </tr>
                            )}
                        </MDBTableBody>
                    </MDBTable>
                </div>
            }
        </>
    )
}

export default Order