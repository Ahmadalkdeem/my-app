import React from 'react';
import Topnav from '../Navbar2/TopNav/Topnav';
import css from './css.module.scss';
import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <>
            <MDBFooter dir='ltr' className={`text-center text-lg-start text-muted ${css.footer}`}>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>


                    <Topnav />

                </section>

                <section className=''>
                    <MDBContainer className='text-center mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase text-center fw-bold mb-4'>
                                    MTBRANDS
                                </h6>
                                <p className='text-center'>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase text-center fw-bold mb-4'>Products</h6>
                                <p className='text-center'>
                                    <a href='#!' className='text-reset'>
                                        Angular
                                    </a>
                                </p>
                                <p className='text-center'>
                                    <a href='#!' className='text-reset'>
                                        React
                                    </a>
                                </p>
                                <p className='text-center'>
                                    <a href='#!' className='text-reset'>
                                        Vue
                                    </a>
                                </p>
                                <p className='text-center'>
                                    <a href='#!' className='text-reset'>
                                        Laravel
                                    </a>
                                </p>
                            </MDBCol>



                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4 text-center'>Contact</h6>
                                <p className='text-center'>
                                    New York, NY 10012, US
                                </p>
                                <p className='text-center'>
                                    info@example.com
                                </p>
                                <p className='text-center'>
                                    + 01 234 567 88
                                </p>
                                <p className='text-center'>
                                    + 01 234 567 89
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Copyright:
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                        MDBootstrap.com
                    </a>
                </div>
            </MDBFooter>

        </>
    );
}

export default Footer;
