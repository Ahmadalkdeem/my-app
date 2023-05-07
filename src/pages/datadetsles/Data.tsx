import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useAppSelector } from '../../app/hooks';
import css from './css.module.scss'
export const Data = () => {
    const { accessToken } = useAppSelector((s) => s.user);
    const [date2, setdate2] = useState<any>()
    const [totle, settotle] = useState<any>(4)
    const [totle2, settotle2] = useState<any>(1)
    const [startDate, setStartDate] = useState<any>(new Date());
    const [endDate, setEndDate] = useState<any>(new Date());

    useEffect(() => {
        window.scrollTo(0, 0)
        getdata()
    }, []);
    function getdata() {
        axios.get(`http://localhost:3001/carts/getorders/detales/${accessToken}/${startDate}/${endDate}`, {
        }).then((response) => {
            console.log(response);
            setdate2(response.data)
        }).catch((err: any) => {
            console.log(err);
            console.log(err.response.data.error);
        })

        axios.get(`http://localhost:3001/carts/getorders/count2/${accessToken}/${startDate}/${endDate}`, {
        }).then((response) => {
            console.log(response);
            if (response.data.result[0] !== undefined) {
                settotle2(response.data.result[0])
            }

        }).catch((err: any) => {
            console.log(err);
        })
    }
    return (
        <div className='d-flex justify-content-center align-items-center flex-wrap overflow-auto'>
            <div className='m-3'>
                <h5 className={css.h1}> מחיר הזמנות : {totle2.total}</h5>
                <LineChart width={400} height={250} data={date2}>
                    <XAxis dataKey="_id.date" />
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="totalPrice" stroke="#000" />
                    <Tooltip />
                </LineChart>
            </div>
            <div>
                <h5 className={css.h1}>ממוצע מחיר ההזמנות : {totle2.avg}</h5>

                <LineChart width={400} height={250} data={date2}>
                    <XAxis dataKey="_id.date" />
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="avg" stroke="#000" />
                    <Tooltip />
                </LineChart>
            </div>
            <div>
                <h5 className={css.h1}>מספר ההזמנות : {totle2.count}</h5>
                <LineChart width={400} height={250} data={date2}>
                    <XAxis dataKey="_id.date" />
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="count" stroke="#000" />
                    <Tooltip />
                </LineChart>
            </div>
            <div>
                <input value={totle} onChange={(e: any) => {
                    if (e.target.value > 0 && 1000 > e.target.value) {
                        settotle(e.target.value)
                    }
                }} min='1' max='1000' type="number" />
                <button onClick={getdata}>click</button>
                <form >
                    <label>
                        Start Date:
                        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </label>
                    <label>
                        End Date:
                        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </label>
                </form>
                <div>totle2:{totle2.total}</div>
            </div>
        </div>
    )
}
