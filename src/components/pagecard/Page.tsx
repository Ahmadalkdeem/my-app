import React, { useState, useEffect } from 'react'
import css from './page.module.scss'
import Carousel from 'react-bootstrap/Carousel';
import FsLightbox from "fslightbox-react";
import Acording from '../acording/Acording';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import axios from 'axios';
import { addCard, deleteCard, editCard } from '../../features/cards/mycart';
interface acording { question: string, answer: string };
let fitem = {
    category: "Shirts",
    category2: "gfd",
    description: " ljbkbhi iib bkb ",
    id: "123",
    name: "asdv",
    price: "23",
    price2: "456",
    src: ['http://localhost:3001/7deb82fb-8931-4f48-bcff-98a21c8c87951679166329177-car.png'],
    stock: [{ size: 'S', colors: [{ color: 'blue' }] }],
    _id: '64160b7969fc817052a517d0'
}
function Page() {
    let { id, scatgre, fcatgre } = useParams()
    const [qwert, setqwert] = useState<any>(fitem)


    let onDispatch = useAppDispatch()
    let { cart } = useAppSelector((s) => s.mycart)

    const { loading3, users3, error3 } = useAppSelector((s) => s.cardshose);
    const { loading2, users2, error2 } = useAppSelector((s) => s.cardPants);
    const { loading, users, error } = useAppSelector((s) => s.cardshirts);


    const getData = async (e: { category: string, id: string }) => {
        const { data } = await axios.get(`http://localhost:3001/uplode/findOne/${e.category}/${e.id}`);
        setqwert(data)
        setState(data.stock[0].size)
        setcolor(data.stock[0].colors[0].color)
        console.log(data);

    };

    const item = () => {

        if (fcatgre === 'shoes') {
            let x = users3.find((e: any) => e._id === id)
            if (x === undefined) {
                getData({ category: 'shoes', id: `${id}` })
            } else {
                setqwert(x)
                setState(x.stock[0].size)
                setcolor(x.stock[0].colors[0].color)
            }
        }
        if (fcatgre === 'Shirts') {
            let x = users.find((e: any) => e._id === id)
            if (x === undefined) {
                getData({ category: 'Shirts', id: `${id}` })
            } else {
                setqwert(x)
                setState(x.stock[0].size)
                setcolor(x.stock[0].colors[0].color)
            }
        }
        if (fcatgre === 'pants') {
            let x = users2.find((e: any) => e._id === id)
            if (x === undefined) {
                getData({ category: 'pants', id: `${id}` })
            } else {
                setqwert(x)
                setState(x.stock[0].size)
                setcolor(x.stock[0].colors[0].color)
            }
        }
    }
    useEffect(() => {
        item()
    }, []);

    let x = qwert.stock
    const [state, setState] = useState(qwert.stock[0].size)
    const [color, setcolor] = useState(`${qwert.stock[0].colors[0].color}`)
    let zz = qwert.stock.find((xx: any) => xx.size === state)

    const [state2, setState2] = useState(1)

    let tt = { sizeselect: state, color: color, hselect: state2 }
    console.log(tt);

    const [toggler, setToggler] = useState(false);
    const [show, setshow] = useState('');
    return (
        <>
            {qwert === fitem ? '' : <>
                <div className={css.myfdiv}>
                    <FsLightbox
                        toggler={toggler}
                        sources={qwert.src}
                        source={show}
                        type="image"


                    />
                    <Carousel dir="ltr" className={`${css.mycorsla}`}>
                        {qwert?.src.map((e: any, i: number) =>
                            <Carousel.Item key={i} interval={100000000000000} >
                                <img
                                    onClick={() => {
                                        setToggler(!toggler)
                                        setshow(e)
                                    }}
                                    className={css.MyImg}
                                    src={e}
                                    alt={qwert?.name}
                                />
                            </Carousel.Item>
                        )}

                    </Carousel>
                    <div className='p-3'>
                        <h3 className={`${css.myh4} text-center mt-2`}>{qwert?.name}</h3>
                        <h5 className={`text-center d-flex justify-content-center align-items-center ${css.myprice}`}>{qwert?.price}₪ <span className={css.Mydelateprice}>{qwert?.price2}₪</span></h5>
                        <h5 className={css.myh5}>מידות:</h5>
                        <div className='d-flex justify-content-center align-content-center flex-column '>
                            <div className={css.divsizes}>

                                {x.map((number: any, i: number) =>
                                    <div key={i} onClick={() => {
                                        if (state === number.size) {
                                        } else {
                                            setState(number.size)
                                            let zz2 = x.find((xx: any) => xx.size === number.size)
                                            let zz3 = x.findIndex((xx: any) => xx.size === number.size)
                                            let rtr = zz2?.colors.find((e: any) => e.color === color)
                                            if (rtr === undefined) {
                                                setcolor(x[zz3].colors[0].color)
                                            } else {
                                            }
                                        }
                                    }} className={number.size === `${state}` ? `${css.MyBtn1} ${css.MyBtn11}` : `${css.MyBtn1}`}>{number.size}</div>
                                )}
                            </div>

                            <h5 className={css.myh5}>צבעים:</h5>
                            <div className={css.divsizes}>
                                {zz === undefined ? '' : zz.colors.map((number: any, i: number) =>
                                    <button key={i} onClick={() => { if (color === number.color) { } else { setcolor(number.color) } }} className={color === number.color ? `${css.MyBtn22} ${css.MyBtn11}` : `${css.MyBtn22}`}> <span style={{ background: number.color }} className={css.myyspan}></span></button>
                                )}
                            </div>

                            <h5 className={css.myh5}>כמות:</h5>
                            <div className='d-flex justify-content-center align-content-center'>
                                <div className={css.sizes}>
                                    <button onClick={() => {
                                        if (state2 === 10) {
                                        } else {
                                            setState2(state2 + 1)
                                        }
                                    }} className={css.MyBtn2}>+</button>
                                    <div className={css.amount}>{state2}</div>
                                    <button onClick={() => {
                                        if (state2 === 1) { } else {
                                            setState2(state2 - 1)
                                        }
                                    }} className={css.MyBtn2}>-</button>
                                </div>
                            </div>
                        </div>
                        <button className={css.MyBtn} onClick={() => {
                            onDispatch(addCard({ ...qwert, ...tt }))
                        }}>הוספה לסל קניות</button>
                        <Acording aa={`${qwert?.description}`} />
                    </div>
                </div >
            </>}
        </>
    )
}

export default Page



