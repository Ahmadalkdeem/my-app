import React, { useState, useEffect } from 'react'
import axios from 'axios'
import css from './css.module.scss'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Spiner from '../../components/Spiner/Spiner'
import { addItem2 } from '../../features/cards/orderdetales';
const Order = () => {
    let Dispatch = useAppDispatch()
    const { loading4, users4, error4 } = useAppSelector((s) => s.orders);
    const { accessToken } = useAppSelector((s) => s.user);
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
        axios.get(`http://localhost:3001/carts/getorders/${accessToken}`, {
        }).then((response) => {
            Dispatch(addItem2(response.data))
        }).catch((err: any) => {
            console.log(err);
            console.log(err.response.data.error);
        })
    }, []);

    return (
        <>
            <Outlet />
            {users4.length === 0 ? <Spiner /> :
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