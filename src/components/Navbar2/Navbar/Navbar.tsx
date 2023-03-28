import css from './css.module.scss'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import Topnav from '../TopNav/Topnav';
import { Sling as Hamburger } from 'hamburger-react'

function MyNavbar() {
    const [count, setCount] = useState(false);
    const [color, setcolor] = useState(false);
    const [display, setdisplay] = useState(false);

    window.onscroll = () => {
        if (window.scrollY >= 66) {
            setcolor(true)
        } else {
            setcolor(false)
        }
    }

    return (
        <header className={color === true ? css.MyHeader : `${css.MyHeader} ${css.MyHeader2}`}>
            <>
                <Navbar className={`${css.MyNavbar}`} expand="lg">
                    <NavLink className={`${css.Mylogo}  `} to="/">mtbrands</NavLink >
                    <Navbar.Toggle onClick={() => { setCount(e => !e) }} className=' p-0 border-0 shadow-none fw-bold' aria-controls="basic-navbar-nav">
                        <Hamburger size={25} toggled={count} />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={`me-auto d-flex align-items-center ${css.mylinks}`}>
                            <div>
                                <NavLink onMouseEnter={() => {
                                    console.log('aaa');
                                    // setdisplay(true)
                                }} onMouseOut={() => { }} className={css.Mylink} to="/home">בית</NavLink>
                                <NavLink className={css.Mylink} to="/about">אודות</NavLink>
                                <NavLink className={css.Mylink} to="/connection">התחברות</NavLink>
                                <NavLink className={css.Mylink} to="/addproduct">הוספה מוצר</NavLink>
                                <NavLink className={css.Mylink} to="/Mycard">סל קניות</NavLink>
                            </div>
                            <Topnav />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
            {display === false ? '' : <div onMouseEnter={() => {
                console.log('aaa');
                setdisplay(true)
            }} onMouseOut={() => { setdisplay(false) }} className={css.divcatgres}></div>}
        </header>
    )
}

export default MyNavbar