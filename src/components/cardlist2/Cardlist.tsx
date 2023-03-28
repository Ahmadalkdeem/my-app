import Select from 'react-select'
import { useState, useEffect } from 'react'
import MyCard from '../card3/Card'
import css from './css.module.scss'
import { productss } from '../../features/counter/List'
import { Link, useNavigate, useParams } from "react-router-dom";
import { Cardtype } from "../../@types/Mytypes"
import phto1 from './istockphoto-1400086779-170667a.jpg'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchUsers } from '../../features/cards/cardshirts'
let xx: any = {
    control: (base: any) => ({
        ...base,
        border: '1.5px solid black',
        borderRadius: '4px',
        boxShadow: 'none',
        '&:hover': {
            border: '1.5px solid black'
        }
    }), option: (base: any, state: any) => ({
        ...base,
        color: "#1e2022",
        textAlign: 'center',
        // zIndex: '9999999999'
    })
}



const SizeOptions: any = [];
const SizeOptions2: any = [];

let zxcv: any = []
function Cardlist(props: { users: [], h1: string }) {
    props.users.forEach((e: Cardtype) => {
        let x = SizeOptions.find((ee: any) => ee.value === e.name)
        let y = SizeOptions2.find((ee: any) => ee.value === e.category2)
        if (x === undefined) SizeOptions.push({ value: e.name, label: e.name })
        if (y === undefined) SizeOptions2.push({ value: e.category2, label: e.category2 })
    })

    const [serahre, setserahre] = useState('');
    const [size, setsize] = useState('');
    const [mylist, setmylist] = useState('');
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>

            <h1 id='top' className={css.Myhh1}>
                {props.h1}
            </h1>
            <Select
                id='SizeOptions'
                options={SizeOptions}
                onChange={(e: any) => {
                    console.log(e);
                    setmylist('')

                    setsize(e.value)
                }}
                styles={xx}
                onMenuOpen={() => {
                    setmylist('SizeOptions')
                    console.log('aa');

                }}
                onMenuClose={() => {
                    console.log('bb');
                    setmylist('')
                }}
                className={mylist === 'SizeOptions' ? `${css.mmyselest}` : ''}
                placeholder='שם מוצר'
            />
            <Select
                id='SizeOptions2'
                options={SizeOptions2}
                onChange={(e: any) => {
                    console.log(e);
                    setmylist('')

                    setserahre(e.value)
                }}
                styles={xx}
                onMenuOpen={() => {
                    setmylist('SizeOptions2')
                }}

                onMenuClose={() => {
                    setmylist('')
                }}
                className={mylist === 'SizeOptions2' ? `${css.mmyselest}` : ''}
                placeholder='קטגוריה משנית'
            />
            <div className={`${css.MyDiv}`}>

                {props.users.length > 0 && props.users.filter((val: Cardtype) => {
                    if (size === '' && serahre === '') {
                        return val
                    } else if (val.name.includes(size) && serahre === '') {
                        return val
                    } else if (val.category2.includes(serahre) && size === '') { return val }
                    else if (val.category2.includes(serahre) && val.name.includes(size)) { return val }
                }).map((number: any, i: number) => (
                    <MyCard key={i} {...number} />))}
                {/* {zxcv.filter((val: Cardtype) => {
                    if (size === '' && serahre === '') {
                        return val
                    } else if (val.name.includes(size) && serahre === '') {
                        return val
                    } else if (val.category2.includes(serahre) && size === '') { return val }
                    else if (val.category2.includes(serahre) && val.name.includes(size)) { return val }
                }).map((number: any, i: number) => (
                    <MyCard key={i}
                        {...number} />
                ))} */}
            </div>
        </>
    )
}

export default Cardlist