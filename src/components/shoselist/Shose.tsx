import { useState, useEffect } from 'react'
import css from './css.module.scss'
import axios from 'axios'
import Cardlist from '../cardlist2/Cardlist';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addItem3 } from '../../features/cards/cardshose';

function Shose() {
    const [end, setend] = useState<any>(true);
    const { loading3, users3, error3 } = useAppSelector((s) => s.cardshose);
    let x = users3.length
    let Dispatch = useAppDispatch()
    const getData = async () => {
        axios.get(`http://localhost:3001/uplode/shoesproduct/1/${x}`, {
        }).then((response) => {
            if (response.data.length < 1) {
                setend(false)
            }
            Dispatch(addItem3(response.data))
        }).catch((err: any) => {
            console.log(err);
            console.log(err.response.data.error);
        })
    };


    return (
        <div>
            <Cardlist h1='נעליים גבריים' users={users3} />
            <button onClick={() => {
                if (end === true) {
                    console.log('aaa');

                    getData()
                }

            }}>ahmad</button>
        </div>
    )
}

export default Shose