import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useParams } from 'react-router-dom'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import css from './css.module.scss'
import Card from 'react-bootstrap/Card';

const Orderdetales = () => {

    let { id } = useParams()
    let Dispatch = useAppDispatch()
    // const { loading4, users4, error4 } = useAppSelector((s) => s.orders);
    const users4 = useAppSelector((s) => s.orders.users4.find((e: any) => e._id === id));
    return (
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
                            <td> {users4._id}</td>
                            <td> {users4.userid[0]}</td>
                            <td> {users4.username[0]}</td>
                            <td> {users4.email[0]}</td>
                        </tr>

                    </MDBTableBody>
                </MDBTable>
            </div>
            <div className={css.Divcards}>
                {users4.arr.map((number: any, i: number) =>

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
    )
}

export default Orderdetales