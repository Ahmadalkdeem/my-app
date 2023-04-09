import React, { useState } from 'react'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import css from './css.module.scss'
import Cartitem from './Cartitem';
import { useAppSelector } from '../../app/hooks';
import axios from 'axios';
const Mycart = () => {

    let { cart } = useAppSelector((s) => s.mycart)
    console.log(cart);

    let pricecart = 0
    cart.map((e: any) => {
        pricecart = pricecart + e.price * e.quantity
    })


    function sendarray() {
        let arr: any = []
        cart.map((item: any) => {
            arr.push({ productId: item.category, category2: item.category2, quantity: item.quantity, color: item.color, sizeselect: item.sizeselect, brand: item.brand, src: item.src[0] })
        })

        const data = {
            customer: '642bfc084ceae1e9e52ea9be'
            , array: arr
        };

        axios.post(`http://localhost:3001/carts/neworder`, data, {
        }).then((res: any) => {
            console.log(res.data)

        }).catch((err: any) => {
            console.log(err);
            console.log(err.response.data.error);
        })
        axios.get(`http://localhost:3001/carts/getorders`).then((res: any) => {
            console.log(res.data)

        }).catch((err: any) => {
            console.log(err);
            console.log(err.response.data.error);
        })


    }
    return (
        <>
            <h1 className={css.h1}>Mycart</h1>



            <section className="h-100 gradient-custom">
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center my-4">
                        <MDBCol md="8">

                            {cart.map((item: any, i: number) =>
                                <Cartitem key={i} {...item} />)
                            }
                            <MDBCard className="mb-2">
                                <MDBCardBody>
                                    <p>
                                        <strong>Expected shipping delivery</strong>
                                    </p>
                                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="mb-4 mb-lg-0">
                                <MDBCardBody>
                                    <p>
                                        <strong>We accept</strong>
                                    </p>
                                    <MDBCardImage className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                        alt="Visa" />
                                    <MDBCardImage className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                        alt="American Express" />
                                    <MDBCardImage className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                        alt="Mastercard" />
                                    <MDBCardImage className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                                        alt="PayPal acceptance mark" />
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBCard className="mb-4">
                                <MDBCardHeader>
                                    <MDBTypography tag="h5" className="mb-0">
                                        Summary
                                    </MDBTypography>
                                </MDBCardHeader>
                                <MDBCardBody>
                                    <MDBListGroup>
                                        <MDBListGroupItem
                                            className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Products
                                            <span>${pricecart / 100 * 83}</span>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0">
                                            Shipping
                                            <span>Gratis</span>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                            className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                                <strong>
                                                    <p className="mb-0">(including VAT)</p>
                                                </strong>
                                            </div>
                                            <span>
                                                <strong>${pricecart}</strong>
                                            </span>
                                        </MDBListGroupItem>
                                    </MDBListGroup>

                                    <MDBBtn block size="lg">
                                        Go to checkout
                                    </MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>








        </>
    )
}

export default Mycart