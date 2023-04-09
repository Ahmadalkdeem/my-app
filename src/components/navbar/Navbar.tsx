import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import css from './css.module.scss'
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsXSquare } from "react-icons/bs";

const Navbarr = () => {
    const [show, setShow] = useState(false);
    const toggleOffcanvas = () => {
        setShow(!show);
    };
    return (
        <>
            {['lg'].map((expand, i) => (
                <Navbar key={i} expand={expand} className={css.MyHeader}>
                    <Container fluid>
                        <NavLink className={`${css.Mylogo}`} to="/">mtbrands</NavLink >
                        <Navbar.Toggle onClick={toggleOffcanvas} aria-controls={`offcanvasNavbar-expand-${expand}`} className='p-0 border-0 shadow-none fw-bold'>
                            <GiHamburgerMenu size={35} />
                        </Navbar.Toggle>
                        <Navbar.Offcanvas
                            show={show}
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className='bg-danger'
                        >
                            <Offcanvas.Header>
                                <Offcanvas.Title className={`${css.Mylogo}`} id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    mtbrands
                                </Offcanvas.Title>
                                <button className={css.btn} onClick={toggleOffcanvas}>      <BsXSquare size={32} /></button>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='p-0'>
                                <Nav className="justify-content-end  ">
                                    <div className='d-flex badge-dark '>
                                        <NavLink onMouseEnter={() => {
                                            console.log('aaa');
                                        }} onMouseOut={() => { }} className={css.link} to="/home">בית</NavLink>
                                        <NavLink className={css.link} to="/about">אודות</NavLink>
                                    </div>
                                    <NavLink className={css.Mylink} to="/connection">התחברות</NavLink>
                                    <NavLink className={css.Mylink} to="/addproduct">הוספה מוצר</NavLink>
                                    <NavLink className={css.Mylink} to="/Mycard">סל קניות</NavLink>

                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default Navbarr