import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useParams } from 'react-router-dom'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import css from './css.module.scss'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Spiner from '../../components/Spiner/Spiner'
const Orderdetales = () => {
    let { id2 } = useParams()
    const [users, setusers] = useState(useAppSelector((s) => s.orders.users4.find((e: any) => e._id === id2)))
    let Dispatch = useAppDispatch()
    // const { loading4, users4, error4 } = useAppSelector((s) => s.orders);
    async function getorder() {

        if (users === undefined || users === null) {
            axios.get(`http://localhost:3001/carts/getoneorder/${id2}`, {
            }).then((response) => {

                setusers(response.data[0])
            }).catch((err: any) => {
                console.log(err);
                console.log(err.response.data.error);
            })
        }
    }
    useEffect(() => {
        getorder()
    }, []);
    return (
        <>
            {users === undefined || null ? <Spiner /> :
                <>
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
                                <tr >
                                    <th scope='row'>{1}</th>
                                    <td> {users._id}</td>
                                    <td> {users.userid[0]}</td>
                                    <td> {users.username[0]}</td>
                                    <td> {users.email[0]}</td>
                                </tr>

                            </MDBTableBody>
                        </MDBTable>
                    </div>
                    <div className={css.Divcards}>
                        {users.arr.map((number: any, i: number) =>

                            <Card key={i} style={{ width: '18rem' }}>
                                <Card.Img className={css.Img} variant="top" src={number.src} />
                                <Card.Body>
                                    <div>
                                        <MDBTable className={css.table}>
                                            <MDBTableHead>
                                                <tr>
                                                    <th scope='col'>brand:</th>
                                                    <th scope='col'>category:</th>
                                                    <th scope='col'>צבע:</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                                <tr >
                                                    <td> {number.brand}</td>
                                                    <td> {number.category2}</td>
                                                    <td> {number.color}</td>
                                                </tr>

                                            </MDBTableBody>
                                        </MDBTable>
                                    </div>
                                    <div>
                                        <MDBTable className={css.table}>
                                            <MDBTableHead>
                                                <tr>
                                                    <th scope='col'>כמות:</th>
                                                    <th scope='col'>מידה:</th>
                                                    <th scope='col'>צבע:</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                                <tr >
                                                    <td> {number.quantity}</td>
                                                    <td> {number.sizeselect}</td>
                                                    <td> {number.color}</td>
                                                </tr>

                                            </MDBTableBody>
                                        </MDBTable>
                                    </div>

                                </Card.Body>
                            </Card>
                        )}
                    </div>
                </>
            }

        </>
    )
}

export default Orderdetales