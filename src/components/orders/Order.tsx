import React, { useState, useEffect } from 'react'
import axios from 'axios'
import css from './css.module.scss'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { ordersdetalies } from '../../features/cards/orderdetales';
const Order = () => {
    let Dispatch = useAppDispatch()
    const { loading4, users4, error4 } = useAppSelector((s) => s.orders);
    const navigate = useNavigate();
    console.log(users4);

    const getorders = () => {
        axios.get(`http://localhost:3001/carts/getorders`, {
        }).then((res: any) => {
            console.log(res.data)

        }).catch((err: any) => {

        })

        axios.get(`http://localhost:3001/carts/myorder`, {
        }).then((res: any) => {
            console.log(res.data)
        }).catch((err: any) => {

        })
    }

    useEffect(() => {
        if (users4[0] === undefined) {
            Dispatch(ordersdetalies())
            console.log('aa');
        }
    }, []);









    return (
        <>
            <br />
            <br />
            <br />
            <Outlet />

            {users4 === '' ? '' :
                <div className={css.Div}>

                    <MDBTable className={css.table}>
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>orderId</th>
                                <th scope='col'>userid</th>
                                <th scope='col'>username</th>
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
                                    <td> {number.userid[0]}</td>
                                    <td> {number.username[0]}</td>
                                    <td> {number.email[0]}</td>
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