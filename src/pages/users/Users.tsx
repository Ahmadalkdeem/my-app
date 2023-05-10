import React, { useState, useEffect } from 'react'
import axios from 'axios'
import css from './css.module.scss'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Spiner from '../../components/Spiner/Spiner'
import { addItem, delteItem } from '../../features/cards/users';
import { FiDelete } from "react-icons/fi";
import { GiUpgrade } from "react-icons/gi";
import Swal from 'sweetalert2';
const Users = () => {

    let Dispatch = useAppDispatch()
    const { loading, users, error } = useAppSelector((s) => s.users);
    const { accessToken } = useAppSelector((s) => s.user);
    const navigate = useNavigate();



    useEffect(() => {
        window.scrollTo(0, 0)
        axios.get(`http://localhost:3001/api/auth/users/${accessToken}`, {
        }).then((response) => {
            Dispatch(addItem(response.data))
            console.log(response.data);

        }).catch((err: any) => {
            console.log(err);
            console.log(err.response.data.error);
        })
    }, []);
    return (
        <>
            <Outlet />
            {users.length === 0 ? <Spiner /> :
                <div className={css.Div}>

                    <MDBTable className={css.table}>
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>update</th>
                                <th scope='col'>delate</th>
                                <th scope='col'>fullname</th>
                                <th scope='col'>email</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {users.map((user: any, i: number) =>
                                <tr key={i}>
                                    <th scope='row'>{i + 1}</th>
                                    <td className='d-flex'><FiDelete onClick={() => {
                                        Swal.fire({
                                            title: 'האם אתה רוצה למחוק את המשתמש?',
                                            showCancelButton: true,
                                            confirmButtonText: 'Save',
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                axios.delete(`http://localhost:3001/api/auth/users/${user._id}/${accessToken}`, {
                                                }).then((response) => {
                                                    console.log(response);

                                                    // if (response.data.Message === 'susces') {
                                                    //     //delteItem
                                                    //     Dispatch(delteItem(user._id))
                                                    //     Swal.fire({
                                                    //         icon: 'success',
                                                    //         title: 'המשתמש נמחק בהצלחה',
                                                    //         showConfirmButton: false,
                                                    //         timer: 1500
                                                    //     })
                                                    // }

                                                }).catch((err: any) => {
                                                    console.log(err);
                                                    console.log(err.response.data.error);
                                                })
                                            } else if (result.isDenied) {
                                                Swal.fire('המשתמש לא נמחק בהצלחה', '', 'info')
                                            }
                                        })
                                    }} className={css.icon} size={30} /> </td>
                                    <td><GiUpgrade color='green' className={css.icon} size={30}
                                        onClick={() => {
                                            Swal.fire({
                                                title: 'האם אתה רוצה להגדיר את המשתמש כמנהל?',
                                                showCancelButton: true,
                                                confirmButtonText: 'Save',
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    axios.put(`http://localhost:3001/api/auth/users/${user._id}/${accessToken}`, {
                                                    }).then((response) => {
                                                        if (response.data.Message === 'susces') {
                                                            Swal.fire({
                                                                icon: 'success',
                                                                title: 'המשתמש הוגדר כמנהל בהצלחה',
                                                                showConfirmButton: false,
                                                                timer: 1500
                                                            })
                                                        }

                                                    }).catch((err: any) => {
                                                        console.log(err);
                                                        console.log(err.response.data.error);
                                                    })
                                                } else if (result.isDenied) {
                                                    Swal.fire('הפעולה נכשלה', '', 'info')
                                                }
                                            })
                                        }}
                                    /></td>
                                    <td> {user.username}</td>
                                    <td> {user.email}</td>
                                </tr>
                            )}
                        </MDBTableBody>
                    </MDBTable>
                </div>
            }
        </>
    )
}

export default Users